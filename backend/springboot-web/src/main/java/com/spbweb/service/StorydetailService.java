package com.spbweb.service;

import com.spbweb.entity.Storydetail;
import org.springframework.stereotype.Repository;

@Repository
public interface StorydetailService
{
    public Storydetail findStoryByStoryId (Integer storyId);
}
