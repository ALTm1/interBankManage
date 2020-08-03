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
          <input type="text" name id />
        </ul>
        <ul class="content-right">
          <li>工号</li>
          <input type="text" name id placeholder="请输入二代身份证" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>联系电话</li>
          <input type="text" name id />
        </ul>
        <ul class="content-right">
          <li>邮箱</li>
          <input type="text" name id />
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
    </div>
  </div>
</template>
<script>
export default {
  name: "operateAdd",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "江南农商银行总行"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      options1: [
        {
          value: "选项1",
          label: "金融同业部"
        },
        {
          value: "选项2",
          label: "金融同业部"
        }
      ],
      options2: [
        {
          value: "选项1",
          label: "交易员"
        },
        {
          value: "选项2",
          label: "交易员"
        }
      ],
      value: "",
      value1: "",
      value2: "",
    };
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
  /* background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(231, 232, 239, 1);
  border-radius: 3px 3px 3px 3px; */
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
.table-title {
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
  border-radius: 3px 3px 3px 3px;
}
</style>