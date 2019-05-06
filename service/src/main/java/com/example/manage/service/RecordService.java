package com.example.manage.service;

import com.example.manage.model.Record;

import java.util.List;

public interface RecordService {
    List<Record> getAllRecord();

    List<Record> search(String keywords);
}
