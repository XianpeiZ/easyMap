<template>
  <div class="dash">
    <el-button :plain="true" type="info" @click.native="newMapDialogVisible = true"><i
                class="el-icon-plus el-icon--left"></i> New Map
    </el-button>
      <div class="component">
        <grid-layout
          :layout="layout"
          :col-num="10"
          :row-height="30"
          :autoSize="false"
          :is-draggable="false"
          :is-resizable="false"
          :useCssTransforms="true"
          :vertical-compact="false"
          :margin="[10, 10]"
          :use-css-transforms="true"
        >
          <grid-item v-for="(item,index) in layout"
                     :key="item.i"
                     :x="item.x"
                     :y="item.y"
                     :w="item.w"
                     :h="item.h"
                     :i="item.i"
                     :is-resizable="false"
                     class="griditem"
          >
        
        <el-card class="box-card" >
        <div slot="header" class="clearfix">
              <span>{{item.mapName}}</span>
             <el-button style="float: right; padding: 3px 0" type="text" @click.native="clickMap(index)"><i class="el-icon-view"></i></el-button>
            <el-button style="float: right; padding: 3px 0" type="text" ><i class="el-icon-edit"></i></el-button>
            <!-- <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-delete"></i></el-button> -->
         </div>
        <div class="text item">
            {{item.mapDes}}
        </div>
        </el-card>
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
</template>

<script>

import maplist from './maplist.js'

export default maplist

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import url("./maplist.less");
</style>
