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
        return storydetailMapper.findStoryByStoryId (storyId);
    }


    @Override
    public ArrayList<Storydetail> selectAll (Integer mapId)
    {
        return storydetailMapper.selectAll(mapId);
    }


    @Override
    public int insert (Storydetail record)
    {
        return storydetailMapper.insert( record );
    }

    @Override
    public int deleteStoryByStoryId (Integer storyId)
    {
        return storydetailMapper.deleteStoryByStoryId( storyId );
    }

    @Override
    public int updateStoryByStoryId(Integer storyId , Storydetail record)
    {
        record.setStoryId( storyId );
        return storydetailMapper.updateStoryByStoryId( storyId , record );
    }
}
