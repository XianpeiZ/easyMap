package com.spbweb.controller;

import com.spbweb.entity.Mapdetail;
import com.spbweb.service.MapdetailService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
public class MapController {

    @Autowired
    MapdetailService mapdetailService;

    /**
     * 新建map
     * @param title
     * @param descrpt
     * @return
     */
    @PostMapping("/api/map")
    @ResponseBody
    public ResponseEntity<Void> addMap(@RequestParam String title, @RequestParam String descrpt){
        try {
            Mapdetail mapdetail = new Mapdetail();
            mapdetail.setMapName(title);
            mapdetail.setMapOwner(null);
            mapdetail.setMapSetupDate(new Date());
            mapdetail.setMapDescrpt(descrpt);
            this.mapdetailService.insert(mapdetail);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }

    /**
     * 删除map
     * @param mapId
     * @return
     */
    @PostMapping("/api/deleteMap")
    @ResponseBody
    public int deleteMap(Integer mapId){
        int res = mapdetailService.deleteMapByMapId(mapId);
        return res;
    }

}
