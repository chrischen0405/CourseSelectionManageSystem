// pages/admin/mCourse/mCourse.js
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
    courseList: [],
    deleteId:0,
    keywords:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickCell(e) {
      let num = e.currentTarget.dataset.index;
      this.setData({
        deleteId: this.data.courseList[num].cid
      });
      console.log(num);
      this.dialog = this.selectComponent("#dialog");
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
          label: '教室',
          value: data.courseList[num].classroom
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
      this.deleteCourse();
    },
    getAllCourse() {
      let that = this;
      wx.request({
        url: app.globalData.url+'/getAllCourse',
        success(res) {
          that.setData({
            courseList: res.data,
          });
        }
      })
    },
    deleteCourse() {
      wx.showLoading({
        title: '正在删除',
      });
      let that = this;
      wx.request({
        url: app.globalData.url + '/deleteCourseById',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          'cid': that.data.deleteId
        },
        success: function (res) {
          var resData = res.data;
          if (resData) {
            wx.hideLoading();
            that.getAllCourse();
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
        fail: function () {
          wx.hideLoading();
          wx.showToast({
            title: '删除失败',
            icon: 'none',
            duration: 2000
          });
        }
      })
    },
    input_keywords(e){
      this.setData({
        keywords: e.detail.value
      })
    },
    clickSearch(){
      let that = this;
      if(this.data.keywords===''){
        this.getAllCourse();
      }else{
        wx.request({
          url: app.globalData.url + '/searchCourse',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            'keywords': that.data.keywords
          },
          success: function (res) {
            that.setData({
              courseList: res.data,
            });
          },
          fail: function () {
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