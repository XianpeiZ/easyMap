package com.spbweb.service;


import com.spbweb.entity.Logindetail;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface LoginService {

    int insert(Logindetail record);
    ArrayList<Logindetail> selectAll();
    int delectUserByName(String name);
    Logindetail selectUserByName(String name);
    int updateUserInfo(Logindetail userInfo);
    ArrayList<Logindetail> selectByNameAndPasswd(String userName, String userPasswd);
}
