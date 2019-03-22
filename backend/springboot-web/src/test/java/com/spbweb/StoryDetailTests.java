package com.spbweb;

import com.spbweb.dao.MapdetailMapper;
import com.spbweb.dao.StorydetailMapper;
import com.spbweb.entity.Mapdetail;
import com.spbweb.entity.Storydetail;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;


@RunWith(SpringRunner.class)
@MybatisTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class StoryDetailTests
{

    @Autowired
    private StorydetailMapper storydetailMapper;

    @Test
    public void insertTest()
    {
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        Storydetail storydetail = new Storydetail();
        storydetail.setMapId( 48 );
        storydetail.setStoryTitle( "abc" );
        storydetail.setStoryDescription( "story detail test" );
        storydetail.setStorySetupDate( timestamp );
        storydetail.setStoryLastModifiedDate( timestamp );
        storydetail.setCoodX( 1.0 );
        storydetail.setCoodY( 1.0 );
        storydetail.setColorPick( "RED" );
        storydetail.setComments( "no comments" );
        int result = storydetailMapper.insert( storydetail );
        Assert.assertEquals( 1,result );
    }

}

