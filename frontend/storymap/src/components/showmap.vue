<template>
  <div class="canvas"  ref="canvas"  id = "storyMap">
    <!-- <el-row class="dashcontent">
        <el-col :span="3" class="left-menu">
                         <el-row class="tac">

                          </el-row>
                        </el-col>
                        <el-col :span="21" class="right-menu"> -->
    <headnav> </headnav>
    <div class="dash">
      <div>
        <el-row>
          <el-col :span="10" class="dashtitle"><h2>{{map.name}}</h2>
            <!-- <div class="grid-content bg-purple"></div> -->
          </el-col>
          <el-col :span="15"  style="right">
            <div class="grid-content bg-purple">
              <el-button :plain="true" type="info" @click.native="showMap"><i
                class="el-icon-edit el-icon--left"></i> Edit Map
              </el-button>
              <el-button :plain="true" type="info" @click.native="deleteMap"><i
                class="el-icon-delete el-icon--left"></i>Delete Map
              </el-button>
              <el-button :plain="true" type="info" @click.native="saveMap"><i
                class="el-icon-document el-icon--left"></i>Save
              </el-button>
              <el-button :plain="true" type="info" @click.native="savecanvas"><i
                class="el-icon-tickets el-icon--left"></i>PNG
              </el-button>
              <el-button :plain="true" type="info" @click.native="pdfExport"><i
                class="el-icon-tickets el-icon--left"></i>PDF
              </el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="component">
        <grid-layout
          :layout="layout1"
          :col-num="gridColNum"
          :row-height="30"
          :autoSize="false"
          :is-draggable="true"
          :is-resizable="false"
          :useCssTransforms="true"
          :vertical-compact="false"
          :margin="[10, 10]"
          :use-css-transforms="true"
          @layout-updated="layoutUpdatedEvent"
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
          >
            <el-row class="drag-title" :style="{background:item.colorPick}">
              <el-col :span="14">{{item.title}}</el-col>
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
            <el-row class="drag-content">
              <el-col :span="21" >{{item.desc}}
                <component v-bind:is="item.component"></component>
              </el-col>
            </el-row>
            <el-row class="editButton">
              <!--<el-col :span="21">-->
              <el-button type="text" @click.native="showEditDialogFormVisible(index)"><i class="el-icon-edit"></i></el-button>
              <!--</el-col>-->
            </el-row>
        </grid-item>
          <!--编辑备注卡片信息-->
         <span class="editdialog">
                <el-dialog title="card" :visible.sync="editDialogFormVisible ">
                  <el-form :model="currentcard" class="editcard">
                    <el-form-item label="name" :label-width="formLabelWidth">
                     <el-input v-model="currentcard.title" autocomplete="off"></el-input>
                  </el-form-item>
                <el-form-item label="description" :label-width="formLabelWidth">
                   <el-input v-model="currentcard.des" autocomplete="off"></el-input>
                  </el-form-item>
               </el-form>
                  <div class="colorPick1">
                    <el-button  @click.native="editColorPick1(index)" size="small" :style="{background:'#FE8A8B'}"  circle> </el-button>
                  </div>
                  <div class="colorPick2">
                    <el-button  @click.native="editColorPick2(index)" size="small" :style="{background:'#FAE75C'}"  circle> </el-button>
                  </div>
                  <div class="colorPick3">
                    <el-button  @click.native="editColorPick3(index)" size="small" :style="{background:'#AED9E9'}"  circle> </el-button>
                  </div>
                  <div class="commentslist">
                    <ul>
                      <li v-for="comment in comments" :key="comment.name">
                        {{comment.name}}
                      </li>
                    </ul>
                  </div>
                  <el-form :model="editForm" onsubmit="return false;">
                    <el-form-item label="Comments" :label-width="formLabelWidth" size="medium">
                      <el-input v-model="editForm.name" auto-complete="off"  @keyup.enter.native="addComments"></el-input>
                    </el-form-item>
                  </el-form>

                  <div slot="footer" class="dialog-footer">
                    <el-button @click="editDialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="editAll()">确 定</el-button>
                  </div>
                </el-dialog>
              </span>

          <grid-item
            :x="0"
            :y="6"
            :w="200"
            :h="1"
            :i="1"
            :is-resizable="false"
            :is-draggable="false"
            class="releaseGrid"

          >
            <el-row class="releaseLine" :style="{border:none}">
              <el-col :span="12" >
                <el-dropdown trigger="click">
											<span class="release-dropdown-link">
												release1<i class="el-icon-arrow-down el-icon--right"></i>
											</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="releaseDialogVisible = true">Show release detail</el-dropdown-item>
                    <el-dropdown-item @click.native="editReleaseName()">Edit name</el-dropdown-item>
                    <el-dropdown-item>Add new release below</el-dropdown-item>
                    <el-dropdown-item>Delete release</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>

          </grid-item>
          <el-dialog title="Release" :visible.sync="releaseDialogVisible">
            <el-form :model="release">
              <el-form-item label="name" :label-width="formLabelWidth">
                <el-input v-model="release.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="description" :label-width="formLabelWidth">
                <el-select v-model="release.desc" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="releaseDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="releaseDialogVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <el-dialog title="Show Map" :visible.sync="showMapDialogVisible">
            <el-form :model="map">
              <el-form-item label="name" :label-width="formLabelWidth">
                <el-input v-model="map.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="description" :label-width="formLabelWidth">
                <el-input v-model="map.desc" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="showMapDialogVisible = false">取消</el-button>
              <el-button type="primary" @click="showMapDialogVisible = false">确定</el-button>
            </div>
          </el-dialog>
        </grid-layout>
      </div>
    
      <span>1 </span>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <span>2</span>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <span>3 </span>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <span>4 </span>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <span>5</span>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <span>6 </span>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <span>1 </span>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <span>1 </span>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <span>2 </span>
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
import MapClass from './showmap.js'

export default MapClass

// }
</script>
<style lang="less">
  @import url("./showmap.less");
</style>
