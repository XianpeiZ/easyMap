package com.spbweb.service.Impl;

import com.spbweb.dao.MapdetailMapper;
import com.spbweb.entity.Mapdetail;
import com.spbweb.service.MapdetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MapdetailServiceImpl implements MapdetailService
{
    @Autowired
    MapdetailMapper mapdetailMapper;

    @Override
    public Mapdetail findMapByMapId (Integer mapId)
    {
        return mapdetailMapper.findMapByMapId( mapId );
    }

    @Override
    public ArrayList<Mapdetail> selectAll ()
    {
        return mapdetailMapper.selectAll();
    }

    @Override
    public int deleteMapByMapId (Integer mapId)
    {
        return mapdetailMapper.deleteMapByMapId( mapId );
    }

    @Override
    public int deleteMapByMapName (String mapName){
        return mapdetailMapper.deleteMapByMapName(mapName);
    }

    @Override
    public int insert(Mapdetail mapdetail){
        return mapdetailMapper.insert(mapdetail);
    }

    @Override
    public Mapdetail findMapByMapName(String mapName){
        return mapdetailMapper.findMapByMapName(mapName);
    }

    @Override
    public ArrayList<Mapdetail> findMapByMapOwner(String userName){
        return mapdetailMapper.findMapByMapOwner(userName);
    }
    
}
