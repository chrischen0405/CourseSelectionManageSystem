package com.example.manage.controller;

import com.example.manage.model.Record;
import com.example.manage.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RecordController {
    @Autowired
    private RecordService recordService;

    @RequestMapping("/getAllRecord")
    public List<Record> getAllRecord() {
        return recordService.getAllRecord();
    }

    @RequestMapping("/searchRecord")
    public List<Record> searchRecord(String keywords) {
        return recordService.search(keywords);
    }
}
