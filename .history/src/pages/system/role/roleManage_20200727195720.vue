<template>
  <div class="role-wrap">
    <!-- 角色查询 -->
    <div class="role-query">
      <li>角色查询</li>
    </div>
    <div>
      <ui-table :data="tableData">
        <ui-table-column prop="number" label="序号" width="180"></ui-table-column>
        <ui-table-column prop="id" label="角色ID" width="180"></ui-table-column>
        <ui-table-column prop="name" label="角色名称" width="180"></ui-table-column>
        <ui-table-column prop="state" label="角色状态"></ui-table-column>
        <ui-table-column prop="ps" label="备注"></ui-table-column>
        <ui-table-column prop="date" label="修改时间"></ui-table-column>
        <ui-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
             <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small">注销</el-button>
          </template>
        </ui-table-column>
      </ui-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "rolemanage",
  data() {
    return {
      tableData: [
        {
          number:"1",
          id:"001",
          state:"已生效",
          date: "2020-01-31  17:00",
          name: "交易员",
          ps: "交易员"
        },
        {
          number:"1",
          id:"001",
          state:"已生效",
          date: "2020-01-31  17:00",
          name: "交易员",
          ps: "交易员"
        },
      ]
    };
  },
  methods:{
       handleClick(row) {
        console.log(row);
      }
  }
};
</script>
<style scoped>
.role-wrap {
  margin: 0 14px;
}
.role-query li {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  height: 30px;
  line-height: 30px;
  background: rgba(245, 246, 248, 1);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px 4px 0px 0px;
  padding-left: 10px;
}
</style>