<template>
  <div class="operate-wrap">
    <!-- 操作员管理 -->
    <div class="operate-content">
      <!-- 查询表格 -->
      <div class="operate-table">
        <div class="table-title">
          <li class="title-left">操作员查询</li>
          <li class="title-right">
            <!-- <img src="~@/assets/image/back.png" alt=""> -->
          </li>
        </div>
        <div class="table-wrap">
          <ul>
            <li>操作员ID</li>
            <input type="number" name="id" id placeholder="请输入操作员ID" v-model="id" />
          </ul>
          <ul>
            <li>操作员姓名</li>
            <input type="text" name="name" id placeholder="请输入操作员姓名" v-model="name" />
          </ul>
        </div>
        <div class="table-btn">
          <button @click="refresh">重置</button>
          <button @click="query">查询</button>
        </div>
      </div>
      <!-- 查询结果 -->
      <div class="operate-manage">
        <div class="table-title">
          <li class="title-left">查询结果</li>
        </div>
        <!-- 结果表格 -->
        <ui-table :data="tableData" cell-class-name="number">
            <ui-table-column
      label="机构号"
      width="100">
      <template slot-scope="scope">
          <li style="color:#9B7041;">{{ scope.row.number }}</li>
       
      </template>
    </ui-table-column>
          <ui-table-column prop="name" label="操作员姓名" width="180"></ui-table-column>
          <ui-table-column prop="department" label="所属部门" width="180"></ui-table-column>
          <ui-table-column prop="state" label="状态" width="150"></ui-table-column>
          <ui-table-column prop="role" label="操作角色" width="150"></ui-table-column>
          <ui-table-column prop="time" label="上次登录时间" width="180"></ui-table-column>
          <ui-table-column fixed="right" label="更多" width="180">
            <template slot-scope="scope">
              <ui-button @click="toDetail(scope.row)" type="text" size="small">详情</ui-button>
              <ui-button type="text" size="small" @click="modify(scope.row)">修改</ui-button>
              <ui-button type="text" size="small" @click="cancel(scope.row)">注销</ui-button>
            </template>
          </ui-table-column>
        </ui-table>
        <div class="operate-add">
          <button @click="add">新增</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "operatemanage",
  data() {
    return {
        id:'',
        name:'',
      tableData: [
        {
          number: "100011",
          name: "王小虎",
          department: "金融同业部",
          state: "正常",
          role: "交易员",
          time: "2020-01-31  17:00"
        },
        {
          number: "100011",
          name: "王小虎",
          department: "金融同业部",
          state: "正常",
          role: "交易员",
          time: "2020-01-31  17:00"
        },
        {
          number: "100011",
          name: "王小虎",
          department: "金融同业部",
          state: "正常",
          role: "交易员",
          time: "2020-01-31  17:00"
        }
      ],
      showQuery:false
    };
  },
  methods: {
    toDetail(row) {
        this.$router.push('operatedetail')
    },
    modify(row){
      console.log(row)
        this.$router.push({
          name:'operatemodify',
          params:row
        }
          )
    },
    cancel(row){
        this.$router.push('operatecancel')
    },
    refresh(){
        // 点击重置
        this.id='';
        this.name='';
    },
    query(){
        // 点击查询
        // this.showQuery=true;
    },
    add(){
        // 新增，跳转到新增录入页
        this.$router.push('operateAdd')
    },
    back(){

    }
  }
};
</script>
<style>
.ui-table .number{
font-size:14px;
font-family:SourceHanSansCN;
font-weight:400;
color:rgba(51,51,51,1);
}
</style>
<style scoped>
button {
  border: none;
  cursor: pointer;
  outline: none;
}

.title-left {
  float: left;
  padding-left: 9px;
}
.title-right {
  float: right;
  /* cursor: pointer; */
}
/* .title-right img{
  width: 14px;
  margin-right: 12px;
} */
.table-wrap {
  padding: 61px 0 34px 0;
  text-align: center;
  width: 600px;
  margin: 0 auto;
}
.table-wrap ul:nth-child(1) li {
  margin-right: 82px;
}
.table-wrap ul:nth-child(2) li {
  margin-right: 68px;
}
.table-wrap li {
  font-size: 14px;
  line-height: 33px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.table-wrap input {
  width: 380px;
  height: 33px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(231, 232, 239, 1);
  border-radius: 3px 3px 3px 3px;
  font-size: 12px;
  font-weight: bold;
  color: rgba(153, 153, 153, 1);
  outline: none;
  padding-left: 11px;
}

.table-btn button:nth-child(1) {
  width: 129px;
  height: 39px;
  line-height: 39px;
  background: rgba(206, 40, 72, 1);
  border-radius: 3px 3px 3px 3px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-right: 123px;
  margin-left: 445px;
}
.table-btn button:nth-child(2) {
  width: 129px;
  height: 39px;
  line-height: 39px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  background: rgba(155, 112, 65, 1);
  border-radius: 3px;
}
.table-btn {
  padding-bottom: 36px;
}
.table-wrap ul {
  display: -webkit-box;
}
.operate-table {
  background-color: #fff;
}
.operate-content {
  /* width: 95%; */
  width: 1137px;
  /* margin-left: 11px; */
  margin-top: 21px;
}
.operate-manage {
  margin-top: 22px;
}
.operate-add {
  padding: 63px 0 30px 0;
  text-align: center;
  background-color: #fff;
}
.operate-add button {
  width: 129px;
  height: 39px;
  line-height: 39px;
  background: rgba(155, 112, 65, 1);
  border-radius: 3px 3px 3px 3px;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>