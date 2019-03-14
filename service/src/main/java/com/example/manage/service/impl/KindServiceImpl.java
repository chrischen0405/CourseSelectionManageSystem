package com.example.manage.service.impl;

import com.example.manage.dao.KindRepository;
import com.example.manage.model.Kind;
import com.example.manage.service.KindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class KindServiceImpl implements KindService {
    @Autowired
    private KindRepository kindRepository;

    @Override
    public String getType(int pid, int cid) {
        Kind kind = kindRepository.findByPidAndCid(pid, cid);
        return kind.getType();
    }
}
