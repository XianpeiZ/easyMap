// import qs from 'qs'
import vueGridLayout from 'vue-grid-layout'
var GridLayout = vueGridLayout.GridLayout
var GridItem = vueGridLayout.GridItem

export default {
  data () {
    return {
      layout: []
    }
  },
  mounted () {

  },
  components: {
    GridLayout,
    GridItem
  },
  methods: {
    showBackendMap: function () {
      console.log('123')
    }
  },
  watch: {

  }

}
