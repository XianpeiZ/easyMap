package com.spbweb.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.spbweb.entity.Iot;
import com.spbweb.entity.Mapdetail;
import com.spbweb.entity.Storydetail;
import com.spbweb.service.MapdetailService;
import com.spbweb.service.StorydetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
public class MapController {

    @Autowired
    MapdetailService mapdetailService;

    @Autowired
    StorydetailService storydetailService;

    /**
     * 新建map
     * @param newMapName
     * @param newMapDesc
     * @return
     */
    @PostMapping("/api/addNewMap")
    @ResponseBody
    public String addNewMap(@RequestParam String newMapName, @RequestParam String newMapDesc){
        try {
            Mapdetail mapdetail = new Mapdetail();
            mapdetail.setMapName(newMapName);
            mapdetail.setMapOwner("zhangsan");
            mapdetail.setMapSetupDate(new Timestamp(new Date().getTime()));
            mapdetail.setMapDescrpt(newMapDesc);
            this.mapdetailService.insert(mapdetail);
            return "ok";
        } catch (Exception e) {
            // TODO Auto-generated catch block
        }

        return "something error";
    }
    /**
     * 删除map
     * @param mapName
     * @return
     */
    @PostMapping("/api/deleteMap")
    @ResponseBody
    public int deleteMap(@RequestParam String mapName){
        return mapdetailService.deleteMapByMapName(mapName);
    }

    /**
     * 需要把当前mapName传进来
     * @param tempLay, mapName
     * @return 0
     */
    @Transactional
    @PostMapping("/api/saveMap")
    @ResponseBody
    public int saveMap(@RequestParam String tempLay, @RequestParam String mapName){
        System.out.println(tempLay);
        System.out.println(mapName);
    	Mapdetail m = mapdetailService.findMapByMapName(mapName);
    	System.out.println(m.getMapId());
        int mapId = m.getMapId();

        JSONArray jsonArray = JSON.parseArray(tempLay);
        List<Map<String,Object>> mapListJson = (List)jsonArray;
        Timestamp timestamp = new Timestamp(new Date().getTime());
        for(Map card:mapListJson){

            if((int)card.get("flag")!=-1) {
                if((int)card.get("id")==0){
                    Storydetail record = new Storydetail();
                    record.setStoryTitle((String)card.get("title"));
                    record.setColorPick((String)card.get("colorPick"));
                    record.setCoodX(Double.valueOf(card.get("x").toString()));
                    record.setCoodY(Double.valueOf(card.get("y").toString()));
                    record.setStoryDescription((String)card.get("des"));
                    //mapName或者mapId需要一个
                    record.setMapId(mapId);
                    record.setStorySetupDate(timestamp);
                    record.setStoryLastModifiedDate(timestamp);

                    storydetailService.insert(record);
                }else {
                    Storydetail story = new Storydetail();
                    story.setStoryTitle((String) card.get("title"));
                    story.setColorPick((String) card.get("colorPick"));
                    story.setCoodX(Double.valueOf(card.get("x").toString()));
                    story.setCoodY(Double.valueOf(card.get("y").toString()));
                    story.setStoryDescription((String) card.get("des"));
                    //mapName或者mapId需要一个
                    story.setStoryId((int) card.get("i"));
                    story.setMapId(mapId);
                    story.setStoryLastModifiedDate(timestamp);

                    //编辑card
                    if ((int) card.get("flag") == 1) {
                        storydetailService.updateStoryByStoryId(story);
                    }
                }

            }
        }

        return 0;
    }

    /**
     * 根据map名获得card列表
     * @param mapName
     * @return 返回JSONArray格式的storydetails
     */
    @PostMapping("/api/getBackendMap")
    @ResponseBody
    public String getMap(@RequestParam String mapName){
        Mapdetail m = mapdetailService.findMapByMapName(mapName);
        int mapId = m.getMapId();
        ArrayList<Storydetail> res = storydetailService.selectAll(mapId);
        return JSON.toJSONString(res);
    }
    
    // 获取user的所有map
    @PostMapping("/api/getMapList")
    @ResponseBody
    public Object getMapList(@RequestParam String userName){
        ArrayList<Mapdetail> res = mapdetailService.findMapByMapOwner(userName);
        return JSON.toJSONString(res);
        
    }

<<<<<<< HEAD
    @PostMapping("api/getIotInf")
    @ResponseBody
    public Object getIotInf(String iotName)
    {
        String filePath1 = "/root/data" + File.separator + "LightSensorDataRecord.txt";
        String filePath2 = "/root/data" + File.separator + "RotationSensorDataRecord.txt";
        String filePath3 = "/root/data" + File.separator + "HC_SR04SensorDataRecord.txt";
        String input;
        String[] inputSplit;
        String sensor = "";
        ArrayList<Iot> list = new ArrayList<>();
        BufferedReader bufferedReader = null;

        try
        {
            switch ( iotName )
            {
                case "iot1":
                {
                    sensor = "LightSensor";
                    bufferedReader = new BufferedReader( new FileReader( filePath1 ) );
                    break;
                }
                case "iot2":
                {
                    sensor = "RotationSensor";
                    bufferedReader = new BufferedReader( new FileReader( filePath2 ) );
                    break;
                }
                case "iot3":
                {
                    sensor = "LightSensor";
                    bufferedReader = new BufferedReader( new FileReader( filePath3 ) );
                    break;
                }
            }
        }
        catch ( IOException e )
        {
            e.printStackTrace();
        }


        try
        {
            while ( bufferedReader.ready() )
            {
                input = bufferedReader.readLine();
                inputSplit = input.split( " : " );
                Iot iot = new Iot();
                iot.setName( sensor );
                iot.setInfo( inputSplit[1] );
                iot.setData( inputSplit[0] );
                list.add( iot );
            }
        }
        catch ( IOException e )
        {
            e.printStackTrace();
        }
        return JSON.toJSONString( list );
=======
    @PostMapping("/api/deleteItem")
    @ResponseBody
    public  String deleteItem(@RequestParam("storyId") int cardId){
        if(storydetailService.deleteStoryByStoryId(cardId)==1){
            return "true";
        } else
            return "false";
>>>>>>> f9e088802a8dc0b5ca721030de065863a960dbcf
    }

}
