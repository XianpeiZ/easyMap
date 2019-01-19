package com.spbweb.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.spbweb.entity.Mapdetail;
import com.spbweb.service.MapdetailService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
public class MapController {

    @Autowired
    MapdetailService mapdetailService;

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
            mapdetail.setMapSetupDate(new Date());
            mapdetail.setMapDescrpt(newMapDesc);
            this.mapdetailService.insert(mapdetail);
            return "ok";
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
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
        System.out.println(mapName);
        int res = mapdetailService.deleteMapByMapName(mapName);
        return res;
    }

    /**
     * 待完成
     * @param tempLay
     * @return
     */
    @PostMapping("/api/saveMap")
    @ResponseBody
    public int saveMap(@RequestParam String tempLay){
        System.out.println(tempLay);
        JSONArray jsonArray = JSON.parseArray(tempLay);
        List<Map<String,Object>> mapListJson = (List)jsonArray;
        for(Map card:mapListJson){
            if((int)card.get("flag")==-1){
                continue;
            }
            else if((int)card.get("flag")==0){

            }
            System.out.println(card);
            System.out.println(card.get("flag"));
        }

        return 0;
    }

}
