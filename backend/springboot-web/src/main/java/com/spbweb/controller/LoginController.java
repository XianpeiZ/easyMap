package com.spbweb.controller;


import com.spbweb.entity.Logindetail;
import com.spbweb.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.lang.reflect.Array;
import java.util.ArrayList;

@Controller
public class LoginController {

    @Autowired
    LoginService loginService;

    @PostMapping("/api/getLoginInf")
    @ResponseBody
    public String isValid(@RequestParam("userName") String userName, @RequestParam("userPasswd") String userPasswd){

//        System.out.println(userName+" "+userPasswd);
        ArrayList<Logindetail> user = loginService.selectByNameAndPasswd(userName, userPasswd);
        if(user.size()!=1){
            return "false";
        }else{
            return "true";
        }
    }
}
