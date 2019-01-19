import axios from 'axios'
import $ from 'jquery'
import QS from 'qs'
import vueGridLayout from 'vue-grid-layout'
var GridLayout = vueGridLayout.GridLayout
var GridItem = vueGridLayout.GridItem

export default {
  data () {
    return {
      cardWidth: 1,
      cardHight: 3,
      gridColNum: 10,
      layout1: [
        {'x': 0, 'y': 0, 'w': 1, 'h': 3, 'i': 0, 'flag': false, 'type': 'card'}
        // {'x': 1, 'y': 0, 'w': 1, 'h': 3, 'i': 1, 'flag': false, 'type': 'card'},
        // {'x': 2, 'y': 0, 'w': 1, 'h': 3, 'i': 2, 'flag': false, 'type': 'card'},
        // {'x': 3, 'y': 0, 'w': 1, 'h': 3, 'i': 3, 'flag': false, 'type': 'card'},
        // {'x': 0, 'y': 3, 'w': 1, 'h': 3, 'i': 4, 'flag': false, 'type': 'card'},
        // {'x': 1, 'y': 3, 'w': 1, 'h': 3, 'i': 5, 'flag': false, 'type': 'card'},
        // {'x': 2, 'y': 3, 'w': 1, 'h': 3, 'i': 6, 'flag': false, 'type': 'card'},
        // {'x': 3, 'y': 3, 'w': 1, 'h': 3, 'i': 7, 'flag': false, 'type': 'card'}
        // {'x': 0, 'y': 6, 'w': 100, 'h': 1, 'i': 0, 'flag': false, 'type': 'release'}
        // {"x":2,"y":6,"w":2,"h":6,"i":"4"},
        // {"x":4,"y":6,"w":2,"h":6,"i":"5"},黄色：#FAE75C,蓝色：#AED9E9,粉色:#FE8A8B
      ],
      historyLayout1: [
        // {'x': 0, 'y': 0, 'w': 1, 'h': 3, 'i': 0, 'flag': false},
        // {'x': 1, 'y': 0, 'w': 1, 'h': 3, 'i': 1, 'flag': false},
        // {'x': 2, 'y': 0, 'w': 1, 'h': 3, 'i': 2, 'flag': false},
        // {'x': 3, 'y': 0, 'w': 1, 'h': 3, 'i': 3, 'flag': false},
        // {'x': 0, 'y': 3, 'w': 1, 'h': 3, 'i': 4, 'flag': false},
        // {'x': 1, 'y': 3, 'w': 1, 'h': 3, 'i': 5, 'flag': false},
        // {'x': 2, 'y': 3, 'w': 1, 'h': 3, 'i': 6, 'flag': false},
        // {'x': 3, 'y': 3, 'w': 1, 'h': 3, 'i': 7, 'flag': false}
      ],
      initLayout: [
        {'x': 0, 'y': 0, 'w': 1, 'h': 3, 'i': 0, 'flag': false, 'type': 'card'}
      ],
      release: {
        name: '',
        desc: ''
      },
      beforemove: {},
      aftermoved: {},
      formatLayoutVisible: false,
      addDashVisiable: false,
      releaseDialogVisible: false,
      newMapDialogVisible: false,
      showMapDialogVisible: false,
      curBox: null,
      watch_num: 0,
      map: {
        name: '',
        desc: ''
      },
      newMapname: '',
      newMapDesc: '',
      editDialogFormVisible: false,
      editForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      colorPick: '#ffffff',
      comments: []

    }
  },
  mounted () {

  },
  components: {
    GridLayout,
    GridItem
  },
  methods: {
    // 这里是系统Event
    moveEvent: function (i, newX, newY) {
      this.curBox = i
    },

    movedEvent: function (i, newX, newY) {
      // console.log(this.judgeItemPosition(newX, newY))
      if (this.judgeItemPosition(newX, newY)) {
        this.toChangePosition(i)
        this.watch_num = 0
      }
      // console.log('MOVED i=' + i + ', X=' + newX + ', Y=' + newY)
    },

    layoutUpdatedEvent: function (newLayout) {
      console.log('Updated layout: ', newLayout)
      // console.log('Layout1:', this.layout1)
      // this.historyLayout1 = newLayout
    },

    resizeEvent: function (i, newH, newW, newHPx, newWPx) {
      console.log('RESIZE i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
    },

    // ————————————————————————————————————————————————————————————————————————————————
    // MAP的增删改查
    newMap: function (newMapname, newMapDesc) {
      this.map.name = newMapname
      this.map.desc = newMapDesc
      this.newMapname = ''
      this.newMapDesc = ''
      this.newMapDialogVisible = false
      this.layout1 = JSON.parse(JSON.stringify(this.initLayout))

      data = '123'
      axios.post('http://localhost:8000/api/map',JSON.stringify(data
      )).then(function (response) {
        　　this.$message('New Map Save successfully')
        }).catch(function (error) {
          　this.$message('New Map Save failedly')
        })
    },

    saveMap () {
      this.$message('save')
    },

    deleteMap: function () {
      this.$confirm('此操作将永久删除该MAP, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.map.name = ''
        this.map.desc = ''
        this.layout1 = JSON.parse(JSON.stringify(this.initLayout))
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    // ——————————————————————————————————————————————————————————————————————————
    // 这里是对card Item 的增删改查
    deleteItem: function (index) {
      // console.log(index)
      this.layout1.splice(index, 1)
      // this.historyLayout1.splice(index, 1)
    },

    judgeItemPosition: function (newX, newY) {
      // eslint-disable-next-line camelcase
      console.log(this.historyLayout1)
      var TempLayout = this.historyLayout1
      for (var i = 0; i < TempLayout.length; i++) {
        if (newX === TempLayout[i].x && newY === TempLayout[i].y) {
          // console.log('false')
          return 'false'
        }
      }
      if ((newY % this.cardHight) === 0) {
        // console.log('false')
        return 'false'
      }
      // console.log('true')
      return 'true'
    },

    // watchitem 只要moveEvent 函数一调用就更新整个gridlayout
    watchitem (item) {
      // console.log(this.watch_num)
      if (this.watch_num === 0) {
        this.historyLayout1 = JSON.parse(JSON.stringify(this.layout1))
        this.watch_num++
        // console.log('看看都什么时候调用这个函数')
        console.log(this.historyLayout1)
      }
      // console.log('看看都什么时候调用这个函数')
      var historyLayout = JSON.parse(JSON.stringify(this.historyLayout1))
      if (this.curBox !== item.i) {
        // console.log(historyLayout.length)
        for (let j = 0; j < historyLayout.length; j++) {
          if (historyLayout[j].i === item.i) {
            // 目的是假如不是当前移动的card 坐标就变成历史坐标
            // console.log('赋值:' + item.i)
            // console.log('X历史坐标:' + historyLayout[j].x + ' Y历史坐标:' + historyLayout[j].y)
            item.x = historyLayout[j].x
            item.y = historyLayout[j].y
            // console.log('X:' + item.x + ' Y:' + item.y)
          }
        }
      }
      // console.log()
      return item
    },
    // 给card 增加comments
    addComments: function () {
      this.comments.push({
        name: this.editForm.name
      })
      console.log(this.editForm.name)
      this.editForm.name = ''
    },
    editColorPick1: function () {
      this.colorPick = '#FE8A8B'
    },
    editColorPick2: function () {
      this.colorPick = '#FAE75C'
    },
    editColorPick3: function () {
      this.colorPick = '#AED9E9'
    },
    toChangePosition: function (i) {
      let layout = this.layout1
      let hisLayout = this.layout1
      for (let j = 0; j < layout.length; j++) {
        if (layout[j].i === i) {
          let item = layout[j]
          for (let k = 0; k < hisLayout.length; k++) {
            if (hisLayout[k].i === i) {
              let hisItem = hisLayout[k]
              let beforeX = hisItem.x
              let beforeY = hisItem.y
              let afterX = item.x
              let afterY = item.y
              for (let l = 0; l < hisLayout.length; l++) {
                if (hisLayout[l].i !== i) {
                  let needMoveobj = hisLayout[l]
                  if (afterY === beforeY && needMoveobj.y === beforeY &&
                           ((needMoveobj.x >= item.x && needMoveobj.x <= beforeX) || (needMoveobj.x <= item.x && needMoveobj.x >= beforeX))) {
                    if (item.x > beforeX) {
                      needMoveobj.x = needMoveobj.x - 1
                    } else {
                      needMoveobj.x = needMoveobj.x + 1
                    }
                  } else if ((beforeY === 1 && afterY === 0) && ((needMoveobj.y === beforeY && needMoveobj.x < beforeX) || (needMoveobj.y === afterY && needMoveobj.x >= afterX))) {
                    needMoveobj.x = needMoveobj.x + 1
                    if (needMoveobj.x > 4) {
                      needMoveobj.x = 0
                      needMoveobj.y = needMoveobj.y + 1
                    }
                  } else if ((beforeY === 0 && afterY === 1) && ((needMoveobj.y === beforeY && needMoveobj.x > beforeX) || (needMoveobj.y === afterY && needMoveobj.x <= afterX))) {
                    needMoveobj.x = needMoveobj.x - 1
                    if (needMoveobj.x < 0) {
                      needMoveobj.x = 4
                      needMoveobj.y = needMoveobj.y - 1
                    }
                  }
                }
              }
              hisItem.x = item.x
              hisItem.y = item.y
            }
          }
        }
      }
    },

    rowAddItem: function (index) {
      console.log(this.layout1)
      // 如果是第一行
      if (this.layout1[index].y === 0) {
        console.log('第一行')
        for (var i = 0; i < this.layout1.length; i++) {
          if ((this.layout1[i].y === this.layout1[index].y) && (this.layout1[i].x > this.layout1[index].x)) {
            this.layout1[i].x += 1
          }
        }
        var x = this.layout1[index].x + 1
        var y = this.layout1[index].y
        var zi = (this.layout1.length)
        var newItem = {'x': x, 'y': y, 'w': 1, 'h': 3, 'i': zi}
        this.layout1.push(newItem)
        this.historyLayout1.push(newItem)
      }
      // 如果是第二行
      if (this.layout1[index].y === 3) {
        console.log('第二行')
        for (i = 0; i < this.layout1.length; i++) {
          if ((this.layout1[i].y <= this.layout1[index].y) && (this.layout1[i].x > this.layout1[index].x)) {
            this.layout1[i].x += 1
            this.layout1[i].flag = true
          }
        }
        x = this.layout1[index].x + 1
        y = this.layout1[index].y
        // console.log(y)
        i = (this.layout1.length)
        newItem = {'x': x, 'y': y, 'w': 1, 'h': 3, 'i': i}
        this.layout1.push(newItem)
        this.historyLayout1.push(newItem)
        console.log(this.layout1)
        // console.log(this.historyLayout1)
      }
    },

    colAddItem: function (index) {
      console.log(this.layout1)
      for (var i = 0; i < this.layout1.length; i++) {
        if ((this.layout1[i].x === this.layout1[index].x) && (this.layout1[i].y > this.layout1[index].y)) {
          this.layout1[i].y += 3
        }
      }
      var x = this.layout1[index].x
      var y = this.layout1[index].y + 3
      i = (this.layout1.length)
      var newItem = {'x': x, 'y': y, 'w': 1, 'h': 3, 'i': i}
      this.layout1.push(newItem)
      this.historyLayout1.push(newItem)
    }
  },

  // ————————————————————————————————————————————————————
  // 这里可以是一些控制函数
  handleCommand (param) {
    this.$message(param)
  },
  getTemplate (templateName) {
    return require('../components/' + templateName + '.vue')
  },
  watch: {
  //   layout: {
  //     handler: function (val, oldVal) {
  //       console.log(val)
  //     },
  //     deep: true
  //   }
  }
}
