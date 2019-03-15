const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid: '',
    password: '',
  },
  input_id(e) {
    this.setData({
      userid: e.detail.value
    })
  },
  input_pwd(e) {
    this.setData({
      password: e.detail.value
    })
  },
  login: function() {
    wx.showLoading({
      title: '登录中',
    })
    console.log("点击按钮!" + "获取到的账号:" + this.data.userid + "获取到的密码:" + this.data.password);
    let that = this;
    wx.request({
      url: app.globalData.url + '/login',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        'userid': that.data.userid,
        'password': that.data.password
      },
      success: function(res) {
        console.log("login:" + res.data);
        that.getOneUser(that.data.userid);
        var resData = res.data;
        if (resData === 1) {
          wx.hideLoading();
          wx.showToast({
            title: '登录成功',
            icon: 'none',
            duration: 2000
          });
          wx.navigateTo({
            url: '../admin/admin'
          })
        } else if (resData === 2) {
          wx.hideLoading();
          wx.showToast({
            title: '登录成功',
            icon: 'none',
            duration: 2000
          });
          wx.navigateTo({
            url: '../student/student'
          })
        } else {
          wx.hideLoading();
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2000
          });
        }
      },
      fail: function() {
        wx.hideLoading();
        wx.showToast({
          title: '登录失败',
          icon: 'none',
          duration: 2000
        });
        console.log('loginfail');
      }
    })
  },
  getOneUser: function(userId) {
    console.log("账号:" + userId);
    wx.request({
      url: app.globalData.url + '/getOneUser',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        'userId': userId
      },
      success: function(res) {
        app.globalData.nowUser = res.data;
        console.log(app.globalData.nowUser);
      },
      fail: function() {
        console.log('getOneUserfail');
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  }
})