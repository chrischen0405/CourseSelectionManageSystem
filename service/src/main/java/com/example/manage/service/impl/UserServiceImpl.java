package com.example.manage.service.impl;

import com.example.manage.dao.UserRepository;
import com.example.manage.model.User;
import com.example.manage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public int loginType(String userid, String password) {
        User user = userRepository.findByUidAndPwd(userid, password);
        if (user.getType() == 1) {
            return 1;
        } else if (user.getType() == 2) {
            return 2;
        } else {
            return 0;
        }
    }
}
