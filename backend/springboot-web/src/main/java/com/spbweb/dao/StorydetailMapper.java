package com.spbweb.dao;

import com.spbweb.entity.Storydetail;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
@Mapper
@Repository
public interface StorydetailMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table storyDetail
     *
     * @mbg.generated
     */
    int insert(Storydetail record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table storyDetail
     *
     * @mbg.generated
     */
    ArrayList<Storydetail> selectAll(Integer mapId);

    Storydetail findStoryByStoryId (Integer storyId);
}