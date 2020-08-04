<template>
  <div class="operate-wrap">
    <!-- 面包屑 -->
    <div class="operate-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置: 系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员管理</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <!-- 操作员管理 -->
    <div class="operate-content">
      <!-- 查询表格 -->
      <div class="operate-table">
        <div class="table-title">
          <li class="title-left">操作员查询</li>
          <li class="title-right"></li>
        </div>
        <div class="table-wrap">
          <ul>
            <li>流水号</li>
            <input type="text" name="number" id placeholder="请输入查询条件" v-model="number" />
          </ul>
          <ul>
            <li>起始日期</li>
            <ui-date-picker v-model="startdate" type="date" placeholder="请选择起始日期"></ui-date-picker>
          </ul>
          <ul>
            <li>终止日期</li>
            <ui-date-picker v-model="enddate" type="date" placeholder="请选择终止日期"></ui-date-picker>
          </ul>
        </div>
        <div class="table-btn">
          <button @click="refresh">重置</button>
          <button @click="query">查询</button>
        </div>
      </div>
      <!-- 查询结果 -->
      <div class="operate-manage" v-show="showQuery">
        <div class="table-title">
          <li class="title-left">查询结果</li>
        </div>
        <!-- 结果表格 -->
        <ui-table :data="tableData" cell-class-name="number">
          <ui-table-column label="流水号" width="100">
            <template slot-scope="scope">
              <li style="color:#9B7041;">{{ scope.row.number }}</li>
            </template>
          </ui-table-column>
          
          <ui-table-column prop="id" label="操作员ID" width="120"></ui-table-column>
          <ui-table-column prop="name" label="操作员姓名" width="120"></ui-table-column>
          <ui-table-column prop="department" label="从属机构" width="150"></ui-table-column>
          <ui-table-column prop="state" label="状态" width="150"></ui-table-column>
          <ui-table-column prop="role" label="操作角色" width="150"></ui-table-column>
          <ui-table-column prop="time" label="上次登录时间" width="180"></ui-table-column>
          <ui-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <ui-button @click="toDetail(scope.row)" type="text" size="small">详情</ui-button>
  
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
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      startdate: "",
      enddate: "",
      number: "",
      tableData: [
        {
            id: "00001",
          number: "100011",
          name: "王小虎",
          department: "金融同业部",
          state: "正常",
          role: "交易员",
          time: "2020-01-31  17:00"
        },
        {
            id: "00001",
          number: "100011",
          name: "王小虎",
          department: "金融同业部",
          state: "正常",
          role: "交易员",
          time: "2020-01-31  17:00"
        },
        {
            id: "00001",
          number: "100011",
          name: "王小虎",
          department: "金融同业部",
          state: "正常",
          role: "交易员",
          time: "2020-01-31  17:00"
        }
      ],
      showQuery: false
    };
  },
  methods: {
    toDetail(row) {
      this.$router.push("logdetail");
    },
    refresh() {
      // 点击重置
      this.number = "";
      this.startdate='';
      this.enddate=''
    },
    query() {
      // 点击查询
      if(this.startdate>enddate){
        alert("开始时间不得大于结束时间")
      }else{
        this.showQuery = true;
      }
      
    },
    add() {
      // 新增，跳转到新增录入页
      this.$router.push("logdetail");
    }
  }
};
</script>
<style>
.ui-table .number {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
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
}
.table-wrap {
  padding: 61px 0 34px 0;
  text-align: center;
  width: 600px;
  margin: 0 auto;
}

.table-wrap li {
  width: 90px;
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
  margin-left: 14px;
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