import axios from 'axios'
import Vue from 'vue'
// import $ from 'jquery'
import qs from 'qs'
import vueGridLayout from 'vue-grid-layout'
import headnav from '../layout/head-nav.vue'
import html2canvas from 'html2canvas'
// import jsPDF from 'jspdf'
var GridLayout = vueGridLayout.GridLayout
var GridItem = vueGridLayout.GridItem
Vue.prototype.$axios = axios

export default {
  data () {
    return {
      htmlTitle: '页面导出PDF文件名',
      newMapName: '',
      currentItem: '',
      cardWidth: 1,
      cardHight: 3,
      gridColNum: 10,
      sendLayout: [],
      card1: {'x': 0, 'y': 0, 'w': 1, 'h': 3, 'i': 0, 'flag': 0, 'type': 'card', 'colorPick': '#ffffff', 'title': '', 'des': '', comments: [], id: 0},
      layout1: [
        {'x': 0, 'y': 0, 'w': 1, 'h': 3, 'i': 0, 'flag': 0, 'type': 'card', 'colorPick': '#ffffff', 'title': '', 'des': '', comments: [], id: 0}
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
      showMapDialogVisible: false,
      curBox: null,
      watch_num: 0,
      map: {
        name: this.$route.params.currentMapName,
        desc: ''
      },
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
      currentcard: {
        title: '',
        des: ''
      },
      formLabelWidth: '80px',
      colorPick: '#ffffff',
      comments: []

    }
  },
  mounted () {
    this.getBackendMap()
  },
  components: {
    headnav,
    GridLayout,
    GridItem
  },
  watch: {
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
      for (var j = 0; j < this.layout1.length; j++) {
        if (this.layout1[j].i === i) {
          this.layout1[j].flag = 1
        }
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
    // MAP的增删改查 以及导出
    // 从后端获取MAP信息
    getBackendMap: function () {
      var that = this
      var mapName = this.map.name
      this.$axios.post('/getBackendMap', qs.stringify({mapName}
      )).then(function (response) {
        console.log('从后台获取到的card信息：')
        console.log(response.data)
        that.layout1[0].title = response.data[0].storyTitle
        for (var i = 0; i < response.data.length; i++) {
          that.layout1[i] = JSON.parse(JSON.stringify(that.card1))
          that.layout1[i].x = response.data[i].coodX
          that.layout1[i].y = response.data[i].coodY
          that.layout1[i].colorPick = response.data[i].colorPick
          that.layout1[i].title = response.data[i].storyTitle
          that.layout1[i].des = response.data[i].storyDescription
          that.layout1[i].i = response.data[i].storyId
          that.layout1[i].id = response.data[i].storyId
          that.layout1[i].flag = -1
        }
        console.log('前台保留下来的信息：')
        console.log(that.layout1)
        // for(var i = 0 ;i <response.data.size())
      // eslint-disable-next-line handle-callback-err
      }).catch(function (error) {
        // this.$message('Map Save failedly')
        console.log(error)
      })
    },

    showMap: function () {
      this.showMapDialogVisible = true
    },

    saveMap () {
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-array-constructor
      var that = this
      let tempLay = JSON.stringify(that.layout1)
      console.log('即将要保存的map：')
      console.log(tempLay)
      // console.log(typeof (tempLay))
      let mapName = this.map.name
      console.log(mapName)
      // tempLay = JSON.parse(JSON.stringify(this.layout1))
      this.$axios.post('/saveMap', qs.stringify({tempLay, mapName}
      )).then(function (response) {
        console.log('后台返回的保存信息：')
        console.log(response.data)
        if (response.data === 0) {
          that.$message(' Map Save successfully')
        }
        // eslint-disable-next-line handle-callback-err
      }).catch(function (error) {
        // that.$message('Map Save failedly')
      })
      // this.$message('save')
    },

    deleteMap: function () {
      this.$confirm('此操作将永久删除该MAP, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let mapName = this.map.name
        this.$axios.post('/deleteMap', qs.stringify({mapName}
        )).then(function (response) {
          console.log(response.data)
          if (response.data) {
            this.map.name = ''
            this.map.desc = ''
            this.layout1 = JSON.parse(JSON.stringify(this.initLayout))
            // this.$message({
            //   type: 'success',
            //   message: '删除成功!'
            // })
          }
          // eslint-disable-next-line handle-callback-err
        }).catch(function (error) {
          this.$message('delete failed ')
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    pdfExport: function () {
      // eslint-disable-next-line no-undef
      console.log('导出PDF')
      this.getPdf('storyMap', name)
    },
    savecanvas: function () {
      let canvas = document.querySelector('.canvas')
      let that = this
      html2canvas(canvas, {scale: 2, logging: false, useCORS: true}).then(function (canvas) {
        let type = 'png'
        let imgData = canvas.toDataURL(type)
        // 照片格式处理
        let _fixType = function (type) {
          type = type.toLowerCase().replace(/jpg/i, 'jpeg')
          let r = type.match(/png|jpeg|bmp|gif/)[0]
          return 'image/' + r
        }
        imgData = imgData.replace(_fixType(type), 'image/octet-stream')
        let filename = 'UUSound' + '.' + type
        that.saveFile(imgData, filename)
      })
    },
    saveFile (data, filename) {
      // eslint-disable-next-line camelcase
      let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      save_link.href = data
      save_link.download = filename

      let event = document.createEvent('MouseEvents')
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      save_link.dispatchEvent(event)
    },

    // ——————————————————————————————————————————————————————————————————————————
    // 这里是对card Item 的增删改查
    deleteItem: function (index) {
      var that = this
      var storyId = that.layout1[index].id
      console.log(storyId)
      if (this.layout1.length > 1) {
        this.$axios.post('/deleteItem', qs.stringify({storyId}
        )).then(function (response) {
          console.log('后台返回的删除信息：')
          console.log(response.data)
          if (response.data) {
            that.$message('Card delete successfully')
            that.layout1.splice(index, 1)
          }
          // eslint-disable-next-line handle-callback-err
        }).catch(function (error) {
          that.$message('Card delete failed')
        })
      } else {
        this.$message('Cannot delete When there is only one card')
      }
      // console.log(index)

      // this.historyLayout1.splice(index, 1)
    },

    showEditDialogFormVisible: function (index) {
      this.editDialogFormVisible = true
      this.currentItem = index
      this.currentcard.title = this.layout1[index].title
      this.currentcard.des = this.layout1[index].des
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
      this.layout1[this.currentItem].flag = 1
    },
    editColorPick1: function () {
      this.layout1[this.currentItem].colorPick = '#FE8A8B'
      this.layout1[this.currentItem].flag = 1
    },
    editColorPick2: function () {
      this.layout1[this.currentItem].colorPick = '#FAE75C'
      this.layout1[this.currentItem].flag = 1
    },
    editColorPick3: function () {
      this.layout1[this.currentItem].colorPick = '#AED9E9'
      this.layout1[this.currentItem].flag = 1
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
    editAll: function () {
      this.editDialogFormVisible = false
      this.layout1[this.currentItem].title = this.currentcard.title
      this.layout1[this.currentItem].des = this.currentcard.des
      this.layout1[this.currentItem].flag = 1
      this.currentcard.title = ''
      this.currentcard.des = ''
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
        var id = Number(new Date())
        var tempCard = JSON.parse(JSON.stringify(this.layout1[index]))
        tempCard.x = x
        tempCard.y = y
        tempCard.i = id
        tempCard.id = 0
        tempCard.title = ''
        tempCard.des = ''
        tempCard.flag = 0
        this.layout1.push(tempCard)
        this.historyLayout1.push(tempCard)
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
        id = Number(new Date())
        // eslint-disable-next-line no-redeclare
        var tempCard = JSON.parse(JSON.stringify(this.layout1[index]))
        tempCard.x = x
        tempCard.y = y
        tempCard.i = id
        tempCard.id = 0
        tempCard.title = ''
        tempCard.des = ''
        tempCard.flag = 0
        this.layout1.push(tempCard)
        this.historyLayout1.push(tempCard)
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
      var id = Number(new Date())
      var tempCard = JSON.parse(JSON.stringify(this.layout1[index]))
      tempCard.x = x
      tempCard.y = y
      tempCard.i = id
      tempCard.id = 0
      tempCard.title = ''
      tempCard.des = ''
      tempCard.flag = 0
      this.layout1.push(tempCard)
      this.historyLayout1.push(tempCard)
    },

    // ————————————————————————————————————————————————————
    // 这里可以是一些控制函数
    handleCommand (param) {
      this.$message(param)
    },
    getTemplate (templateName) {
      return require('../components/' + templateName + '.vue')
    }
  }
}
