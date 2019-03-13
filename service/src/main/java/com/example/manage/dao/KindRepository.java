package com.example.manage.dao;

import com.example.manage.model.Kind;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KindRepository extends JpaRepository<Kind, Integer> {
}
