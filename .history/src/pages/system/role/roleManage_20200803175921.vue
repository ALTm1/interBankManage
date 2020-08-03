<template>
  <div class="role-wrap">
    <!-- 角色查询 -->
    <div class="role-query">
      <li>角色查询</li>
    </div>
    <div class="role-table">
      <ui-table :data="tableData">
        <ui-table-column prop="number" label="序号" width="120"></ui-table-column>
        <ui-table-column prop="id" label="角色ID" width="120"></ui-table-column>
        <ui-table-column prop="name" label="角色名称" width="180"></ui-table-column>
        <ui-table-column prop="state" label="角色状态" width="180"></ui-table-column>
        <ui-table-column prop="ps" label="备注" width="180"></ui-table-column>
        <ui-table-column prop="date" label="修改时间" width="180"></ui-table-column>
        <ui-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <ui-button @click="handleClick(scope.row)" type="text" size="small" >详情</ui-button>
            <ui-button @click="handleClick(scope.row)" type="text" size="small" v-show="scope.row.name=='交易员'">修改</ui-button>
            <ui-button type="text" size="small" v-show="scope.row.name=='交易员'">注销</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
      <div class="role-btn">
        <button>新增</button>
      </div>
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
          number:"2",
          id:"002",
          state:"已生效",
          date: "2020-01-31  17:00",
          name: "审批员",
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
  padding-left: 11px;
}
.role-table{
    width: 100%;
}

.role-table{
  background-color: #fff;
}
.role-btn{
  margin: 80px 0 295px 0;
  text-align: center;
}
.role-btn button{
  
}
</style>