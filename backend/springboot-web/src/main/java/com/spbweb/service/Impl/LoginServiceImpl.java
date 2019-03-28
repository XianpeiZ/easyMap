package com.spbweb.service.Impl;


import com.spbweb.dao.LogindetailMapper;
import com.spbweb.entity.Logindetail;
import com.spbweb.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    LogindetailMapper logindetailMapper;

    @Override
    public int insert(Logindetail record) {
        return logindetailMapper.insert(record);
    }

    @Override
    public ArrayList<Logindetail> selectAll() {
        return logindetailMapper.selectAll();
    }

    @Override
    public int delectUserByName(String name) {

        logindetailMapper.delectUserByName(name);
        return 0;
    }

    @Override
    public ArrayList<Logindetail> selectByNameAndPasswd(String userName, String userPasswd){
        return logindetailMapper.selectByNameAndPasswd(userName, userPasswd);
    }

    @Override
    public Logindetail selectUserByName(String name) {
        //待实现
        return null;
    }

    @Override
    public int updateUserInfo(Logindetail userInfo) {
        //待实现
        return 0;
    }
}
