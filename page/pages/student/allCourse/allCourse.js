// pages/student/allCourse/allCourse.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    courseList: [
      { "id": 0, "week": 1, "cstart": 3, "ctime": 3, "cname": "高等数学1", "classroom": "理四222", "teacher": "王老师" },
      { "id": 1, "week": 2, "cstart": 6, "ctime": 3, "cname": "高等数学2", "classroom": "理四224", "teacher": "赵老师" },
      { "id": 2, "week": 3, "cstart": 1, "ctime": 2, "cname": "高等数学3", "classroom": "理四226", "teacher": "钱老师" },
      { "id": 3, "week": 4, "cstart": 10, "ctime": 2, "cname": "高等数学4", "classroom": "理四223", "teacher": "孙老师" },
      { "id": 4, "week": 5, "cstart": 4, "ctime": 1, "cname": "高等数学5", "classroom": "理四225", "teacher": "李老师" },
      { "id": 0, "week": 1, "cstart": 3, "ctime": 3, "cname": "高等数学1", "classroom": "理四222", "teacher": "王老师" },
      { "id": 1, "week": 2, "cstart": 6, "ctime": 3, "cname": "高等数学2", "classroom": "理四224", "teacher": "赵老师" },
      { "id": 2, "week": 3, "cstart": 1, "ctime": 2, "cname": "高等数学3", "classroom": "理四226", "teacher": "钱老师" },
      { "id": 3, "week": 4, "cstart": 10, "ctime": 2, "cname": "高等数学4", "classroom": "理四223", "teacher": "孙老师" },
      { "id": 4, "week": 5, "cstart": 4, "ctime": 1, "cname": "高等数学5", "classroom": "理四225", "teacher": "李老师" },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickCell(e) {
      console.log(e);
    }
  }
})
