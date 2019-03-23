package com.spbweb.service;

import com.spbweb.entity.Storydetail;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface StorydetailService
{
    Storydetail findStoryByStoryId (Integer storyId);
    ArrayList<Storydetail> selectAll (Integer mapId);
    int insert (Storydetail record);
    int deleteStoryByStoryId (Integer storyId);
    int updateStoryByStoryId (Storydetail record);
}
