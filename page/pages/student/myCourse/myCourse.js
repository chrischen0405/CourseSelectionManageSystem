// pages/student/myCourse/myCourse.js
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
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    courseList: [
      { "id":0, "xqj": 1, "skjc": 1, "skcd": 3, "kcmc": "高等数学@教A-301" },
      { "id":1, "xqj": 1, "skjc": 5, "skcd": 3, "kcmc": "高等数学@教A-301" },
      { "id":2, "xqj": 2, "skjc": 1, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "id":3, "xqj": 2, "skjc": 8, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "id":4, "xqj": 3, "skjc": 4, "skcd": 1, "kcmc": "高等数学@教A-301" },
      { "id":5, "xqj": 3, "skjc": 8, "skcd": 1, "kcmc": "高等数学@教A-301" },
      { "id":6, "xqj": 3, "skjc": 5, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "id":7, "xqj": 4, "skjc": 2, "skcd": 3, "kcmc": "高等数学@教A-301" },
      { "id":8, "xqj": 4, "skjc": 8, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "id":9, "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "id":10, "xqj": 6, "skjc": 3, "skcd": 2, "kcmc": "高等数学@教A-301" },
      { "id":11, "xqj": 7, "skjc": 5, "skcd": 3, "kcmc": "高等数学@教A-301" },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showCardView:function(e){
      console.log(e);
    }
  }
})
