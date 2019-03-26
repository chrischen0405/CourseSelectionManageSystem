// pages/updateStudent/updateStudent.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuId: '',
    collegeList: app.globalData.collegeList,
    professionList: app.globalData.professionList,
    allPList: app.globalData.allPList,
    index1: 0,
    index2: 0,
    userName: '',
    college: '',
    profession: '',
    stuClass: '',
    pwd: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      stuId: options.userId
    });
    console.log(this.data.stuId);
    this.getOneUser(this.data.stuId);
  },

  getOneUser(userId) {
    let that = this;
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
        var resData = res.data;
        console.log(resData);
        let cAndP = that.getIndex(resData.college, resData.profession);
        that.setData({
          userName: resData.uname,
          stuClass: resData.stuClass,
          pwd: resData.pwd,
          college: resData.college,
          profession: resData.profession,
          index1: cAndP[0],
          index2: cAndP[1],
          professionList: that.data.allPList[cAndP[0]],
        })
      },
      fail: function() {
        wx.hideLoading();
        wx.showToast({
          title: '查询失败',
          icon: 'none',
          duration: 2000
        });
      }
    })
  },
  getIndex(college, profession) {
    let res = [0, 0];
    let cList = this.data.collegeList;
    let apList = this.data.allPList;
    let pList = [];
    for (let i = 0; i < cList.length; i++) {
      if (college === cList[i]) {
        res[0] = i;
        break;
      }
    }
    pList = apList[res[0]];
    for (let j = 0; j < pList.length; j++) {
      if (profession === pList[j]) {
        res[1] = j;
        break;
      }
    }
    console.log(res);
    return res;
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
  submit() {
    console.log(this.data);
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