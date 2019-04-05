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
    String springbootTest = "springBootTest";
    String testTransaction = "test transaction";

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
        mapdetail.setMapOwner( springbootTest );
        mapdetail.setMapSetupDate( timestamp );
        mapdetail.setMapDescrpt( testTransaction );
        int result = mapdetailMapper.insert( mapdetail );

        Assert.assertEquals( 1 , result );
    }

    @Test
//    @Rollback(false)
    public void findMapByMapNameTest()
    {
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        Mapdetail mapdetail = new Mapdetail();
        Mapdetail getMapdetail;

        mapdetail.setMapName( "abc" );
        mapdetail.setMapOwner( springbootTest );
        mapdetail.setMapSetupDate( timestamp );
        mapdetail.setMapDescrpt( testTransaction );
        mapdetailMapper.insert( mapdetail );

        String mapName = "abc";
        getMapdetail = mapdetailMapper.findMapByMapName( mapName );

        Assert.assertEquals( mapdetail.getMapName() , getMapdetail.getMapName() );
        Assert.assertEquals( mapdetail.getMapOwner() , getMapdetail.getMapOwner() );
        Assert.assertEquals( mapdetail.getMapDescrpt() , getMapdetail.getMapDescrpt() );
    }

    @Test
    public void selectAllTest()
    {
        ArrayList<Mapdetail> lastMapDetailArrayList = mapdetailMapper.selectAll();
        ArrayList<Mapdetail> mapdetailArrayList;
        Timestamp timestamp = new Timestamp( new Date().getTime() );
        Mapdetail mapdetail = new Mapdetail();
        Mapdetail mapdetail1 = new Mapdetail();

        mapdetail.setMapName( "abc" );
        mapdetail.setMapOwner( springbootTest );
        mapdetail.setMapSetupDate( timestamp );
        mapdetail.setMapDescrpt( testTransaction );
        mapdetailMapper.insert( mapdetail );

        mapdetail1.setMapName( "def" );
        mapdetail1.setMapOwner( springbootTest );
        mapdetail1.setMapSetupDate( timestamp );
        mapdetail1.setMapDescrpt( testTransaction );
        mapdetailMapper.insert( mapdetail1 );

        mapdetailArrayList = mapdetailMapper.selectAll();

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
        mapdetail.setMapOwner( springbootTest );
        mapdetail.setMapSetupDate( timestamp );
        mapdetail.setMapDescrpt( testTransaction );
        mapdetailMapper.insert( mapdetail );

        String mapName = "abc";
        int result = mapdetailMapper.deleteMapByMapName( mapName );

        Assert.assertEquals( 1 , result );
    }
}

