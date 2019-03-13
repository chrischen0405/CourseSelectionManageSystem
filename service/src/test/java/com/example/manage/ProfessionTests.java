package com.example.manage;

import com.example.manage.dao.ProfessionRepository;
import com.example.manage.model.Profession;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProfessionTests {
    @Autowired
    private ProfessionRepository professionRepository;

    @Test
    public void test(){
        Profession p=new Profession();
        p.setPname("计算机");
        p.setCollege("计算机与计算科学");
        professionRepository.save(p);
    }
}
