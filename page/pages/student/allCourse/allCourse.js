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
    courseList: [],
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
        value: data.courseList[num].cnum
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
        value: '星期' + data.courseList[num].week + ' 第' + data.courseList[num].cstart+'节课'
      },
      {
        label: '课时',
        value: data.courseList[num].ctime+'课时'
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
    getAllCourse(){
      let that = this;
      wx.request({
        url: 'http://127.0.0.1:8080/getAllCourse',
        success(res) {
          that.setData({
            courseList:res.data,
          });
        }
      })
    },
    ready(){
      console.log('ready')
    },
  }
})
