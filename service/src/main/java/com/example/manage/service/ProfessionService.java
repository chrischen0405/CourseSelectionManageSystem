package com.example.manage.service;

import com.example.manage.model.Profession;

import java.util.List;

public interface ProfessionService {
    List<Profession> findByCollege(String college);
}
