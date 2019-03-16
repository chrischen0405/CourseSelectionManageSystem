package com.example.manage.dao;

import com.example.manage.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUidAndPwd(String uid, String pwd);

    List<User> findByType(int type);

    @Transactional
    int deleteByUid(String uid);

    boolean existsByUid(String uid);

    User findByUid(String uid);

    List<User> findByTypeAndUidLikeOrTypeAndUnameLike(int type,String uid,int type2,String uname);
}
