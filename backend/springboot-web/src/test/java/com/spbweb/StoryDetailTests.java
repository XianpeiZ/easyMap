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
        Assert.assertEquals( 1 , result );
    }

    @Test
    public void selectAllTest()
    {
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        ArrayList<Storydetail> storydetailArrayList1;
        ArrayList<Storydetail> storydetailArrayList2;
        Storydetail storydetail1 = new Storydetail();
        Storydetail storydetail2 = new Storydetail();

        storydetailArrayList1 = storydetailMapper.selectAll( 48 );

        storydetail1.setMapId( 48 );
        storydetail1.setStoryTitle( "abc" );
        storydetail1.setStoryDescription( "story detail test" );
        storydetail1.setStorySetupDate( timestamp );
        storydetail1.setStoryLastModifiedDate( timestamp );
        storydetail1.setCoodX( 1.0 );
        storydetail1.setCoodY( 1.0 );
        storydetail1.setColorPick( "RED" );
        storydetail1.setComments( "no comments" );
        storydetailMapper.insert( storydetail1 );

        storydetail2.setMapId( 48 );
        storydetail2.setStoryTitle( "def" );
        storydetail2.setStoryDescription( "story detail test" );
        storydetail2.setStorySetupDate( timestamp );
        storydetail2.setStoryLastModifiedDate( timestamp );
        storydetail2.setCoodX( 1.0 );
        storydetail2.setCoodY( 1.0 );
        storydetail2.setColorPick( "RED" );
        storydetail2.setComments( "no comments" );
        storydetailMapper.insert( storydetail2 );

        storydetailArrayList2 = storydetailMapper.selectAll( 48 );

        Assert.assertEquals( storydetailArrayList1.size() + 2 , storydetailArrayList2.size() );
        Assert.assertEquals( storydetail1.getStoryTitle() , storydetailArrayList2.get( storydetailArrayList2.size() - 2 ).getStoryTitle() );
        Assert.assertEquals( storydetail2.getStoryTitle() , storydetailArrayList2.get( storydetailArrayList2.size() - 1 ).getStoryTitle() );
    }

    @Test
    public void findStoryByStoryIdTest()
    {
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        ArrayList<Storydetail> storydetailArrayList;
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
        storydetailMapper.insert( storydetail );

        storydetailArrayList = storydetailMapper.selectAll( 48 );
        Assert.assertEquals( storydetail.getStoryTitle() , storydetailArrayList.get( storydetailArrayList.size() - 1 ).getStoryTitle() );

        storydetail = storydetailMapper.findStoryByStoryId( storydetailArrayList.get( storydetailArrayList.size() - 1 ).getStoryId() );
        Assert.assertEquals( storydetailArrayList.get( storydetailArrayList.size() - 1 ).getStoryTitle() , storydetail.getStoryTitle() );
    }

    @Test
    public void setStorydetailMapper()
    {
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        ArrayList<Storydetail> storydetailArrayList1;
        ArrayList<Storydetail> storydetailArrayList2;
        Storydetail storydetail1 = new Storydetail();
        Storydetail storydetail2 = new Storydetail();

        storydetailArrayList1 = storydetailMapper.selectAll( 48 );

        storydetail1.setMapId( 48 );
        storydetail1.setStoryTitle( "abc" );
        storydetail1.setStoryDescription( "story detail test" );
        storydetail1.setStorySetupDate( timestamp );
        storydetail1.setStoryLastModifiedDate( timestamp );
        storydetail1.setCoodX( 1.0 );
        storydetail1.setCoodY( 1.0 );
        storydetail1.setColorPick( "RED" );
        storydetail1.setComments( "no comments" );
        storydetailMapper.insert( storydetail1 );

        storydetail2.setMapId( 48 );
        storydetail2.setStoryTitle( "def" );
        storydetail2.setStoryDescription( "story detail test" );
        storydetail2.setStorySetupDate( timestamp );
        storydetail2.setStoryLastModifiedDate( timestamp );
        storydetail2.setCoodX( 1.0 );
        storydetail2.setCoodY( 1.0 );
        storydetail2.setColorPick( "RED" );
        storydetail2.setComments( "no comments" );
        storydetailMapper.insert( storydetail2 );

        storydetailArrayList1 = storydetailMapper.selectAll( 48 );
        Assert.assertEquals( storydetail2.getStoryTitle() , storydetailArrayList1.get( storydetailArrayList1.size() - 1 ).getStoryTitle() );

        int result = storydetailMapper.deleteStoryByStoryId( storydetailArrayList1.get( storydetailArrayList1.size() - 1 ).getStoryId() );
        Assert.assertEquals( 1 , result );

        storydetailArrayList2 = storydetailMapper.selectAll( 48 );
        Assert.assertEquals( storydetailArrayList1.size() - 1 , storydetailArrayList2.size() );
        Assert.assertEquals( storydetail1.getStoryTitle() , storydetailArrayList2.get( storydetailArrayList2.size() - 1 ).getStoryTitle() );
    }

}

