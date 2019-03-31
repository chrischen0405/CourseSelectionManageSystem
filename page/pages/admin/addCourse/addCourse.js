// pages/admin/addCourse/addCourse.js
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
    weekList: ['星期一', '星期二', '星期三', '星期四', '星期五'],
    startList: ['第一节课', '第三节课', '第六节课', '第八节课', '第十节课'],
    timeList: ['2课时', '3课时'],
    classTimeList: [1, 2, 3],
    index0: 0,
    index11: 0,
    index12: '0',
    index13: 0,
    index21: 0,
    index22: '0',
    index23: 0,
    index31: 0,
    index32: '0',
    index33: 0,
    classTime: 1,
    isShow1: true,
    isShow2: false,
    isShow3: false,
    cnum: '',
    cname: '',
    ctime: '',
    capacity: 0,
    classroom1: '',
    classroom2: '',
    classroom3: '',
    teacher: '',
    credit: 0.0,
    week: '',
    cstart: '',
    time: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    input_num(e) {
      this.setData({
        cnum: e.detail.value
      })
    },
    input_name(e) {
      this.setData({
        cname: e.detail.value
      })
    },
    input_capacity(e) {
      let capacity = parseInt(e.detail.value);
      this.setData({
        capacity: capacity
      })
    },
    input_teacher(e) {
      this.setData({
        teacher: e.detail.value
      })
    },
    input_credit(e) {
      this.setData({
        credit: e.detail.value
      })
    },
    bindPickerChangeClassTime(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index0: e.detail.value,
        classTime: this.data.classTimeList[e.detail.value]
      });
      if (this.data.classTime == 1) {
        this.setData({
          isShow1: true,
          isShow2: false,
          isShow3: false
        })
      } else if (this.data.classTime == 2) {
        this.setData({
          isShow1: true,
          isShow2: true,
          isShow3: false
        })
      } else {
        this.setData({
          isShow1: true,
          isShow2: true,
          isShow3: true
        })
      }
    },
    input_classroom1(e) {
      this.setData({
        classroom1: e.detail.value
      })
    },
    input_classroom2(e) {
      this.setData({
        classroom2: e.detail.value
      })
    },
    input_classroom3(e) {
      this.setData({
        classroom3: e.detail.value
      })
    },
    bindPickerChangeWeek1(e) {
      this.setData({
        index11: e.detail.value,
        week: this.data.weekList[e.detail.value]
      })
    },
    bindPickerChangeStart1(e) {
      this.setData({
        index12: e.detail.value,
        cstart: this.data.startList[e.detail.value]
      })
    },
    bindPickerChangeTime1(e) {
      this.setData({
        index13: e.detail.value,
        time: this.data.timeList[e.detail.value]
      })
    },
    bindPickerChangeWeek2(e) {
      this.setData({
        index21: e.detail.value,
      })
    },
    bindPickerChangeStart2(e) {
      this.setData({
        index22: e.detail.value,
      })
    },
    bindPickerChangeTime2(e) {
      this.setData({
        index23: e.detail.value,
      })
    },
    bindPickerChangeWeek3(e) {
      this.setData({
        index31: e.detail.value,
      })
    },
    bindPickerChangeStart3(e) {
      this.setData({
        index32: e.detail.value,
      })
    },
    bindPickerChangeTime3(e) {
      this.setData({
        index33: e.detail.value,
      })
    },
    setCourseTime() {
      let arr = [];
      let obj1 = {},
        obj2 = {},
        obj3 = {};
      obj1.classroom = this.data.classroom1;
      obj1.week = 1 + parseInt(this.data.index11);
      switch (this.data.index12) {
        case '0':
          obj1.cstart = 1;
          break;
        case '1':
          obj1.cstart = 3;
          break;
        case '2':
          obj1.cstart = 6;
          break;
        case '3':
          obj1.cstart = 8;
          break;
        case '4':
          obj1.cstart = 10;
          break;
      }
      obj1.time = 2 + parseInt(this.data.index13);
      obj2.classroom = this.data.classroom2;
      obj2.week = 1 + parseInt(this.data.index21);
      switch (this.data.index22) {
        case '0':
          obj2.cstart = 1;
          break;
        case '1':
          obj2.cstart = 3;
          break;
        case '2':
          obj2.cstart = 6;
          break;
        case '3':
          obj2.cstart = 8;
          break;
        case '4':
          obj2.cstart = 10;
          break;
      }
      obj2.time = 2 + parseInt(this.data.index23);
      obj3.classroom = this.data.classroom3;
      obj3.week = 1 + parseInt(this.data.index31);
      switch (this.data.index32) {
        case '0':
          obj3.cstart = 1;
          break;
        case '1':
          obj3.cstart = 3;
          break;
        case '2':
          obj3.cstart = 6;
          break;
        case '3':
          obj3.cstart = 8;
          break;
        case '4':
          obj3.cstart = 10;
          break;
      }
      obj3.time = 2 + parseInt(this.data.index33);
      if (this.data.classTime == 1) {
        arr.push(obj1);
        let strobj = JSON.stringify(arr);
        return strobj;
      } else if (this.data.classTime == 2) {
        arr.push(obj1);
        arr.push(obj2);
        let strobj = JSON.stringify(arr);
        return strobj;
      } else {
        arr.push(obj1);
        arr.push(obj2);
        arr.push(obj3);
        let strobj = JSON.stringify(arr);
        return strobj;
      }
    },
    submit() {
      if (this.data.cnum === '') {
        wx.showToast({
          title: '课程编号不能为空',
          icon: 'none'
        });
        return;
      }
      if (this.data.cname === '') {
        wx.showToast({
          title: '课程名不能为空',
          icon: 'none'
        });
        return;
      }
      if (isNaN(this.data.capacity)) {
        wx.showToast({
          title: '课程容量必须为数字',
          icon: 'none'
        });
        return;
      }
      if (this.data.capacity < 1) {
        wx.showToast({
          title: '课程容量不合法',
          icon: 'none'
        });
        return;
      }
      if (this.data.teacher === '') {
        wx.showToast({
          title: '教师不能为空',
          icon: 'none'
        });
        return;
      }
      if (this.data.credit === '') {
        wx.showToast({
          title: '学分不能为空',
          icon: 'none'
        });
        return;
      }
      wx.showLoading({
        title: '正在添加',
      })
      console.log("正在添加" + this.data.cnum);
      let that = this;
      wx.request({
        url: app.globalData.url + '/addCourse',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          'admin': app.globalData.nowUser.uid,
          'cnum': that.data.cnum,
          'cname': that.data.cname,
          'ctime': that.setCourseTime(),
          'capacity': that.data.capacity,
          'teacher': that.data.teacher,
          'credit': that.data.credit
        },
        success: function(res) {
          console.log("addCourse:", res.data);
          var resData = res.data;
          if (resData === 1) {
            wx.hideLoading();
            wx.showToast({
              title: '添加成功',
              icon: 'none',
              duration: 2000
            });
            wx.navigateTo({
              url: '../admin/admin'
            })
          } else if (resData === 0) {
            wx.hideLoading();
            wx.showToast({
              title: '课程已存在',
              icon: 'none',
              duration: 2000
            });
          }
        },
        fail: function() {
          wx.hideLoading();
          wx.showToast({
            title: '添加失败',
            icon: 'none',
            duration: 2000
          });
          console.log('addCoursefail');
        }
      })
    }
  }
})