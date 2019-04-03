// pages/admin/mKind/mKind.js
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
    collegeList: app.globalData.collegeList,
    professionList: app.globalData.professionList,
    allPList: app.globalData.allPList,
    kindList: ['必修课', '限选课'],
    index1: 0,
    index2: 0,
    index3: 0,
    cnum: '',
    profession: app.globalData.professionList[0],
    kind: '必修课'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    input_cnum(e) {
      this.setData({
        cnum: e.detail.value
      })
    },
    bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index1: e.detail.value,
        index2: 0,
        college: this.data.collegeList[e.detail.value],
        professionList: this.data.allPList[e.detail.value],
        profession: this.data.allPList[e.detail.value][0],
      })
    },
    bindPickerChange2(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index2: e.detail.value,
        profession: this.data.professionList[e.detail.value]
      })
    },
    bindPickerChange3(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index3: e.detail.value,
        kind: this.data.kindList[e.detail.value]
      })
    },
    submit() {
      if (this.data.cnum === '') {
        wx.showToast({
          title: '课程号不能为空',
          icon: 'none'
        });
        return;
      }
      wx.showLoading({
        title: '正在添加',
      })
      console.log("正在添加");
      let that = this;
      wx.request({
        url: app.globalData.url + '/addType',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          'pname': that.data.profession,
          'cnum': that.data.cnum,
          'type': that.data.kind
        },
        success: function(res) {
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
              title: '该课程号不存在',
              icon: 'none',
              duration: 2000
            });
          } else if (resData === 2) {
            wx.hideLoading();
            wx.showToast({
              title: '该课程已存在',
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
        }
      })
    }
  }
})