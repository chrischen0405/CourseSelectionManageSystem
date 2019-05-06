package com.example.manage.service.impl;

import com.example.manage.dao.RecordRepository;
import com.example.manage.model.Record;
import com.example.manage.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecordServiceImpl implements RecordService {
    @Autowired
    private RecordRepository recordRepository;

    @Override
    public List<Record> getAllRecord() {
        return recordRepository.findAll();
    }

    @Override
    public List<Record> search(String keywords) {
        return recordRepository.findByUidLike("%" + keywords + "%");
    }
}
