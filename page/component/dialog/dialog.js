// component/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      // 初始值
      value: '课程详情'
    },
    content: {
      type: Array
    },
    confirmText: {
      type: String,
      value: '确定'
    },
    confirmText2: {
      type: String,
      value: '确定2'
    },
    cancelText: {
      type: String,
      value: '取消'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showDialog: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      this.setData({
        showDialog: true
      })
    },
    hide() {
      this.setData({
        showDialog: false
      })
    },
    _cancel() {
      //触发取消回调
      this.triggerEvent("cancel")
    },
    _confirm() {
      //触发成功回调
      this.triggerEvent("confirm");
    },
    _confirm2() {
      this.triggerEvent("confirm2");
    }
  }
})