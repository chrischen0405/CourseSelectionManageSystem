package com.example.manage.dao;

import com.example.manage.model.Kind;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface KindRepository extends JpaRepository<Kind, Integer> {
    List<Kind> findAll();

    Kind findByKid(int kid);

    @Transactional
    @Modifying
    int deleteByKid(int kid);

    boolean existsByKid(int kid);

    boolean existsByCnumAndPname(String Cnum, String Pname);

    Kind findByCnumAndPname(String Cnum, String Pname);

    List<Kind> findByCnumLikeOrPnameLikeOrTypeLike(String cnum, String pname, String type);

    @Transactional
    @Modifying
    @Query(value = "update Kind k set k.pname=:pname,k.cnum=:cnum,k.type=:type"
            + " where k.kid=:kid", nativeQuery = true)
    int updateType(@Param("kid") int kid, @Param("pname") String pname, @Param("cnum") String cnum, @Param("type") String type);
}
