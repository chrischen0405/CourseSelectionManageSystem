package com.example.manage.dao;

import com.example.manage.model.Kind;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface KindRepository extends JpaRepository<Kind, Integer> {
    List<Kind> findAll();

    boolean existsByCnumAndPname(String Cnum, String Pname);

    Kind findByCnumAndPname(String Cnum, String Pname);
}
