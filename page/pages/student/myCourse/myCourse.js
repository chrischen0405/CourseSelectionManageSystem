// pages/student/myCourse/myCourse.js
const app = getApp();
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
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    courseList: [{
      "sid": 0,
      "cnum": "",
      "credit": 0.0,
      "week": 0,
      "cstart": 0,
      "ctime": 0,
      "cname": "",
      "classroom": "",
      "teacher": "",
    }],
    recordList: null,
    tkId: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showCardView: function(e) {
      let num = e.currentTarget.dataset.index;
      this.setData({
        tkId: this.data.courseList[num].sid
      })
      this.dialog = this.selectComponent("#dialog");
      this.tkdialog = this.selectComponent("#tkdialog");
      const data = this.data;
      const dialogContent = [{
          label: '课程编号',
          value: data.courseList[num].cnum
        },
        {
          label: '课程名称',
          value: data.courseList[num].cname
        },
        {
          label: '学分',
          value: data.courseList[num].credit
        },
        {
          label: '教室',
          value: data.courseList[num].classroom
        },
        {
          label: '老师',
          value: data.courseList[num].teacher
        }
      ];
      this.setData({
        dialogContent: dialogContent
      })
      this.dialog.show();

      console.log(num);
    },
    // 点击了弹出框的取消
    handleCancelDialog() {
      this.dialog.hide();
    },
    // 点击了弹出框的确认
    handleConfirmDialog() {
      this.dialog.hide();
      this.tkdialog.show();
    },
    handleCancelDialog2() {
      this.tkdialog.hide();
    },
    handleConfirmDialog2() {
      this.tkdialog.hide();
      this.delSelectCourse();
    },
    getCourseList() {
      let that = this;
      wx.request({
        url: app.globalData.url + '/courseList',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          'uid': app.globalData.nowUser.uid,
        },
        success(res) {
          console.log(res.data);
          that.setData({
            recordList: res.data,
          });
          that.dealCourseList(res.data);
        },
        fail(e) {
          console.log(e);
        }
      });
    },
    dealCourseList(data) {
      let cList = [];
      let rList = data;
      for (let i = 0; i < rList.length; i++) {
        let timeObj = this.strToJson(rList[i][1]);
        for (let j = 0; j < timeObj.length; j++) {
          let obj = {};
          obj.sid = rList[i][0];
          obj.week = timeObj[j].week;
          obj.cstart = timeObj[j].cstart;
          obj.ctime = timeObj[j].time;
          obj.classroom = timeObj[j].classroom;
          obj.cname = rList[i][2];
          obj.cnum = rList[i][3];
          obj.teacher = rList[i][5];
          obj.credit = rList[i][6];
          cList.push(obj);
        }
      }
      console.log(cList);
      this.setData({
        courseList: cList
      })
    },
    strToJson(str) {
      return JSON.parse(str);
    },
    delSelectCourse() {
      wx.showLoading({
        title: '正在退课',
      });
      let that = this;
      wx.request({
        url: app.globalData.url + '/deleteRecord',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          'uid': app.globalData.nowUser.uid,
          'sid': that.data.tkId
        },
        success: function(res) {
          var resData = res.data;
          if (resData == 1) {
            wx.hideLoading();
            that.getCourseList();
            wx.showToast({
              title: '退课成功',
              icon: 'none',
              duration: 2000
            });
          } else if (resData == 2) {
            wx.hideLoading();
            wx.showToast({
              title: '未到退课时间',
              icon: 'none',
              duration: 2000
            });
          } else {
            wx.hideLoading();
            wx.showToast({
              title: '退课失败',
              icon: 'none',
              duration: 2000
            });
          }
        },
        fail: function() {
          wx.hideLoading();
          wx.showToast({
            title: '退课失败',
            icon: 'none',
            duration: 2000
          });
        }
      })
    }
  }
})