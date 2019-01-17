package com.spbweb.service;

import com.spbweb.entity.Mapdetail;
import org.springframework.stereotype.Repository;

@Repository
public interface MapdetailService
{
    public Mapdetail findMapByMapId (Integer mapId);
}
