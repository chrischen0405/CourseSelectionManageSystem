// pages/admin/addStudent/addStudent.js
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
    collegeList: ['计算机与计算科学学院', '信息与电气工程学院', '工程学院', '医学院', '外国语学院', '商学院', '传媒与人文学院', '法学院', '创意与艺术设计学院', '新西兰UW学院'],
    professionList: ['计算机与计算科学', '软件工程', '信息管理', '统计'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index1: e.detail.value
      })
    },
    bindPickerChange2(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index2: e.detail.value
      })
    }
  }
})