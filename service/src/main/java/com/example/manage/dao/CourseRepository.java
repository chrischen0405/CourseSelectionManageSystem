package com.example.manage.dao;

import com.example.manage.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Integer> {
    List<Course> findAll();

    Course findByCid(int cid);

    @Transactional
    @Modifying
    int deleteByCid(int cid);

    boolean existsByCid(int Cid);

    boolean existsByCnum(String Cnum);

    boolean existsByCnumAndCnameAndTeacher(String cnum, String cname, String teacher);

    List<Course> findByCnumLikeOrCnameLike(String cnum, String cname);

    @Transactional
    @Modifying
    @Query(value = "update Course c set c.cnum=:cnum,c.cname=:cname,c.ctime=:ctime,c.capacity=:capacity,c.teacher=:teacher,c.credit=:credit"
            + " where c.cid=:cid", nativeQuery = true)
    int updateCourse(@Param("cid") int cid, @Param("cnum") String cnum, @Param("cname") String cname, @Param("ctime") String ctime, @Param("capacity") int capacity, @Param("teacher") String teacher, @Param("credit") float credit);
}
