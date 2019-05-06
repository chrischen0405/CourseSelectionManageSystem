package com.example.manage.dao;

import com.example.manage.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUidAndPwd(String uid, String pwd);

    List<User> findByType(int type);

    @Transactional
    @Modifying
    int deleteByUid(String uid);

    boolean existsByUid(String uid);

    boolean existsByUidAndType(String uid, int type);

    User findByUid(String uid);

    List<User> findByTypeAndUidLikeOrTypeAndUnameLike(int type, String uid, int type2, String uname);

    @Transactional
    @Modifying
    @Query(value = "update User u set u.uname=:uname,u.pwd=:pwd,u.college=:college,u.profession=:profession,u.stu_class=:stuClass"
            + " where u.uid=:uid", nativeQuery = true)
    int updateUser(@Param("uid") String uid, @Param("uname") String uname, @Param("pwd") String pwd, @Param("college") String college, @Param("profession") String profession, @Param("stuClass") String stuClass);

    @Transactional
    @Modifying
    @Query(value = "update User u set u.pwd=:pwd where u.uid=:uid", nativeQuery = true)
    int resetPwd(@Param("uid") String uid, @Param("pwd") String pwd);
}
