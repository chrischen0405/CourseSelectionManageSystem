// pages/resetPwd/resetPwd.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pwd: '',
    pwd2: '',
  },
  input_pwd(e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  input_pwd2(e) {
    this.setData({
      pwd2: e.detail.value
    })
  },
  submit() {
    if (this.data.pwd === '') {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      });
      return;
    }
    if (this.data.pwd2 === '') {
      wx.showToast({
        title: '请再次输入密码',
        icon: 'none'
      });
      return;
    }
    if (this.data.pwd !== this.data.pwd2) {
      wx.showToast({
        title: '两次输入的密码不同',
        icon: 'none'
      });
      return;
    }
    let that = this;
    wx.request({
      url: app.globalData.url + '/resetPwd',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        'uid': app.globalData.nowUser.uid,
        'pwd': that.data.pwd
      },
      success: function(res) {
        wx.navigateBack({
          delta: 1
        });
        wx.showToast({
          title: '密码修改成功',
          icon: 'none',
          duration: 2000
        });
      },
      fail: function() {
        wx.showToast({
          title: '密码修改失败',
          icon: 'none',
          duration: 2000
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})