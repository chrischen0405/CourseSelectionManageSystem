package com.example.manage.service.impl;

import com.example.manage.dao.UserRepository;
import com.example.manage.model.User;
import com.example.manage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public List<User> getAllStudent() {
        return userRepository.findByType(2);
    }

    @Override
    public User getOneUser(String userId) {
        return userRepository.findByUid(userId);
    }

    @Override
    public int deleteStudentById(String userId) {
        userRepository.deleteByUid(userId);
        if (userRepository.existsByUid(userId)) {
            return 0;
        } else {
            return 1;
        }
    }

    @Override
    public int addStudent(String userId, String userName, String college, String profession, String stuClass) {
        User user = new User();
        user.setUid(userId);
        user.setUname(userName);
        user.setPwd(userId);
        user.setType(2);
        user.setCollege(college);
        user.setProfession(profession);
        user.setStuClass(stuClass);
        boolean isExist = userRepository.existsByUid(userId);
        if (isExist) {
            return 0;
        } else {
            userRepository.save(user);
            return 1;
        }
    }

    @Override
    public int updateStudent(String userId, String userName, String college, String profession, String stuClass) {
        User oldUser = userRepository.findByUid(userId);
        User newUser = new User();
        newUser.setUid(userId);
        newUser.setUname(userName);
        newUser.setPwd(oldUser.getPwd());
        newUser.setType(2);
        newUser.setCollege(college);
        newUser.setProfession(profession);
        newUser.setStuClass(stuClass);
        newUser.setWxid(oldUser.getWxid());
        userRepository.save(newUser);
        return 1;
    }

    @Override
    public List<User> search(String keywords) {
        return userRepository.findByTypeAndUidLikeOrTypeAndUnameLike(2, "%" + keywords + "%", 2, "%" + keywords + "%");
    }
}
