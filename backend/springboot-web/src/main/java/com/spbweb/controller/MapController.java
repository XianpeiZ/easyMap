package com.spbweb.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.spbweb.entity.Mapdetail;
import com.spbweb.entity.Storydetail;
import com.spbweb.service.MapdetailService;
import com.spbweb.service.StorydetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
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
        Mapdetail m = mapdetailService.findMapByMapName(mapName);
        int mapId = m.getMapId();

        JSONArray jsonArray = JSON.parseArray(tempLay);
        List<Map<String,Object>> mapListJson = (List)jsonArray;
        Timestamp timestamp = new Timestamp(new Date().getTime());
        for(Map card:mapListJson){

            if((int)card.get("flag")!=-1) {
                Storydetail story = new Storydetail();
                story.setStoryTitle((String)card.get("title"));
                story.setColorPick((String)card.get("colorPick"));
                story.setCoodX((double)card.get("x"));
                story.setCoodY((double)card.get("y"));
                story.setStoryDescription((String)card.get("des"));
                //mapName或者mapId需要一个
                story.setStoryId((int)card.get("i"));
                story.setMapId(mapId);
                story.setStoryLastModifiedDate(timestamp);

                //新增card
                if((int)card.get("flag")==0){
                    story.setStorySetupDate(timestamp);
                    storydetailService.insert(story);
                }
                //编辑card
                else if((int)card.get("flag")==1){
                    storydetailService.updateStoryByStoryId(story.getStoryId(),story);
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

}
