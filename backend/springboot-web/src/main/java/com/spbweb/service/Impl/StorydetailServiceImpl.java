package com.spbweb.service.Impl;

import com.spbweb.dao.StorydetailMapper;
import com.spbweb.entity.Storydetail;
import com.spbweb.service.StorydetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class StorydetailServiceImpl implements StorydetailService
{
    @Autowired
    StorydetailMapper storydetailMapper;

    @Override
    public Storydetail findStoryByStoryId (Integer storyId)
    {
        Storydetail storydetail = storydetailMapper.findStoryByStoryId (storyId);
        return storydetail;
    }


    @Override
    public ArrayList<Storydetail> selectAll (Integer mapId)
    {
        ArrayList<Storydetail> temp;
        temp = storydetailMapper.selectAll(mapId);
        return temp;
    }

    @Override
    public int insert (Storydetail record)
    {
        int ret ;
        ret = storydetailMapper.insert( record );
        return ret;
    }
}
