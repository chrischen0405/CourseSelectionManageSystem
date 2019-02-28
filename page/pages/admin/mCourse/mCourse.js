// pages/admin/mCourse/mCourse.js
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
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickCell(e) {
      let num = e.currentTarget.dataset.index;
      console.log(num);
      this.dialog = this.selectComponent("#dialog");
      const data = this.data;
      const dialogContent = [
        {
          label: '课程编号',
          value: data.courseList[num].id
        },
        {
          label: '课程名称',
          value: data.courseList[num].cname
        },
        {
          label: '教室',
          value: data.courseList[num].classroom
        },
        {
          label: '课程名称',
          value: data.courseList[num].cname
        },
        {
          label: '上课时间',
          value: '星期' + data.courseList[num].week + ' 第' + data.courseList[num].cstart + '节课'
        },
        {
          label: '课时',
          value: data.courseList[num].ctime + '课时'
        },
        {
          label: '教师',
          value: data.courseList[num].teacher
        }];
      this.setData({
        dialogContent: dialogContent
      })
      this.dialog.show();
    },
    // 点击了弹出框的取消
    handleCancelDialog() {
      this.dialog.hide()
    },
    // 点击了弹出框的确认
    handleConfirmDialog() {
      this.dialog.hide();
      console.log('ok');
    },
  }
})
