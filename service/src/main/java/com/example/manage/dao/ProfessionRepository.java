package com.example.manage.dao;

import com.example.manage.model.Profession;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProfessionRepository extends JpaRepository<Profession, Integer> {
    List<Profession> findByCollege(String college);
}
