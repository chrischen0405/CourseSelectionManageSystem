//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userid: '',
    password: '',
  },
  //事件处理函数
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
    if (this.data.userid === '') {
      wx.showToast({
        title: '请输入账号',
        icon: 'none'
      });
      return;
    }
    if (this.data.password === '') {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      });
      return;
    }
    wx.showLoading({
      title: '登录中',
    });
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
          wx.reLaunch({
            url: '../admin/admin'
          });
          wx.showToast({
            title: '登录成功',
            icon: 'none',
            duration: 2000
          });
        } else if (resData === 2) {
          wx.hideLoading();
          wx.reLaunch({
            url: '../student/student'
          });
          wx.showToast({
            title: '登录成功',
            icon: 'none',
            duration: 2000
          });
        } else if (resData === 3) {
          wx.hideLoading();
          wx.showToast({
            title: '该用户不存在',
            icon: 'none',
            duration: 2000
          });
        } else {
          wx.hideLoading();
          wx.showToast({
            title: '密码错误',
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

  onLoad: function() {
    if (app.globalData.userInfo) {
      console.log(app.globalData.userInfo);
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log(app.globalData.userInfo);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          console.log(app.globalData.userInfo);
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    console.log(app.globalData.userInfo);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})