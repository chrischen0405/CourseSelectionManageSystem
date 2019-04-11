package com.example.manage.model;

public class Flag {
    private boolean selectCourseFlag = false;
    private static Flag flag = new Flag();

    private Flag() {
    }

    public static Flag getFlag() {
        return flag;
    }

    public boolean getSelectCourseFlag() {
        return selectCourseFlag;
    }

    public void setSelectCourseFlag(boolean selectCourseFlag) {
        this.selectCourseFlag = selectCourseFlag;
    }
}
