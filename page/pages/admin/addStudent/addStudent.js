// pages/admin/addStudent/addStudent.js
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
    collegeList: ['计算机与计算科学学院', '信息与电气工程学院', '工程学院', '医学院', '外国语学院', '商学院', '传媒与人文学院', '法学院', '创意与艺术设计学院', '新西兰UW学院'],
    professionList: ['计算机与计算科学', '软件工程', '信息管理', '统计'],
    userId: '',
    userName: '',
    college: '',
    profession: '',
    stuClass: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    input_id(e) {
      this.setData({
        userId: e.detail.value
      })
    },
    input_name(e) {
      this.setData({
        userName: e.detail.value
      })
    },
    input_class(e) {
      this.setData({
        stuClass: e.detail.value
      })
    },
    bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index1: e.detail.value,
        college: this.data.collegeList[e.detail.value]
      })
    },
    bindPickerChange2(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index2: e.detail.value,
        profession: this.data.professionList[e.detail.value]
      })
    },
    submit() {
      if (this.data.userId === '') {
        wx.showToast({
          title: '学号不能为空',
          icon: 'none'
        });
        return;
      }
      if (this.data.userName === '') {
        wx.showToast({
          title: '姓名不能为空',
          icon: 'none'
        });
        return;
      }
      if (this.data.college === '') {
        wx.showToast({
          title: '请选择分院',
          icon: 'none'
        });
        return;
      }
      if (this.data.profession === '') {
        wx.showToast({
          title: '请选择专业',
          icon: 'none'
        });
        return;
      }
      if (this.data.stuClass === '') {
        wx.showToast({
          title: '班级不能为空',
          icon: 'none'
        });
        return;
      }
      wx.showLoading({
        title: '正在添加',
      })
      console.log("正在添加" + this.data.userId);
      let that = this;
      wx.request({
        url: app.globalData.url + '/addStudent',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          'userId': that.data.userId,
          'userName': that.data.userName,
          'college': that.data.college,
          'profession': that.data.profession,
          'stuClass': that.data.stuClass
        },
        success: function(res) {
          console.log("addStudent:", res.data);
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
              title: '学号已存在',
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
          console.log('addStudentfail');
        }
      })
    }
  }
})