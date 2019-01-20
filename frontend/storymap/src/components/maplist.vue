<template>
  <div class="home"  >
    <!-- <el-row class="dashcontent">
        <el-col :span="3" class="left-menu">
                         <el-row class="tac">

                          </el-row>
                        </el-col>
                        <el-col :span="21" class="right-menu"> -->
    <div class="dash">
      <!-- <div>
        <el-row>
          <el-col :span="10" class="dashtitle"><h2></h2>
          </el-col>
          <el-col :span="15"  style="right">
            <div class="grid-content bg-purple">
              <el-button :plain="true" type="info" @click.native="showMap"><i
                class="el-icon-view el-icon--left"></i> Show Map
              </el-button>
              <el-button :plain="true" type="info" @click.native="newMapDialogVisible = true"><i
                class="el-icon-plus el-icon--left"></i> New Map
              </el-button>
              <el-button :plain="true" type="info" @click.native="deleteMap"><i
                class="el-icon-delete el-icon--left"></i>Delete Map
              </el-button>
              <el-button :plain="true" type="info" @click.native="saveMap"><i
                class="el-icon-document el-icon--left"></i>Save
              </el-button>
            </div>
          </el-col>
        </el-row>
      </div> -->
      <div class="component">
        <grid-layout
          :layout="layout"
          :col-num="gridColNum"
          :row-height="30"
          :autoSize="false"
          :is-draggable="false"
          :is-resizable="false"
          :useCssTransforms="true"
          :vertical-compact="false"
          :margin="[10, 10]"
          :use-css-transforms="true"
        >
          <grid-item v-for="(item,index) in layout1"
                     :v-bind:item="watchitem(item)"
                     :key="item.i"
                     :x="item.x"
                     :y="item.y"
                     :w="item.w"
                     :h="item.h"
                     :i="item.i"
                     :is-resizable="false"
                     @move="moveEvent"
                     @moved="movedEvent"
                     class="griditem"
                     :style="{background:item.colorPick}"
                     @click="showBackendMap" 
          >
            <el-row class="drag-title" :style="{background:item.colorPick}">
              <el-col :span="14">card:{{item.i}}</el-col>
              <el-col :span="6" class="ico">
                <!-- <el-dropdown   @command="handleCommand"> -->
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="deleteItem(index)">delete card</el-dropdown-item>
                    <el-dropdown-item @click.native="rowAddItem(index)">add row card</el-dropdown-item>
                    <el-dropdown-item @click.native="colAddItem(index)">add column card</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
            <el-row class="editButton">
              <!--<el-col :span="21">-->
              <el-button type="text" @click.native="showEditDialogFormVisible(index)"><i class="el-icon-edit"></i></el-button>
              <!--</el-col>-->
            </el-row>
        </grid-item >
          <el-dialog title="New Map" :visible.sync="newMapDialogVisible">
            <el-form>
              <el-form-item label="name" :label-width="formLabelWidth">
                <el-input v-model="newMapName" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="description" :label-width="formLabelWidth">
                <el-input v-model="newMapDesc" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="newMapDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click.native="newMap(newMapName,newMapDesc)">确 定</el-button>
            </div>
          </el-dialog>
        </grid-layout>
      </div>
    </div>
    <!-- </el-col> -->
    <!-- </el-row> -->
  </div>
</template>

<script>
// import HelloWorld from './HelloWorld.js'
// export default HelloWorld
// export default {
//   name: 'HelloWorld',
import MapClass from './maplist.js'

export default MapClass

// }
</script>
<style lang="less">
  @import url("./maplist.less");
</style>
