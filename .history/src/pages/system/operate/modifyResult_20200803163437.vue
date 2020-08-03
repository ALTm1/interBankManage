<template>
  <div>
    <!-- 面包屑 -->
    <div class="operate-header">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: '/' }">您的位置:系统管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>操作员管理</ui-breadcrumb-item>
        <ui-breadcrumb-item>修改结果页</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <div class="result-wrap">
        <div class="table-title">
      <li class="title-left">操作员修改结果页</li>
      <li class="title-right"></li>
    </div>
    <div class="header-wrap">
      <div class="result-header">
        <img src alt />
        <li>交易已提交</li>
        <li>交易流水号：{{batch}}</li>
      </div>
      <div class="info-wrap">
        <div class="result-information">
          <ul class="result-left">
            <li>操作员ID</li>
            <li>{{id}}</li>
          </ul>
          <ul class="result-right">
            <li>操作员姓名</li>
            <li>{{name}}</li>
          </ul>
        </div>
        <div class="result-information">
          <ul class="result-left">
            <li>证件号</li>
            <li>{{znumber}}</li>
          </ul>
          <ul class="result-right">
            <li>工号</li>
            <li>{{number}}</li>
          </ul>
        </div>
      </div>

      <div class="result-btn">
        <button>继续</button>
        <button>返回</button>
      </div>
    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "modifyresult",
  data() {
    return {
      batch: "124122331434",
      id: "111000",
      name: "张三",
      znumber: "江南农商银行总行",
      number: "111000"
    };
  }
};
</script>
<style scoped>
.title-left{
    margin-left: 11px;
}
button {
  border: none;
  outline: none;
}
.result-header {
  text-align: center;
}
.result-left {
  float: left;
  display: -webkit-box;
}
.result-right {
  float: right;
  display: -webkit-box;
}
.result-left li:nth-child(1),
.result-right li:nth-child(1) {
  width: 80px;
  text-align: right;
}
.result-left li:nth-child(2),
.result-right li:nth-child(2) {
  width: 300px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  border: 2px solid rgba(231, 232, 239, 1);
  border-radius: 3px 3px 3px 3px;
  font-size: 12px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  margin-left: 40px;
}
.result-btn {
  padding: 66px 0 57px 0;
}
.result-btn,
.info-wrap {
  width: 100%;
  display: inline-block;
}
.result-btn button:nth-child(1) {
  width: 129px;
  height: 39px;
  line-height: 39px;
  background: rgba(155, 112, 65, 1);
  border-radius: 3px 3px 3px 3px;
  font-size: 14px;
  font-weight: 400;
  margin: 0 194px 0 340px;
  color: rgba(255, 255, 255, 1);
}
.result-btn button:nth-child(2) {
  width: 129px;
  height: 39px;
  background: rgba(152, 36, 61, 1);
  border-radius: 3px 3px 3px 3px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-right: 335px;
}
.header-wrap {
  background-color: #fff;
  display: inline-block;
  width: 100%;
}
.result-wrap{
    margin-left: 12px;
}
.result-information {
  margin: 0 83px 0 91px;
}
.result-header image {
  width: 257px;
  height: 158px;
}
.result-header li:nth-child(2) {
  font-size: 16px;
  font-family: SimHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 48px;
}
.result-header li:nth-child(3) {
  font-size: 12px;
  font-family: SimHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 48px;
  margin-top: 17px;
}
</style>