<template>
    <div>
         <!-- 面包屑 -->
     <div class="operate-header">
          <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置: 系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>修改录入页</ui-breadcrumb-item>
      </ui-breadcrumb>
     </div>
    <div class="modify-content">
      <div>
        <ul class="content-left">
          <li>操作员ID</li>
          <input type="text" name id placeholder="建议使用工号" />
        </ul>
        <ul class="content-right">
          <li>操作员姓名</li>
          <input type="text" name id placeholder="请输入" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li style="margin-right:57px;">证件号</li>
          <input type="text" name id placeholder="请输入二代身份证" />
        </ul>
        <ul class="content-right">
          <li>工号</li>
          <input type="text" name id />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>联系电话</li>
          <input type="text" name id placeholder="请输入" />
        </ul>
        <ul class="content-right">
          <li>邮箱</li>
          <input type="text" name id placeholder="请输入" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>所属机构</li>
          <ui-select v-model="value" placeholder="请选择">
            <ui-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></ui-option>
          </ui-select>
        </ul>
        <ul class="content-right">
          <li>所属部门</li>
          <ui-select v-model="value1" placeholder="请选择">
            <ui-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></ui-option>
          </ui-select>
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>操作角色</li>
          <ui-select v-model="value2" placeholder="请选择">
            <ui-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></ui-option>
          </ui-select>
        </ul>
      </div>
      <!-- 按钮 -->
      <div class="add-btn">
          <button>修改</button>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'operatemodify'
}
</script>
<style scoped>
.modify-content{
    width: 100%;
    background-color: #fff;
    padding: 30px 0 254px 0;
}
.modify-content div{
    display: inline-block;
}
.modify-content div ul{
     line-height: 33px;
    display: -webkit-box;
}
</style>