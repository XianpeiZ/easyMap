package com.spbweb.service;

import com.spbweb.entity.Mapdetail;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface MapdetailService
{
    public Mapdetail findMapByMapId (Integer mapId);
    public ArrayList<Mapdetail> selectAll ();
    public int deleteMapByMapId (Integer mapId);
    public int deleteMapByMapName (String mapName);
    public int insert(Mapdetail mapdetail);
}
