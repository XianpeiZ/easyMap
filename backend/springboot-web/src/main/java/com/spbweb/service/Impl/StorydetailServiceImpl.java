package com.spbweb.service.Impl;

import com.spbweb.dao.StorydetailMapper;
import com.spbweb.entity.Storydetail;
import com.spbweb.service.StorydetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
