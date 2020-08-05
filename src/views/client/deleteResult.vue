<template>
  <div>
    <div class="result-wrap">
        <div class="table-title">
      <li class="title-left">客户端版本删除结果页</li>
      <li class="title-right"></li>
    </div>
    <div class="header-wrap">
      <div class="result-header">
        <img src alt />
        <li>交易已提交,请等待审核</li>
        <li>交易流水号：{{batch}}</li>
      </div>
      <!-- <div class="info-wrap">
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
      </div> -->

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
  name: "cancelresult",
  data() {
    return {
      batch: "124122331434",
     
    };
  }
};
</script>
<style scoped>
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
.title-left{
    margin-left: 11px;
}
button {
  border: none;
  outline: none;
  cursor: pointer;
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
  line-height: 33px;
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
  margin: 0 192px 0 340px;
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
    /* margin-left: 12px; */
    margin-top: 21px;
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