webpackJsonp([1],{"/qY+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),o=a.n(i),s=a("mtWM"),n=a.n(s),l=a("7+uW"),r=a("mw3O"),c=a.n(r),u=a("SFAN"),d=a.n(u),m=d.a.GridLayout,p=d.a.GridItem;l.default.prototype.$axios=n.a;var f={components:{GridLayout:m,GridItem:p},data:function(){return{userName:"zhangsan",newMapDesc:"",newMapName:"",formLabelWidth:"80px",newMapDialogVisible:!1,modelOfMap:{x:0,y:0,w:1.5,h:3,i:"0",mapName:"123",mapDes:""},layout:[{x:0,y:0,w:1.5,h:3,i:"0",mapName:"testMap",mapDes:""},{x:1.5,y:0,w:1.5,h:3,i:"1",mapName:"1",mapDes:""}]}},mounted:function(){this.showMapList()},methods:{showMapList:function(){var t=this,e=this.userName;this.$axios.post("/getMapList",c.a.stringify({userName:e})).then(function(e){console.log(e.data);for(var a=0;a<e.data.length;a++)t.modelOfMap.x=1.5*a,t.modelOfMap.y=t.modelOfMap.h*(a%10),t.modelOfMap.mapDes=e.data[a].mapDescrpt,t.modelOfMap.mapName=e.data[a].mapName,t.modelOfMap.i=e.data[a].mapSetupDate,t.layout.push(t.modelOfMap)}).catch(function(t){})},clickMap:function(t){var e=this.layout[t].mapName;console.log(e),this.$router.push({name:"showmap",params:{currentMapName:e}})},addMap:function(t,e,a){if(!0===a){this.newMapDialogVisible=!1;var i=JSON.parse(o()(this.modelOfMap));i.i=Number(new Date),i.mapName=t,i.mapDes=e,this.layout.push(i),this.$message("Map add successfully"),this.newMapDesc="",this.newMapName=""}else this.$message("Map add failed")},newMap:function(t,e){var a=this;this.$axios.post("/addNewMap",c.a.stringify({newMapName:t,newMapDesc:e})).then(function(i){console.log(i.data),"ok"===i.data?a.addMap(t,e,!0):a.addMap(t,e,!1)}).catch(function(t){console.log(t)})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dash"},[a("el-button",{attrs:{plain:!0,type:"info"},nativeOn:{click:function(e){t.newMapDialogVisible=!0}}},[a("i",{staticClass:"el-icon-plus el-icon--left"}),t._v(" New Map\n  ")]),t._v(" "),a("div",{staticClass:"component"},[a("grid-layout",{attrs:{layout:t.layout,"col-num":10,"row-height":30,autoSize:!1,"is-draggable":!1,"is-resizable":!1,useCssTransforms:!0,"vertical-compact":!1,margin:[10,10],"use-css-transforms":!0}},[t._l(t.layout,function(e,i){return a("grid-item",{key:e.i,staticClass:"griditem",attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i,"is-resizable":!1}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(e.mapName))]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},nativeOn:{click:function(e){t.clickMap(i)}}},[a("i",{staticClass:"el-icon-view"})]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[a("i",{staticClass:"el-icon-edit"})])],1),t._v(" "),a("div",{staticClass:"text item"},[t._v("\n          "+t._s(e.mapDes)+"\n      ")])])],1)}),t._v(" "),a("el-dialog",{attrs:{title:"New Map",visible:t.newMapDialogVisible},on:{"update:visible":function(e){t.newMapDialogVisible=e}}},[a("el-form",[a("el-form-item",{attrs:{label:"name","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.newMapName,callback:function(e){t.newMapName=e},expression:"newMapName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"description","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.newMapDesc,callback:function(e){t.newMapDesc=e},expression:"newMapDesc"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.newMapDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.newMap(t.newMapName,t.newMapDesc)}}},[t._v("确 定")])],1)],1)],2)],1)],1)},staticRenderFns:[]};var v=a("VU/8")(f,h,!1,function(t){a("Kyj9")},null,null);e.default=v.exports},"2eoi":function(t,e,a){var i={"./maplist.vue":"/qY+","./showmap.vue":"qeYU"};function o(t){return a(s(t))}function s(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(i)},o.resolve=s,t.exports=o,o.id="2eoi"},DZpL:function(t,e){},Kyj9:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),o=a("mtWM"),s=a.n(o),n=a("/ocq"),l=a("qeYU"),r=a("/qY+");i.default.use(n.a);var c=[{path:"/components/showmap",name:"showmap",component:l.default},{path:"/components/maplist",name:"maplist",component:r.default}],u=new n.a({routes:c}),d=a("NYxO"),m=a("Oiud"),p={actions:a.n(m).a,mutations:{switch_component_congif:function(t,e){t.dashcomponentstatus.config=e}},getters:{},state:{dashcomponentstatus:{config:"edit"}}};i.default.use(d.a);var f=new d.a.Store({modules:{dashBoardCall:p}}),h=a("SFAN"),v=a.n(h),y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var g=a("VU/8")({name:"app",components:{},data:function(){return{}},methods:{init:function(){}},mounted:function(){this.init()},watch:{$route:function(t,e){}}},y,!1,function(t){a("DZpL")},null,null).exports,b=a("zL8q"),w=a.n(b),_=(a("tvR6"),a("28UY")),x=a("7QTg"),k=a.n(x);s.a.defaults.baseURL="http://localhost:8000/api",i.default.prototype.$axios=s.a,i.default.use(w.a),i.default.use(v.a),i.default.use(w.a),i.default.use(k.a),i.default.use(_.a),i.default.config.productionTip=!0,i.default.config.devtools=!0,new i.default({el:"#app",router:u,store:f,template:"<App/>",render:function(t){return t(g)}})},Oiud:function(t,e){},lK4u:function(t,e){},qeYU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("pFYg"),o=a.n(i),s=a("mvHQ"),n=a.n(s),l=a("mtWM"),r=a.n(l),c=a("7+uW"),u=a("mw3O"),d=a.n(u),m=a("SFAN"),p=a.n(m),f=p.a.GridLayout,h=p.a.GridItem;c.default.prototype.$axios=r.a;var v={data:function(){return{newMapName:"",currentItem:"",cardWidth:1,cardHight:3,gridColNum:10,sendLayout:[],card1:{x:0,y:0,w:1,h:3,i:0,flag:0,type:"card",colorPick:"#ffffff",title:"",des:"",comments:[]},layout1:[{x:0,y:0,w:1,h:3,i:0,flag:0,type:"card",colorPick:"#ffffff",title:"",des:"",comments:[]}],historyLayout1:[],initLayout:[],release:{name:"",desc:""},beforemove:{},aftermoved:{},formatLayoutVisible:!1,addDashVisiable:!1,releaseDialogVisible:!1,showMapDialogVisible:!1,curBox:null,watch_num:0,map:{name:this.$route.params.currentMapName,desc:""},newMapDesc:"",editDialogFormVisible:!1,editForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"80px",colorPick:"#ffffff",comments:[]}},mounted:function(){this.getBackendMap()},components:{GridLayout:f,GridItem:h},watch:{},methods:{moveEvent:function(t,e,a){this.curBox=t},movedEvent:function(t,e,a){this.judgeItemPosition(e,a)&&(this.toChangePosition(t),this.watch_num=0);for(var i=0;i<this.layout1.length;i++)this.layout1[i].i===t&&(this.layout1[i].flag=1)},layoutUpdatedEvent:function(t){console.log("Updated layout: ",t)},resizeEvent:function(t,e,a,i,o){console.log("RESIZE i="+t+", H="+e+", W="+a+", H(px)="+i+", W(px)="+o)},getBackendMap:function(){var t=this,e=this.map.name;this.$axios.post("/getBackendMap",d.a.stringify({mapName:e})).then(function(e){console.log(e.data),t.layout1[0].title=e.data[0].storyTitle;for(var a=0;a<e.data.length;a++)t.layout1[a]=JSON.parse(n()(t.card1)),t.layout1[a].x=e.data[a].coodX,t.layout1[a].y=e.data[a].coodY,t.layout1[a].colorPick=e.data[a].colorPick,t.layout1[a].title=e.data[a].storyTitle,t.layout1[a].des=e.data[a].storyDescription,t.layout1[a].i=e.data[a].storyId;console.log(t.layout1)}).catch(function(t){console.log(t)})},showMap:function(){this.showMapDialogVisible=!0},saveMap:function(){var t=n()(this.layout1);console.log(t),console.log(void 0===t?"undefined":o()(t)),this.$axios.post("/saveMap",d.a.stringify({tempLay:t})).then(function(t){t.data}).catch(function(t){}),this.$message("save")},deleteMap:function(){var t=this;this.$confirm("此操作将永久删除该MAP, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=t.map.name;t.$axios.post("/deleteMap",d.a.stringify({mapName:e})).then(function(t){console.log(t.data),t.data&&(this.map.name="",this.map.desc="",this.layout1=JSON.parse(n()(this.initLayout)))}).catch(function(t){this.$message("delete failed ")})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},deleteItem:function(t){this.layout1.length>1?this.layout1.splice(t,1):this.$message("Cannot delete When there is only one card")},showEditDialogFormVisible:function(t){this.editDialogFormVisible=!0,this.currentItem=t},judgeItemPosition:function(t,e){console.log(this.historyLayout1);for(var a=this.historyLayout1,i=0;i<a.length;i++)if(t===a[i].x&&e===a[i].y)return"false";return e%this.cardHight==0?"false":"true"},watchitem:function(t){0===this.watch_num&&(this.historyLayout1=JSON.parse(n()(this.layout1)),this.watch_num++,console.log(this.historyLayout1));var e=JSON.parse(n()(this.historyLayout1));if(this.curBox!==t.i)for(var a=0;a<e.length;a++)e[a].i===t.i&&(t.x=e[a].x,t.y=e[a].y);return t},addComments:function(){this.comments.push({name:this.editForm.name}),console.log(this.editForm.name),this.editForm.name="",this.layout1[this.currentItem].flag=1},editColorPick1:function(){this.layout1[this.currentItem].colorPick="#FE8A8B",this.layout1[this.currentItem].flag=1},editColorPick2:function(){this.layout1[this.currentItem].colorPick="#FAE75C",this.layout1[this.currentItem].flag=1},editColorPick3:function(){this.layout1[this.currentItem].colorPick="#AED9E9",this.layout1[this.currentItem].flag=1},toChangePosition:function(t){for(var e=this.layout1,a=this.layout1,i=0;i<e.length;i++)if(e[i].i===t)for(var o=e[i],s=0;s<a.length;s++)if(a[s].i===t){for(var n=a[s],l=n.x,r=n.y,c=o.x,u=o.y,d=0;d<a.length;d++)if(a[d].i!==t){var m=a[d];u===r&&m.y===r&&(m.x>=o.x&&m.x<=l||m.x<=o.x&&m.x>=l)?o.x>l?m.x=m.x-1:m.x=m.x+1:1===r&&0===u&&(m.y===r&&m.x<l||m.y===u&&m.x>=c)?(m.x=m.x+1,m.x>4&&(m.x=0,m.y=m.y+1)):0===r&&1===u&&(m.y===r&&m.x>l||m.y===u&&m.x<=c)&&(m.x=m.x-1,m.x<0&&(m.x=4,m.y=m.y-1))}n.x=o.x,n.y=o.y}},rowAddItem:function(t){if(console.log(this.layout1),0===this.layout1[t].y){console.log("第一行");for(var e=0;e<this.layout1.length;e++)this.layout1[e].y===this.layout1[t].y&&this.layout1[e].x>this.layout1[t].x&&(this.layout1[e].x+=1);var a=this.layout1[t].x+1,i=this.layout1[t].y,o=Number(new Date);(s=JSON.parse(n()(this.layout1[t]))).x=a,s.y=i,s.i=o,s.flag=0,this.layout1.push(s),this.historyLayout1.push(s)}if(3===this.layout1[t].y){for(console.log("第二行"),e=0;e<this.layout1.length;e++)this.layout1[e].y<=this.layout1[t].y&&this.layout1[e].x>this.layout1[t].x&&(this.layout1[e].x+=1,this.layout1[e].flag=!0);var s;a=this.layout1[t].x+1,i=this.layout1[t].y,o=Number(new Date),(s=JSON.parse(n()(this.layout1[t]))).x=a,s.y=i,s.i=o,s.flag=0,this.layout1.push(s),this.historyLayout1.push(s)}},colAddItem:function(t){console.log(this.layout1);for(var e=0;e<this.layout1.length;e++)this.layout1[e].x===this.layout1[t].x&&this.layout1[e].y>this.layout1[t].y&&(this.layout1[e].y+=3);var a=this.layout1[t].x,i=this.layout1[t].y+3,o=Number(new Date),s=JSON.parse(n()(this.layout1[t]));s.x=a,s.y=i,s.i=o,s.flag=0,this.layout1.push(s),this.historyLayout1.push(s)},handleCommand:function(t){this.$message(t)},getTemplate:function(t){return a("2eoi")("./"+t+".vue")}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"dash"},[a("div",[a("el-row",[a("el-col",{staticClass:"dashtitle",attrs:{span:10}},[a("h2",[t._v(t._s(t.map.name))])]),t._v(" "),a("el-col",{staticStyle:{},attrs:{span:15}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-button",{attrs:{plain:!0,type:"info"},nativeOn:{click:function(e){return t.showMap(e)}}},[a("i",{staticClass:"el-icon-edit el-icon--left"}),t._v(" Edit Map\n              ")]),t._v(" "),a("el-button",{attrs:{plain:!0,type:"info"},nativeOn:{click:function(e){return t.deleteMap(e)}}},[a("i",{staticClass:"el-icon-delete el-icon--left"}),t._v("Delete Map\n              ")]),t._v(" "),a("el-button",{attrs:{plain:!0,type:"info"},nativeOn:{click:function(e){return t.saveMap(e)}}},[a("i",{staticClass:"el-icon-document el-icon--left"}),t._v("Save\n              ")])],1)])],1)],1),t._v(" "),a("div",{staticClass:"component"},[a("grid-layout",{attrs:{layout:t.layout1,"col-num":t.gridColNum,"row-height":30,autoSize:!1,"is-draggable":!0,"is-resizable":!1,useCssTransforms:!0,"vertical-compact":!1,margin:[10,10],"use-css-transforms":!0},on:{"layout-updated":t.layoutUpdatedEvent}},[t._l(t.layout1,function(e,i){return a("grid-item",{key:e.i,staticClass:"griditem",style:{background:e.colorPick},attrs:{"v-bind:item":t.watchitem(e),x:e.x,y:e.y,w:e.w,h:e.h,i:e.i,"is-resizable":!1},on:{move:t.moveEvent,moved:t.movedEvent}},[a("el-row",{staticClass:"drag-title",style:{background:e.colorPick}},[a("el-col",{attrs:{span:14}},[t._v(t._s(e.title))]),t._v(" "),a("el-col",{staticClass:"ico",attrs:{span:6}},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(e){t.deleteItem(i)}}},[t._v("delete card")]),t._v(" "),a("el-dropdown-item",{nativeOn:{click:function(e){t.rowAddItem(i)}}},[t._v("add row card")]),t._v(" "),a("el-dropdown-item",{nativeOn:{click:function(e){t.colAddItem(i)}}},[t._v("add column card")])],1)],1)],1)],1),t._v(" "),a("el-row",{staticClass:"drag-content"},[a("el-col",{attrs:{span:21}},[t._v(t._s(e.desc)+"\n                "),a(e.component,{tag:"component"})],1)],1),t._v(" "),a("el-row",{staticClass:"editButton"},[a("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){t.showEditDialogFormVisible(i)}}},[a("i",{staticClass:"el-icon-edit"})])],1)],1)}),t._v(" "),a("span",{staticClass:"editdialog"},[a("el-dialog",{attrs:{title:"card",visible:t.editDialogFormVisible},on:{"update:visible":function(e){t.editDialogFormVisible=e}}},[a("div",{staticClass:"colorPick1"},[a("el-button",{style:{background:"#FE8A8B"},attrs:{size:"small",circle:""},nativeOn:{click:function(e){t.editColorPick1(t.index)}}})],1),t._v(" "),a("div",{staticClass:"colorPick2"},[a("el-button",{style:{background:"#FAE75C"},attrs:{size:"small",circle:""},nativeOn:{click:function(e){t.editColorPick2(t.index)}}})],1),t._v(" "),a("div",{staticClass:"colorPick3"},[a("el-button",{style:{background:"#AED9E9"},attrs:{size:"small",circle:""},nativeOn:{click:function(e){t.editColorPick3(t.index)}}})],1),t._v(" "),a("div",{staticClass:"commentslist"},[a("ul",t._l(t.comments,function(e){return a("li",{key:e.name},[t._v("\n                        "+t._s(e.name)+"\n                      ")])}),0)]),t._v(" "),a("el-form",{attrs:{model:t.editForm,onsubmit:"return false;"}},[a("el-form-item",{attrs:{label:"Comments","label-width":t.formLabelWidth,size:"medium"}},[a("el-input",{attrs:{"auto-complete":"off"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addComments(e):null}},model:{value:t.editForm.name,callback:function(e){t.$set(t.editForm,"name",e)},expression:"editForm.name"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editDialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.editDialogFormVisible=!1}}},[t._v("确 定")])],1)],1)],1),t._v(" "),a("grid-item",{staticClass:"releaseGrid",attrs:{x:0,y:6,w:200,h:1,i:1,"is-resizable":!1,"is-draggable":!1}},[a("el-row",{staticClass:"releaseLine",style:{border:t.none}},[a("el-col",{attrs:{span:12}},[a("el-dropdown",{attrs:{trigger:"click"}},[a("span",{staticClass:"release-dropdown-link"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\trelease1"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(e){t.releaseDialogVisible=!0}}},[t._v("Show release detail")]),t._v(" "),a("el-dropdown-item",{nativeOn:{click:function(e){t.editReleaseName()}}},[t._v("Edit name")]),t._v(" "),a("el-dropdown-item",[t._v("Add new release below")]),t._v(" "),a("el-dropdown-item",[t._v("Delete release")])],1)],1)],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"Release",visible:t.releaseDialogVisible},on:{"update:visible":function(e){t.releaseDialogVisible=e}}},[a("el-form",{attrs:{model:t.release}},[a("el-form-item",{attrs:{label:"name","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.release.name,callback:function(e){t.$set(t.release,"name",e)},expression:"release.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"description","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.release.desc,callback:function(e){t.$set(t.release,"desc",e)},expression:"release.desc"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.releaseDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.releaseDialogVisible=!1}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"Show Map",visible:t.showMapDialogVisible},on:{"update:visible":function(e){t.showMapDialogVisible=e}}},[a("el-form",{attrs:{model:t.map}},[a("el-form-item",{attrs:{label:"name","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.map.name,callback:function(e){t.$set(t.map,"name",e)},expression:"map.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"description","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.map.desc,callback:function(e){t.$set(t.map,"desc",e)},expression:"map.desc"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.showMapDialogVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showMapDialogVisible=!1}}},[t._v("确定")])],1)],1)],2)],1)])])},staticRenderFns:[]};var g=a("VU/8")(v,y,!1,function(t){a("lK4u")},null,null);e.default=g.exports},tvR6:function(t,e){},zicj:function(t,e,a){"use strict";var i=a("vx8o"),o=a.n(i),s={name:"KanbanBoard",props:{stages:{},blocks:{}},data:function(){return{}},computed:{localBlocks:function(){return this.blocks}},methods:{getBlocks:function(t){return this.localBlocks.filter(function(e){return e.status===t})}},mounted:function(){var t=this;o()(this.$refs.list).on("drag",function(t){t.classList.add("is-moving")}).on("drop",function(e,a){var i=0;for(i=0;i<a.children.length&&!a.children[i].classList.contains("is-moving");i+=1);t.$emit("update-block",e.dataset.blockId,a.dataset.status,i)}).on("dragend",function(t){t.classList.remove("is-moving"),window.setTimeout(function(){t.classList.add("is-moved"),window.setTimeout(function(){t.classList.remove("is-moved")},600)},100)})}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"drag-container"},[a("ul",{staticClass:"drag-list"},t._l(t.stages,function(e){return a("li",{key:e,staticClass:"drag-column",class:(i={},i["drag-column-"+e]=!0,i)},[a("span",{staticClass:"drag-column-header"},[t._t(e,[a("h2",[t._v(t._s(e))])])],2),t._v(" "),a("div",{staticClass:"drag-options"}),t._v(" "),a("ul",{ref:"list",refInFor:!0,staticClass:"drag-inner-list",attrs:{"data-status":e}},t._l(t.getBlocks(e),function(e){return a("li",{key:e.id,staticClass:"drag-item",attrs:{"data-block-id":e.id}},[t._t(e.id,[a("strong",[t._v(t._s(e.status))]),t._v(" "),a("div",[t._v(t._s(e.id))])])],2)}),0)]);var i}),0)])},staticRenderFns:[]},l=a("VU/8")(s,n,!1,null,null,null);e.a=l.exports}},["NHnr"]);
//# sourceMappingURL=app.94ecdb70c920d13c5729.js.map