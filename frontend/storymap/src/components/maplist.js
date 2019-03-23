import axios from 'axios'
import Vue from 'vue'
// import $ from 'jquery'
import qs from 'qs'
import vueGridLayout from 'vue-grid-layout'
import headnav from '../layout/head-nav.vue'
var GridLayout = vueGridLayout.GridLayout
var GridItem = vueGridLayout.GridItem
Vue.prototype.$axios = axios
export default {
  components: {
    headnav,
    GridLayout,
    GridItem
  },
  data: function () {
    return {
      currentUser: 'zhangsan',
      newMapDesc: '',
      newMapName: '',
      formLabelWidth: '80px',
      newMapDialogVisible: false,
      modelOfMap: {'x': 0, 'y': 0, 'w': 1.5, 'h': 3, 'i': '0', 'mapName': '123', 'mapDes': ''},
      layout: [
        // eslint-disable-next-line standard/object-curly-even-spacing
        // {'x': 0, 'y': 0, 'w': 1.5, 'h': 3, 'i': '0', 'mapName': 'testMap', 'mapDes': ''},
        // {'x': 1.5, 'y': 0, 'w': 1.5, 'h': 3, 'i': '1', 'mapName': '1', 'mapDes': ''}
        // {'x': 2, 'y': 0, 'w': 1, 'h': 1, 'i': '2'},
        // {'x': 3, 'y': 0, 'w': 1, 'h': 1, 'i': '3'},
        // {'x': 4, 'y': 0, 'w': 1, 'h': 1, 'i': '4'},
        // {'x': 0, 'y': 1, 'w': 1, 'h': 1, 'i': '5'},
        // {'x': 1, 'y': 1, 'w': 1, 'h': 1, 'i': '6'},
        // {'x': 2, 'y': 1, 'w': 1, 'h': 1, 'i': '7'},
        // {'x': 3, 'y': 1, 'w': 1, 'h': 1, 'i': '8'},
        // {'x': 4, 'y': 1, 'w': 1, 'h': 1, 'i': '9'}
      ]
    }
  },
  mounted: function () {
    this.showMapList()
  },
  methods: {
    showMapList: function () {
      var that = this
      var userName = this.currentUser
      this.$axios.post('/getMapList', qs.stringify({userName}
      )).then(function (response) {
        console.log(response.data)
        for (var i = 0; i < response.data.length; i++) {
          that.modelOfMap.x = 1.5 * i
          that.modelOfMap.y = 4 * (i % 10)
          that.modelOfMap.mapDes = response.data[i].mapDescrpt
          that.modelOfMap.mapName = response.data[i].mapName
          that.modelOfMap.i = response.data[i].mapSetupDate
          that.layout.push(that.modelOfMap)
        }
      // eslint-disable-next-line handle-callback-err
      }).catch(function (error) {
        // this.$message('Map Save failedly')
      })
    },
    clickMap: function (index) {
      var mapName = this.layout[index].mapName
      // eslint-disable-next-line standard/object-curly-even-spacing
      console.log(mapName)
      // eslint-disable-next-line standard/object-curly-even-spacing
      this.$router.push({ name: 'showmap', params: { currentMapName: mapName}})
    },
    addMap: function (newMapName, newMapDesc, flag) {
      if (flag === true) {
        this.newMapDialogVisible = false
        var tempMap = JSON.parse(JSON.stringify(this.modelOfMap))
        tempMap.i = Number(new Date())
        tempMap.mapName = newMapName
        tempMap.mapDes = newMapDesc
        this.layout.push(tempMap)
        this.$message('Map add successfully')
        this.newMapDesc = ''
        this.newMapName = ''
      } else {
        this.$message('Map add failed')
      }
    },
    newMap: function (newMapName, newMapDesc) {
      let that = this
      this.$axios.post('/addNewMap', qs.stringify({newMapName, newMapDesc}
      )).then(function (response) {
        console.log(response.data)
        if (response.data === 'ok') {
          // eslint-disable-next-line no-undef
          that.addMap(newMapName, newMapDesc, true)
        } else {
          // eslint-disable-next-line no-undef
          that.addMap(newMapName, newMapDesc, false)
        }
        // eslint-disable-next-line handle-callback-err
      }).catch(function (error) {
        console.log(error)
      })
    }
  }

}
