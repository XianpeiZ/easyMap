package com.spbweb.controller;

import com.alibaba.fastjson.JSONObject;
import com.spbweb.service.MapdetailService;
import com.spbweb.service.StorydetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class HelloController {

    @ResponseBody
    @RequestMapping("/hello")
    public String hello(){
        return "Hello, World";
    }

    @Autowired
    StorydetailService storydetailService;


    @RequestMapping("/success")
    public String success(Map<String, Object> map){
        map.put("hello", "nihao");
        //classpath:/templates/success.html
        return "success";


    }
    @RequestMapping("/test/{storyId}")
    public String test( Map<String, Object> map , @PathVariable Integer storyId ){
        map.put("hello", storydetailService.findStoryByStoryId( storyId ));
        //classpath:/templates/success.html
        return "success";
    

    }

}
