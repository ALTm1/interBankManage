<template>
  <div class="role-wrap">
    <!-- 角色查询 -->
     <!-- 面包屑 -->
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置: 报表管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>分组信息维护</ui-breadcrumb-item>
      </ui-breadcrumb>
 
    <div>
        <div class="table-title">
        <li class="title-left">分组信息维护</li>
        <li class="title-right"></li>
      </div>
        <div class="role-table">
      <ui-table :data="tableData">
        <ui-table-column prop="leader" label="组长" width="120"></ui-table-column>
        <ui-table-column prop="member1" label="组员1" width="120"></ui-table-column>
        <ui-table-column prop="member2" label="组员2" width="180"></ui-table-column>
        <ui-table-column prop="member3" label="组员3" width="180"></ui-table-column>
        <ui-table-column prop="member4" label="组员4" width="180"></ui-table-column>
        <ui-table-column prop="member5" label="组员5" width="180"></ui-table-column>
        <ui-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <ui-button @click="toDetail(scope.row)" type="text" size="small">详情</ui-button>
            <ui-button @click="handleClick(scope.row)" type="text" size="small">修改</ui-button>
            <ui-button type="text" size="small">删除</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
      <div class="role-btn">
        <button @click="add">新增</button>
      </div>
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
          leader:"张三三",
          member1:"李依依",
          member2:"李依依",
          member3: "李依依",
          member4: "李依依",
          member5: "李依依"
        },
        {    
          leader:"李思思",
          member1:"王散散",
          member2:"张柳柳",
          member3: "李依依",
          member4: "李依依",
          member5: "李依依"
        },
        {
          leader:"张柳柳",
          member1:"王散散",
          member2:"张柳柳",
          member3: "美人鱼",
          member4: "李依依",
          member5: "李依依"
        },
      ]
    };
  },
  methods:{
       toDetail(row) {
        this.$router.push('roledetail')
      },
      add(){
        this.$router.push('roleadd')
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
    width: 90%;
}

.role-table{
  background-color: #fff;
}
.role-btn{
  padding: 80px 0 295px 0;
  text-align: center;
}
.role-btn button{
  width:129px;
height:39px;
line-height: 39px;
cursor: pointer;
border: none;
font-size:14px;
font-weight:400;
color:rgba(255,255,255,1);
outline: none;
background:rgba(155,112,65,1);
border-radius:3px;
}
</style>