package com.example.manage.dao;

import com.example.manage.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUidAndPwd(String uid, String pwd);

    List<User> findByType(int type);

    boolean deleteByUid(String uid);

    boolean existsByUid(String uid);

    User findByUid(String uid);
}
