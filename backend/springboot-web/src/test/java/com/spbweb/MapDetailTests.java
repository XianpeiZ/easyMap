package com.spbweb;

import com.spbweb.dao.MapdetailMapper;
import com.spbweb.entity.Mapdetail;
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
public class MapDetailTests
{

    @Autowired
    private MapdetailMapper mapdetailMapper;

    @Test
//    @Rollback(false)
    public void insertTest()
    {
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        Mapdetail mapdetail = new Mapdetail();
        mapdetail.setMapId( 1 );
        mapdetail.setMapName( "abc" );
        mapdetail.setMapOwner( "springbootTest" );
        mapdetail.setMapSetupDate( timestamp );
        mapdetail.setMapDescrpt( "test transaction" );
        int result = mapdetailMapper.insert( mapdetail );
//        System.out.println( "insert test result : " + result );
        Assert.assertEquals( 1 , result );
    }

    @Test
//    @Rollback(false)
    public void findMapByMapNameTest()
    {
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        Mapdetail mapdetail = new Mapdetail();
        mapdetail.setMapName( "abc" );
        mapdetail.setMapOwner( "springbootTest" );
        mapdetail.setMapSetupDate( timestamp );
        mapdetail.setMapDescrpt( "test transaction" );
        mapdetailMapper.insert( mapdetail );
        System.out.println( mapdetail.toString() );
        String mapName = "abc";
        Mapdetail getMapdetail = mapdetailMapper.findMapByMapName( mapName );
        System.out.println( getMapdetail.toString() );
        Assert.assertEquals( mapdetail.getMapName() , getMapdetail.getMapName() );
        Assert.assertEquals( mapdetail.getMapOwner() , getMapdetail.getMapOwner() );
        Assert.assertEquals( mapdetail.getMapDescrpt() , getMapdetail.getMapDescrpt() );
    }

    @Test
    public void selectAllTest()
    {
        ArrayList<Mapdetail> lastMapDetailArrayList = mapdetailMapper.selectAll();
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        Mapdetail mapdetail = new Mapdetail();
        mapdetail.setMapName( "abc" );
        mapdetail.setMapOwner( "springbootTest" );
        mapdetail.setMapSetupDate( timestamp );
        mapdetail.setMapDescrpt( "test transaction" );
        Mapdetail mapdetail1 = new Mapdetail();
        mapdetail1.setMapName( "def" );
        mapdetail1.setMapOwner( "sprintbootTest" );
        mapdetail1.setMapSetupDate( timestamp );
        mapdetail1.setMapDescrpt( "test transaction" );
        mapdetailMapper.insert( mapdetail );
        mapdetailMapper.insert( mapdetail1 );
        ArrayList<Mapdetail> mapdetailArrayList = mapdetailMapper.selectAll();
//        for ( int i = 0 ; i < mapdetailArrayList.size() ; i++ )
//        {
//            System.out.println( mapdetailArrayList.get( i ).toString() );
//        }
        Assert.assertEquals( lastMapDetailArrayList.size() + 2 , mapdetailArrayList.size() );
        Assert.assertEquals( "abc" , mapdetailArrayList.get( mapdetailArrayList.size() - 2 ).getMapName() );
        Assert.assertEquals( "def" , mapdetailArrayList.get( mapdetailArrayList.size() - 1 ).getMapName() );
    }

    @Test
//    @Rollback(false)
    public void deleteMapByMapNameTest()
    {
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        Mapdetail mapdetail = new Mapdetail();
        mapdetail.setMapName( "abc" );
        mapdetail.setMapOwner( "springbootTest" );
        mapdetail.setMapSetupDate( timestamp );
        mapdetail.setMapDescrpt( "test transaction" );
        mapdetailMapper.insert( mapdetail );
//        System.out.println( mapdetail.toString() );
        String mapName = "abc";
        int result = mapdetailMapper.deleteMapByMapName( mapName );
        Assert.assertEquals( 1 , result );
    }
}

