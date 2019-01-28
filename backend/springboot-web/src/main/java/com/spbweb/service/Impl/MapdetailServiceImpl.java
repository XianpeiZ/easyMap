package com.spbweb.service.Impl;

import com.spbweb.dao.MapdetailMapper;
import com.spbweb.entity.Mapdetail;
import com.spbweb.service.MapdetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Map;

@Service
public class MapdetailServiceImpl implements MapdetailService
{
    @Autowired
    MapdetailMapper mapdetailMapper;

    @Override
    public Mapdetail findMapByMapId (Integer mapId)
    {
        Mapdetail mapdetail = mapdetailMapper.findMapByMapId( mapId );
        return mapdetail;
    }

    @Override
    public ArrayList<Mapdetail> selectAll ()
    {
        ArrayList<Mapdetail> temp;
        temp = mapdetailMapper.selectAll();
        return temp;
    }

    @Override
    public int deleteMapByMapId (Integer mapId)
    {
        int ret;
        ret = mapdetailMapper.deleteMapByMapId( mapId );
        return ret;
    }

    @Override
    public int deleteMapByMapName (String mapName){
        int res;
        res = mapdetailMapper.deleteMapByMapName(mapName);
        return res;
    }

    @Override
    public int insert(Mapdetail mapdetail){
        int res;
        res = mapdetailMapper.insert(mapdetail);
        return res;
    }

    @Override
    public Mapdetail findMapByMapName(String mapName){
        Mapdetail res = mapdetailMapper.findMapByMapName(mapName);
        return res;
    }

    @Override
    public ArrayList<Mapdetail> findMapByMapOwner(String userName){
        ArrayList<Mapdetail> res = mapdetailMapper.findMapByMapOwner(userName);
        return res;
    }
    
}
