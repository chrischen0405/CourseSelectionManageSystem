package com.example.manage.dao;

import com.example.manage.model.SelectCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface SelectCourseRepository extends JpaRepository<SelectCourse, Integer> {
    List<SelectCourse> findAll();

    @Transactional
    int deleteBySid(int sid);

    boolean existsByUidAndCid(String uid, int cid);

    @Query(value = "select s.sid,c.ctime,c.cname,c.cnum,c.capacity,c.teacher,c.credit from select_course s,course c"
            + " where s.cid = c.cid and"
            + " s.uid = :uid", nativeQuery = true)
    List<Object[]> findByUid(@Param("uid") String uid);
}
