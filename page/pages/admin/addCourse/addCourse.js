// pages/admin/addCourse/addCourse.js
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
    classroomList: ['理四222', '理四223', '理四224'],
    teacherList: ['赵老师', '钱老师', '孙老师', '李老师'],
    weekList: ['星期一', '星期二', '星期三', '星期四', '星期五'],
    startList: ['第一节课', '第三节课', '第六节课', '第八节课','第十节课'],
    timeList: ['2课时', '3课时'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChangeClassroom(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index1: e.detail.value
      })
    },
    bindPickerChangeTeacher(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index2: e.detail.value
      })
    },
    bindPickerChangeWeek(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index3: e.detail.value
      })
    },
    bindPickerChangeStart(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index4: e.detail.value
      })
    },
    bindPickerChangeTime(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index5: e.detail.value
      })
    }
  }
})