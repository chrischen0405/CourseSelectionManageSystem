// pages/admin/mStudents/mStudents.js
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
    stuList: [
      { "stuId": 31501084, "stuName": "陈文杰", "college": "计算机与计算科学学院", "profession": "计算", "stuClass": "1501"},
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
          label: '学号',
          value: data.stuList[num].stuId
        },
        {
          label: '学生姓名',
          value: data.stuList[num].stuName
        },
        {
          label: '学院',
          value: data.stuList[num].college
        },
        {
          label: '专业',
          value: data.stuList[num].profession
        },
        {
          label: '班级',
          value: data.stuList[num].stuClass + '班'
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
