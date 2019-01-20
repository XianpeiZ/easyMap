package com.spbweb.service;

import com.spbweb.entity.Mapdetail;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface MapdetailService
{
    Mapdetail findMapByMapId (Integer mapId);
    ArrayList<Mapdetail> selectAll ();
    int deleteMapByMapId (Integer mapId);
    int deleteMapByMapName (String mapName);
    int insert(Mapdetail mapdetail);
    Mapdetail findMapByMapName(String mapName);
}
