package com.example.manage.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.example.manage.dao.CourseRepository;
import com.example.manage.dao.RecordRepository;
import com.example.manage.dao.SelectCourseRepository;
import com.example.manage.dao.UserRepository;
import com.example.manage.model.Course;
import com.example.manage.model.Flag;
import com.example.manage.model.Record;
import com.example.manage.model.SelectCourse;
import com.example.manage.service.ExcelService;
import com.example.manage.service.SelectCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;

@Service
public class SelectCourseServiceImpl implements SelectCourseService {
    @Autowired
    private SelectCourseRepository selectCourseRepository;

    @Autowired
    private RecordRepository recordRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<SelectCourse> findAll() {
        return selectCourseRepository.findAll();
    }

    @Override
    public List<Object[]> getAllSelect() {
        return selectCourseRepository.findByUidAndCid();
    }

    @Override
    public SelectCourse getOneSelect(int sid) {
        return selectCourseRepository.findBySid(sid);
    }

    @Override
    public int deleteById(String uid, int sid) {
        Flag flag = Flag.getFlag();
        if (!flag.getSelectCourseFlag()) {
            return 2;
        }
        SelectCourse selectCourse = selectCourseRepository.findBySid(sid);
        Course course = courseRepository.findByCid(selectCourse.getCid());
        Record record = new Record();
        record.setUid(uid);
        record.setDate(new Date());
        record.setOid(course.getCnum());
        record.setOname(course.getCname());
        record.setOperate("退课");
        selectCourseRepository.deleteBySid(sid);
        recordRepository.save(record);
        return 1;
    }

    @Override
    public int managerDeleteRecord(int sid) {
        SelectCourse selectCourse = selectCourseRepository.findBySid(sid);
        Course course = courseRepository.findByCid(selectCourse.getCid());
        Record record = new Record();
        record.setUid(selectCourse.getUid());
        record.setDate(new Date());
        record.setOid(course.getCnum());
        record.setOname(course.getCname());
        record.setOperate("退课");
        selectCourseRepository.deleteBySid(sid);
        recordRepository.save(record);
        return 1;
    }

    @Override
    public int selectCourse(String uid, int cid) {
        Flag flag = Flag.getFlag();
        if (!flag.getSelectCourseFlag()) {
            return 2;
        }
        SelectCourse selectCourse = new SelectCourse();
        selectCourse.setUid(uid);
        selectCourse.setCid(cid);
        selectCourse.setSdate(new Date());
        Course course = courseRepository.findByCid(cid);
        Record record = new Record();
        record.setUid(uid);
        record.setDate(selectCourse.getSdate());
        record.setOid(course.getCnum());
        record.setOname(course.getCname());
        record.setOperate("选课");
        if (selectCourseRepository.existsByUidAndCid(uid, cid)) {
            return 0;
        } else {
            if (!testSelectCourse(uid, course)) {
                return 3;
            }
            selectCourseRepository.save(selectCourse);
            recordRepository.save(record);
            return 1;
        }
    }

    public boolean testSelectCourse(String uid, Course course) {
        List<String> list = selectCourseRepository.findTimeListByUid(uid);
        JSONArray newTime = JSON.parseArray(course.getCtime());
        for (String ctime : list) {
            JSONArray timeArr = JSON.parseArray(ctime);
            for (Object obj : timeArr) {
                for (Object obj1 : newTime) {
                    JSONObject a = (JSONObject) obj;
                    JSONObject b = (JSONObject) obj1;
                    if (a.getIntValue("week") == b.getIntValue("week")) {
                        int astart = a.getIntValue("cstart");
                        int bstart = b.getIntValue("cstart");
                        if (astart + a.getIntValue("time") <= bstart ||
                                astart >= bstart + b.getIntValue("time")) {
                            if (astart == bstart) return false;
                            else continue;
                        } else return false;
                    }
                }
            }
        }
        return true;
    }


    @Override
    public int managerSelectCourse(String uid, int cid) {
        if (!userRepository.existsByUidAndType(uid, 2)) {
            return 2;
        }
        if (!courseRepository.existsByCid(cid)) {
            return 3;
        }
        SelectCourse selectCourse = new SelectCourse();
        selectCourse.setUid(uid);
        selectCourse.setCid(cid);
        selectCourse.setSdate(new Date());
        Course course = courseRepository.findByCid(cid);
        Record record = new Record();
        record.setUid(uid);
        record.setDate(selectCourse.getSdate());
        record.setOid(course.getCnum());
        record.setOname(course.getCname());
        record.setOperate("选课");
        if (selectCourseRepository.existsByUidAndCid(uid, cid)) {
            return 0;
        } else {
            if (!testSelectCourse(uid, course)) {
                return 4;
            }
            selectCourseRepository.save(selectCourse);
            recordRepository.save(record);
            return 1;
        }
    }

    @Override
    public int updateSelectCourse(int sid, String uid, int cid) {
        if (!userRepository.existsByUidAndType(uid, 2)) {
            return 2;
        }
        if (!courseRepository.existsByCid(cid)) {
            return 3;
        }
        if (selectCourseRepository.existsByUidAndCid(uid, cid)) {
            return 0;
        }
        selectCourseRepository.updateSelectCourse(sid, uid, cid);
        return 1;
    }

    @Override
    public List<Object[]> courseList(String uid) {
        return selectCourseRepository.findByUid(uid);
    }

    @Override
    public List<Object[]> search(String keywords) {
        return selectCourseRepository.findByUidLikeOrCidLike("%" + keywords + "%", Integer.parseInt(keywords));
    }

    @Override
    public void export(String path, HttpServletResponse response) {
        List<SelectCourse> list = selectCourseRepository.findAll();
        ExcelService.exportExcel(list, "select", "select", SelectCourse.class, "select.xls", response);
    }

    @Override
    public void imports(String path, HttpServletResponse response) {
        List<SelectCourse> list = null;
        list = ExcelService.importExcel(path, 1, 1, SelectCourse.class);
        selectCourseRepository.saveAll(list);
    }
}
