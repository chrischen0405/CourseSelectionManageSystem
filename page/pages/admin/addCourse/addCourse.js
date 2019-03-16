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
    cnum: '',
    cname: '',
    ctime: '',
    classroom: '',
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
    input_classroom(e) {
      this.setData({
        classroom: e.detail.value
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
    bindPickerChangeWeek(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index1: e.detail.value,
        week: this.data.weekList[e.detail.value]
      })
    },
    bindPickerChangeStart(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index2: e.detail.value,
        cstart: this.data.startList[e.detail.value]
      })
    },
    bindPickerChangeTime(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index3: e.detail.value,
        time: this.data.timeList[e.detail.value]
      })
    },
    setCourseTime() {
      let obj = {};
      obj.week = 1 + parseInt(this.data.index1);
      switch (this.data.index2) {
        case '0':
          obj.cstart = 1;
          break;
        case '1':
          obj.cstart = 3;
          break;
        case '2':
          obj.cstart = 6;
          break;
        case '3':
          obj.cstart = 8;
          break;
        case '4':
          obj.cstart = 10;
          break;
      }
      obj.time = 2 + parseInt(this.data.index3);
      let strobj = JSON.stringify(obj);
      return strobj;
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
      if (this.data.classroom === '') {
        wx.showToast({
          title: '教室不能为空',
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
      if (this.data.week === '') {
        wx.showToast({
          title: '请选择星期',
          icon: 'none'
        });
        return;
      }
      if (this.data.cstart === '') {
        wx.showToast({
          title: '请选择上课时间',
          icon: 'none'
        });
        return;
      }
      if (this.data.time === '') {
        wx.showToast({
          title: '请选择课时数',
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
          'cnum': that.data.cnum,
          'cname': that.data.cname,
          'ctime': that.setCourseTime(),
          'classroom': that.data.classroom,
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