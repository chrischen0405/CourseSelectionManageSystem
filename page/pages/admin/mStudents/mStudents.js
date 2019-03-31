// pages/admin/mStudents/mStudents.js
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
    stuList: [],
    deleteId: '',
    keywords: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickCell(e) {
      let num = e.currentTarget.dataset.index;
      this.setData({
        deleteId: this.data.stuList[num].uid
      });
      this.dialog = this.selectComponent("#dialog");
      const data = this.data;
      const dialogContent = [{
          label: '学号',
          value: data.stuList[num].uid
        },
        {
          label: '学生姓名',
          value: data.stuList[num].uname
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
        }
      ];
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
      let that = this;
      wx.showModal({
        title: '确定删除该学生？',
        confirmColor: '#DC143C',
        confirmText: '删除',
        success(res) {
          if (res.confirm) {
            that.deleteStudent();
          } else if (res.cancel) {}
        }
      })
    },
    handleConfirmDialog2() {
      this.dialog.hide();
      wx.navigateTo({
        url: '../updateStudent/updateStudent?userId=' + this.data.deleteId,
      })
    },
    getAllStudent() {
      let that = this;
      wx.request({
        url: app.globalData.url + '/getAllStudent',
        success(res) {
          that.setData({
            stuList: res.data,
          });
        }
      })
    },
    deleteStudent() {
      wx.showLoading({
        title: '正在删除',
      });
      let that = this;
      wx.request({
        url: app.globalData.url + '/deleteStudentById',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          'admin': app.globalData.nowUser.uid,
          'userid': that.data.deleteId
        },
        success: function(res) {
          var resData = res.data;
          if (resData === 1) {
            wx.hideLoading();
            that.getAllStudent();
            wx.showToast({
              title: '删除成功',
              icon: 'none',
              duration: 2000
            });
          } else {
            wx.hideLoading();
            wx.showToast({
              title: '删除失败',
              icon: 'none',
              duration: 2000
            });
          }
        },
        fail: function() {
          wx.hideLoading();
          wx.showToast({
            title: '删除失败',
            icon: 'none',
            duration: 2000
          });
        }
      })
    },
    input_keywords(e) {
      this.setData({
        keywords: e.detail.value
      })
    },
    clickSearch() {
      let that = this;
      if (this.data.keywords === '') {
        this.getAllStudent();
      } else {
        wx.request({
          url: app.globalData.url + '/searchStudent',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            'keywords': that.data.keywords
          },
          success: function(res) {
            that.setData({
              stuList: res.data,
            });
          },
          fail: function() {
            wx.showToast({
              title: '查询失败',
              icon: 'none',
              duration: 2000
            });
          }
        })
      }
    }
  }
})