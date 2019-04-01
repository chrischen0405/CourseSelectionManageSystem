// pages/admin/record/record.js
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
    recordList: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getAllRecord() {
      let that = this;
      wx.request({
        url: app.globalData.url + '/getAllRecord',
        success(res) {
          console.log(res.data);
          that.setData({
            recordList: res.data,
          });
        }
      })
    },
  }
})