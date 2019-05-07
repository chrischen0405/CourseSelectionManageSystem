package com.example.manage.service.impl;

import com.example.manage.dao.RecordRepository;
import com.example.manage.dao.SelectCourseRepository;
import com.example.manage.dao.UserRepository;
import com.example.manage.model.Flag;
import com.example.manage.model.Record;
import com.example.manage.model.User;
import com.example.manage.service.ExcelService;
import com.example.manage.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SelectCourseRepository selectCourseRepository;

    @Autowired
    private RecordRepository recordRepository;

    @Override
    public int loginType(String userid, String password) {
        if (!userRepository.existsByUid(userid)) {
            return 3;
        }
        User user = userRepository.findByUidAndPwd(userid, password);
        if (user != null && user.getType() == 1) {
            return 1;
        } else if (user != null && user.getType() == 2) {
            return 2;
        } else {
            return 0;
        }
    }

    @Override
    public List<User> getAllStudent() {
        return userRepository.findByType(2);
    }

    @Override
    public User getOneUser(String userId) {
        return userRepository.findByUid(userId);
    }

    @Override
    public int deleteStudentById(String admin, String userId) {
        User student = userRepository.findByUid(userId);
        Record record = new Record();
        record.setUid(admin);
        record.setDate(new Date());
        record.setOid(userId);
        record.setOname(student.getUname());
        record.setOperate("删除学生");
        selectCourseRepository.deleteByUid(userId);
        if (selectCourseRepository.existsByUid(userId)) {
            return 0;
        } else {
            userRepository.deleteByUid(userId);
            if (userRepository.existsByUid(userId)) {
                return 0;
            } else {
                recordRepository.save(record);
                return 1;
            }
        }
    }

    @Override
    public int addStudent(String admin, String userId, String userName, String college, String profession, String stuClass) {
        User user = new User();
        user.setUid(userId);
        user.setUname(userName);
        user.setPwd(userId);
        user.setType(2);
        user.setCollege(college);
        user.setProfession(profession);
        user.setStuClass(stuClass);
        Record record = new Record();
        record.setUid(admin);
        record.setDate(new Date());
        record.setOid(userId);
        record.setOname(userName);
        record.setOperate("增加学生");
        boolean isExist = userRepository.existsByUid(userId);
        if (isExist) {
            return 0;
        } else {
            userRepository.save(user);
            recordRepository.save(record);
            return 1;
        }
    }

    @Override
    public int updateStudent(String admin, String userId, String userName, String college, String profession, String stuClass) {
        User oldUser = userRepository.findByUid(userId);
        Record record = new Record();
        record.setUid(admin);
        record.setDate(new Date());
        record.setOid(userId);
        record.setOname(userName);
        record.setOperate("更新学生");
        userRepository.updateUser(userId, userName, oldUser.getPwd(), college, profession, stuClass);
        recordRepository.save(record);
        return 1;
    }

    @Override
    public List<User> search(String keywords) {
        return userRepository.findByTypeAndUidLikeOrTypeAndUnameLike(2, "%" + keywords + "%", 2, "%" + keywords + "%");
    }

    @Override
    public boolean getFlag() {
        Flag flag = Flag.getFlag();
        boolean f = flag.getSelectCourseFlag();
        return f;
    }

    @Override
    public boolean setFlag() {
        Flag flag = Flag.getFlag();
        boolean f = flag.getSelectCourseFlag();
        f = !f;
        flag.setSelectCourseFlag(f);
        return f;
    }

    @Override
    public int resetPwd(String uid, String pwd) {
        return userRepository.resetPwd(uid, pwd);
    }

    @Override
    public void export(String path, HttpServletResponse response) {
        List<User> list = userRepository.findAll();
        ExcelService.exportExcel(list, "user", "user", User.class, "user.xls", response);
    }

    @Override
    public void imports(String path, HttpServletResponse response) {
        List<User> list = null;
        list = ExcelService.importExcel(path, 1, 1, User.class);
        for (User user : list) {
            user.setPwd(user.getUid());
            if (userRepository.existsByUid(user.getUid())) continue;
            else userRepository.save(user);
        }
    }
}
