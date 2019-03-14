package com.example.manage.service.impl;

import com.example.manage.dao.ProfessionRepository;
import com.example.manage.model.Profession;
import com.example.manage.service.ProfessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfessionServiceImpl implements ProfessionService {
    @Autowired
    private ProfessionRepository professionRepository;

    @Override
    public List<Profession> findByCollege(String college) {
        return professionRepository.findByCollege(college);
    }
}
