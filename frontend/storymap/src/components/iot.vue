
<template>
  <div>
     
    <!-- <div class="outer_label">

    </div> -->

    <!-- <div id='myChart' style='width：600px;height:600px'></div> -->
     <el-col :span="15"  style="right">
            <div class="grid-content bg-purple">
              <el-button :plain="true" type="info" @click.native="setIot1"><i
                class="el-icon-edit el-icon--left"></i> IOT1
              </el-button>
              <el-button :plain="true" type="info" @click.native="setIot2"><i
                class="el-icon-delete el-icon--left"></i>IOT2
              </el-button>
              <el-button :plain="true" type="info" @click.native="setIot2"><i
                class="el-icon-document el-icon--left"></i>IOT3
              </el-button>
              
            </div>
          </el-col>
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="设备名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Info"
        label="传递信号">
      </el-table-column>
    </el-table>
  </div>
</template>
 
 
 
<script>
//  import { userLogin } from '../../api/api';
import echarts from 'echarts'
 import qs from 'qs'
  export default {
    data() {
      return {
        tableData: [{
            date: '',
            name: '',
            Info: ''
          }],
          DevInf:''
      }
    },
    created () {
      
    },
    computed:{
      
    },
    methods: {
      setIot1(){
         this.DevInf = 'iot1'
         this.getDev()
      },
      setIot2(){
         this.DevInf = 'iot2'

         this.getDev()
      },
      setIot3(){
         this.DevInf = 'iot3'
         this.getDev()
      },

     
      getDev() {
         console.log('设备')
         var that = this
         var iotName = that.DevInf
         this.$axios.post('/getIotInf', qs.stringify({iotName}
      )).then(function (response) {
          for(var i = 0;i <response.data.length;i++)
          {
            var modelOfMap = {
                date: '2016-05-02',
                name: '王小虎',
                Info: '上海市普陀区金沙江路 1518 弄'
            }
            modelOfMap.date = response.data[i].date
            modelOfMap.name = response.data[i].name
            modelOfMap.Info = response.data[i].Info

            that.tableData.push(Info)

          }

        // console.log(response.data)
        // console.log(typeof(response.data))
        
        if(response.data){
          //  console.log("")
            that.$router.push({ name: 'maplist', params: { currentUser: userName}})
        }else{
          that.$message('用户名或密码错误')
          
        }
            
      // eslint-disable-next-line handle-callback-err
      }).catch(function (error) {
        that.$message('登录失败')
      })
 
      },
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

    }
  }
</script>
<style>
  .login_form {
    padding-top: 10%;
    padding-left: 30%;
    padding-right: 30%;
  }
  .qxs-ic_user {
    background: url("../assets/login/ic_user.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background: url("../assets/login/ic_password.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }
  .login_logo {
    height: 100%;
  }
  .login_btn {
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
    filter: brightness(1.4);
  }

.slogon{
  font-size:50px;
  color:#fff;
}
</style>