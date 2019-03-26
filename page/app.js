//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    isLogin: false,
    url: 'http://127.0.0.1:8080',
    nowUser: null,
    collegeList: ['计算机与计算科学学院', '信息与电气工程学院', '工程学院', '医学院', '外国语学院', '商学院', '传媒与人文学院', '法学院', '创意与艺术设计学院', '新西兰UW学院'],
    professionList: ['计算机与计算科学', '软件工程', '信息管理', '统计'],
    allPList: [
      ['计算机与计算科学', '软件工程', '信息管理', '统计'],
      ['信电1', '信电2'],
      ['工程1', '工程2'],
      ['医学1', '医学2'],
      ['外语1', '外语2'],
      ['商院1', '商院2'],
      ['传媒1', '传媒2'],
      ['法学1', '法学2'],
      ['创意1', '创意2'],
      ['UW1', 'UW2']
    ],
  }
})