package com.example.manage.dao;

import com.example.manage.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUidAndPwd(String uid,String pwd);
}
