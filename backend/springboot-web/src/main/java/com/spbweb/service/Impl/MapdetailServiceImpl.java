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
}
