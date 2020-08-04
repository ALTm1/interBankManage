<template>
  <div class="add-wrap">
    <!-- 面包屑 -->
    <div class="operate-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置:系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>新增录入页</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <div class="table-title">
      <li class="title-left">操作员新增录入页</li>
      <li class="title-right"></li>
    </div>
    <div class="content-wrap">
      <div>
        <ul class="content-left">
          <li>角色ID</li>
          <input type="text" name id v-model="id" />
        </ul>
        <ul class="content-right">
          <li>角色名称</li>
          <input type="text" name id placeholder="请输入角色名称" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li style="margin-right:57px;">角色状态</li>
          <input type="text" name id v-model="state" />
        </ul>
        <ul class="content-right">
          <li>备注</li>
          <input type="text" name id placeholder="请输入备注"/>
        </ul>
      </div>
         <div class="role-function">
          <li>关联功能：</li>
          <div class="function-tree">
              <ui-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
          ></ui-tree>
          </div>
          
        </div>
      <!-- 按钮 -->
      <div class="add-btn">
          <button @click="add">确认</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "roleadd",
  data() {
    return {
        id:'0001',
        state:'有效',
        data: [
        {
          id: 1,
          label: "系统管理",
          children: [
            {
              id: 4,
              label: "操作员管理",
            },
            {
              id: 5,
              label: "角色管理",
            },
          ]
        },
        {
          id: 2,
          label: "系统参数",
          children: [
            {
              id: 5,
              label: "产品标签维护"
            },
            {
              id: 6,
              label: "部门维护"
            },
            {
              id: 3,
              label: "审批菜单维护"
            },
          ]
        },
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods:{
      add(){
          this.$router.push('addconfirm')
      }
  }
};
</script>
<style>
.ui-input__prefix,
.ui-input__suffix {
  top: 37px;
}
.ui-input__inner {
  float: right;
  width: 300px;
  height: 33px;
  border: none;
}
.ui-select .ui-input.is-focus .ui-input__inner,
.ui-select .ui-input__inner:focus {
  border: none;
}
input {
  outline: none;
}
.ui-breadcrumb__inner {
  font-size: 12px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
</style>
<style scoped>
.add-wrap {
  margin-left: 12px;
}

.title-left {
  float: left;
  padding-left: 9px;
}
.title-right {
  float: right;
}
.content-left {
  float: left;
}
.content-right {
  float: right;
}
.content-left li,
.content-right li {
  float: left;
  line-height: 33px;
  margin-right: 43px;
  text-align: right;
}
.content-wrap {
  padding: 40px 81px 81px 90px;
  background-color: #fff;
box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.1);
border-radius:4px 4px 0px 0px;
}
.content-wrap div {
  width: 100%;
  display: inline-block;
}
.content-wrap div input,
.content-wrap div div{
    text-align: center;
  float: right;
  width: 300px;
  height: 33px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(231, 232, 239, 1);
}
.add-btn{
    text-align: center;
   padding-bottom: 106px;
   padding-top: 71px;
}
.add-btn button{
    outline: none;
    border: none;
    cursor: pointer;
    width:129px;
height:39px;
font-size:14px;
font-weight:400;
color:rgba(255,255,255,1);
line-height: 39px;
background:rgba(152,36,61,1);
border-radius:3px 3px 3px 3px;
}
.role-function {
  width: 1067px;
  margin: 0 36px 0 34px;
  margin-top: 56px;
  margin-bottom: 29px;
  background: #f2f5f7;
}
.role-function li {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin: 29px 0 22px 53px;
}
.function-tree{
    margin-left: 53px;
}
</style>