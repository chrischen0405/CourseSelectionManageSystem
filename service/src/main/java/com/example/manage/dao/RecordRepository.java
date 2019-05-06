package com.example.manage.dao;

import com.example.manage.model.Record;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecordRepository extends JpaRepository<Record, Integer> {
    @Override
    List<Record> findAll();

    List<Record> findByUidLike(String uid);
}
