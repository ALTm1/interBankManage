<template>
  <div class="role-wrap">
    <!-- 角色查询 -->
    <div class="role-query">
      <li>角色查询</li>
    </div>
    <div>
      <ui-table :data="tableData">
        <ui-table-column prop="date" label="日期" width="180"></ui-table-column>
        <ui-table-column prop="name" label="姓名" width="180"></ui-table-column>
        <ui-table-column prop="address" label="地址"></ui-table-column>
      </ui-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "rolemanage"
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