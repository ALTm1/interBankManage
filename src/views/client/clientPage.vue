<template>
  <div class="operate-wrap">
    <!-- 操作员管理 -->
    <div class="operate-content">
      <!-- 查询表格 -->
      <div class="operate-table">
        <div class="table-title">
          <li class="title-left">客户端版本管理</li>
          <li class="title-right"></li>
        </div>
        <div class="table-wrap">
          <ul>
            <li>版本代码</li>
            <input type="text" name="code" id placeholder="请输入版本代码" v-model="code" />
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
          <ui-table-column label="序号" width="100">
            <template slot-scope="scope">
              <li style="color:#9B7041;">{{ scope.row.number }}</li>
            </template>
          </ui-table-column>
          
          <ui-table-column prop="code" label="版本代码" width="180"></ui-table-column>
          <ui-table-column prop="name" label="版本名称" width="180"></ui-table-column>
          <ui-table-column prop="refresh" label="强制更新" width="150"></ui-table-column>
          <ui-table-column prop="link" label="版本链接" width="150"></ui-table-column>
          <ui-table-column prop="descripe" label="版本描述" width="180"></ui-table-column>
          <ui-table-column fixed="right" label="更多" width="180">
            <template slot-scope="scope">
              <!-- <ui-button @click="toDetail(scope.row)" type="text" size="small">详情</ui-button> -->
              <ui-button type="text" size="small" @click="modify(scope.row)">修改</ui-button>
              <ui-button type="text" size="small" @click="cancel(scope.row)">删除</ui-button>
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
  name: "clientPage",
  data() {
    return {
      code: "",
      tableData: [
        {
          number: "1",
          code: "CF97806853",
          name: "V1.0",
          refresh: "是",
          link: "http://uwiyfei.cn",
          descripe: "XXXXXXX"
        },
        {
          number: "2",
          code: "CF97806853",
          name: "V1.0",
          refresh: "否",
          link: "http://uwiyfei.cn",
          descripe: "XXXXXXX"
        },
        {
          number: "3",
          code: "CF97806853",
          name: "V1.0",
          refresh: "否",
          link: "http://uwiyfei.cn",
          descripe: "XXXXXXX"
        }
      ],
      showQuery: false
    };
  },
  methods: {
    modify(row) {
      this.$router.push("clientmodify");
    },
    cancel(row) {
      this.$router.push("clientdelete");
    },
    refresh() {
      // 点击重置
      this.id = "";
      this.name = "";
    },
    query() {
      // 点击查询
      this.showQuery = true;
    },
    add() {
      // 新增，跳转到新增录入页
      this.$router.push("clientadd");
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
.table-title {
  display: inline-block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  background: rgba(245, 246, 248, 1);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px 4px 0px 0px;
}
</style>