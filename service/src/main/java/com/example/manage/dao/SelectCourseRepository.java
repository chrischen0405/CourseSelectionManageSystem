package com.example.manage.dao;

import com.example.manage.model.SelectCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface SelectCourseRepository extends JpaRepository<SelectCourse, Integer> {
    List<SelectCourse> findAll();

    SelectCourse findBySid(int sid);

    int countByCid(int cid);

    @Transactional
    int deleteBySid(int sid);

    boolean existsByUidAndCid(String uid, int cid);

    @Query(value = "select s.sid,c.ctime,c.cname,c.cnum,c.capacity,c.teacher,c.credit from select_course s,course c"
            + " where s.cid = c.cid and"
            + " s.uid = :uid", nativeQuery = true)
    List<Object[]> findByUid(@Param("uid") String uid);

    @Query(value = "select s.sid,s.cid,s.uid,s.sdate,c.cnum,c.cname,u.uname from select_course s,course c,user u"
            + " where s.cid=c.cid and s.uid=u.uid", nativeQuery = true)
    List<Object[]> findByUidAndCid();

    @Modifying
    @Transactional
    int deleteByUid(String uid);

    boolean existsByUid(String uid);

    @Modifying
    @Transactional
    int deleteByCid(int cid);

    boolean existsByCid(int cid);

    @Query(value = "select s.sid,s.cid,s.uid,s.sdate,c.cnum,c.cname,u.uname from select_course s,course c,user u"
            + " where s.cid=c.cid and s.uid=u.uid and (s.cid=:cid or s.uid like :uid)", nativeQuery = true)
    List<Object[]> findByUidLikeOrCidLike(String uid, int cid);

    @Query(value = "select c.ctime from select_course s,course c"
            + " where s.cid = c.cid and"
            + " s.uid = :uid", nativeQuery = true)
    List<String> findTimeListByUid(@Param("uid") String uid);

    @Transactional
    @Modifying
    @Query(value = "update SelectCourse s set s.uid=:uid,s.cid=:cid where s.sid=:sid", nativeQuery = true)
    int updateSelectCourse(@Param("sid") int sid, @Param("uid") String uid, @Param("cid") int cid);
}
