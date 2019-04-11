// pages/admin/mCenter/mCenter.js
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
    userInfo: [],
    selectFlag: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo() {
      this.setData({
        userInfo: app.globalData.nowUser,
      });
      console.log(app.globalData.nowUser);
    },
    getRecord() {
      wx.navigateTo({
        url: '../record/record',
      })
    },
    getFlag() {
      let that = this;
      wx.request({
        url: app.globalData.url + '/getFlag',
        success(res) {
          that.setData({
            selectFlag: res.data,
          })
        }
      })
    },
    startSelect() {
      console.log('startSelect');
      let that = this;
      wx.request({
        url: app.globalData.url + '/setFlag',
        success(res) {
          that.setData({
            selectFlag: res.data,
          })
        }
      })
    },
    resetpwd() {
      wx.navigateTo({
        url: '../resetPwd/resetPwd',
      })
    },
    exit() {
      app.globalData.nowUser = null;
      wx.reLaunch({
        url: '../index/index',
      })
    }
  }
})