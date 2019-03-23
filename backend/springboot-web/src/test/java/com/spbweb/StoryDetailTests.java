package com.spbweb;

import com.spbweb.dao.MapdetailMapper;
import com.spbweb.dao.StorydetailMapper;
import com.spbweb.entity.Mapdetail;
import com.spbweb.entity.Storydetail;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.internal.verification.Times;
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
        storydetail.setStoryDescription( "story detail insert test" );
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
        storydetail1.setStoryTitle( "def" );
        storydetail1.setStoryDescription( "story detail select all test" );
        storydetail1.setStorySetupDate( timestamp );
        storydetail1.setStoryLastModifiedDate( timestamp );
        storydetail1.setCoodX( 2.0 );
        storydetail1.setCoodY( 2.0 );
        storydetail1.setColorPick( "BLUE" );
        storydetail1.setComments( "no comments" );
        storydetailMapper.insert( storydetail1 );

        storydetail2.setMapId( 48 );
        storydetail2.setStoryTitle( "ghi" );
        storydetail2.setStoryDescription( "story detail select all test" );
        storydetail2.setStorySetupDate( timestamp );
        storydetail2.setStoryLastModifiedDate( timestamp );
        storydetail2.setCoodX( 3.0 );
        storydetail2.setCoodY( 3.0 );
        storydetail2.setColorPick( "YELLOW" );
        storydetail2.setComments( "no comments" );
        storydetailMapper.insert( storydetail2 );

        storydetailArrayList2 = storydetailMapper.selectAll( 48 );

        Assert.assertEquals( storydetailArrayList1.size() + 2 , storydetailArrayList2.size() );
        Assert.assertEquals( (Integer)48 ,storydetailArrayList2.get( storydetailArrayList2.size() - 1 ).getMapId() );
        Assert.assertEquals( storydetail1.getStoryTitle() , storydetailArrayList2.get( storydetailArrayList2.size() - 2 ).getStoryTitle() );
        Assert.assertEquals( storydetail1.getComments() , storydetailArrayList2.get( storydetailArrayList2.size() - 2 ).getComments() );
        Assert.assertEquals( storydetail2.getStoryTitle() , storydetailArrayList2.get( storydetailArrayList2.size() - 1 ).getStoryTitle() );
        Assert.assertEquals( storydetail2.getStoryDescription() , storydetailArrayList2.get( storydetailArrayList2.size() - 1 ).getStoryDescription() );
    }

    @Test
    public void findStoryByStoryIdTest()
    {
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        ArrayList<Storydetail> storydetailArrayList;
        Storydetail storydetail = new Storydetail();

        storydetail.setMapId( 48 );
        storydetail.setStoryTitle( "abc" );
        storydetail.setStoryDescription( "story detail find test" );
        storydetail.setStorySetupDate( timestamp );
        storydetail.setStoryLastModifiedDate( timestamp );
        storydetail.setCoodX( 4.0 );
        storydetail.setCoodY( 4.0 );
        storydetail.setColorPick( "GOLDEN" );
        storydetail.setComments( "no comments" );
        storydetailMapper.insert( storydetail );

        storydetailArrayList = storydetailMapper.selectAll( 48 );
        Assert.assertEquals( storydetail.getStoryTitle() , storydetailArrayList.get( storydetailArrayList.size() - 1 ).getStoryTitle() );


        storydetail = storydetailMapper.findStoryByStoryId( storydetailArrayList.get( storydetailArrayList.size() - 1 ).getStoryId() );
        Assert.assertEquals( storydetailArrayList.get( storydetailArrayList.size() - 1 ).getStoryTitle() , storydetail.getStoryTitle() );
        Assert.assertEquals( storydetailArrayList.get( storydetailArrayList.size() - 1 ).getColorPick() , storydetail.getColorPick() );
        Assert.assertEquals( storydetailArrayList.get( storydetailArrayList.size() - 1 ).getStoryLastModifiedDate() , storydetail.getStoryLastModifiedDate() );
    }

    @Test
    public void deleteStoryByStoryIdTest()
    {
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        ArrayList<Storydetail> storydetailArrayList1;
        ArrayList<Storydetail> storydetailArrayList2;
        Storydetail storydetail1 = new Storydetail();
        Storydetail storydetail2 = new Storydetail();

        storydetail1.setMapId( 48 );
        storydetail1.setStoryTitle( "def" );
        storydetail1.setStoryDescription( "story detail delete test" );
        storydetail1.setStorySetupDate( timestamp );
        storydetail1.setStoryLastModifiedDate( timestamp );
        storydetail1.setCoodX( 5.0 );
        storydetail1.setCoodY( 5.0 );
        storydetail1.setColorPick( "GREEN" );
        storydetail1.setComments( "no comments" );
        storydetailMapper.insert( storydetail1 );

        storydetail2.setMapId( 48 );
        storydetail2.setStoryTitle( "def" );
        storydetail2.setStoryDescription( null );
        storydetail2.setStorySetupDate( timestamp );
        storydetail2.setStoryLastModifiedDate( timestamp );
        storydetail2.setCoodX( 6.0 );
        storydetail2.setCoodY( 6.0 );
        storydetail2.setColorPick( "WHITE" );
        storydetail2.setComments( null );
        storydetailMapper.insert( storydetail2 );

        storydetailArrayList1 = storydetailMapper.selectAll( 48 );
        Assert.assertEquals( storydetail2.getStoryTitle() , storydetailArrayList1.get( storydetailArrayList1.size() - 1 ).getStoryTitle() );

        int result = storydetailMapper.deleteStoryByStoryId( storydetailArrayList1.get( storydetailArrayList1.size() - 1 ).getStoryId() );
        Assert.assertEquals( 1 , result );

        storydetailArrayList2 = storydetailMapper.selectAll( 48 );
        Assert.assertEquals( storydetailArrayList1.size() - 1 , storydetailArrayList2.size() );
        Assert.assertEquals( storydetail1.getStoryTitle() , storydetailArrayList2.get( storydetailArrayList2.size() - 1 ).getStoryTitle() );
        Assert.assertEquals( storydetail1.getCoodX() , storydetailArrayList2.get( storydetailArrayList2.size() - 1 ).getCoodX() );
    }

    @Test
    public void updateStoryByStoryIdTest()
    {
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        ArrayList<Storydetail> storydetailArrayList1;
        ArrayList<Storydetail> storydetailArrayList2;
        Storydetail storydetail = new Storydetail();

        storydetail.setMapId( 48 );
        storydetail.setStoryTitle( "def" );
        storydetail.setStoryDescription( "story detail update test" );
        storydetail.setStorySetupDate( timestamp );
        storydetail.setStoryLastModifiedDate( timestamp );
        storydetail.setCoodX( 5.0 );
        storydetail.setCoodY( 5.0 );
        storydetail.setColorPick( "GREEN" );
        storydetail.setComments( "no comments" );
        storydetailMapper.insert( storydetail );

        storydetailArrayList1 = storydetailMapper.selectAll( 48 );
        Assert.assertEquals( storydetail.getStoryTitle() , storydetailArrayList1.get( storydetailArrayList1.size() - 1 ).getStoryTitle() );

        storydetail.setCoodY( 7.5 );
        storydetail.setStoryId( storydetailArrayList1.get( storydetailArrayList1.size() - 1 ).getStoryId() );
        storydetailMapper.updateStoryByStoryId( storydetail );

        storydetailArrayList2 = storydetailMapper.selectAll( 48 );

        Assert.assertEquals( storydetailArrayList1.get( storydetailArrayList1.size() - 1 ).getStoryId() , storydetailArrayList2.get( storydetailArrayList2.size() - 1 ).getStoryId() );
        Assert.assertEquals( storydetail.getCoodY() , storydetailArrayList2.get( storydetailArrayList2.size() - 1 ).getCoodY() );
    }
}

