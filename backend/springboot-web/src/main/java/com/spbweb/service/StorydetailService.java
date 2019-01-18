package com.spbweb.service;

import com.spbweb.entity.Storydetail;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface StorydetailService
{
    public Storydetail findStoryByStoryId (Integer storyId);
    public ArrayList<Storydetail> selectAll (Integer mapId);
    public int insert (Storydetail record);
    public int deleteStoryByStoryId (Integer storyId);
    public int updateStoryByStoryId (Integer storyId , Storydetail record);
}
