<template>
  <div>
    <div class="result-wrap">
        <div class="table-title">
      <li class="title-left">角色新增结果页</li>
      <li class="title-right"></li>
    </div>
    <div class="header-wrap">
      <div class="result-img">
        <img style="width:261px;" src="~@/assets/image/success.png" alt="">
      </div>
      <div class="result-header">
        <img src alt />
        <li>交易已提交,请等待审核</li>
        <li>交易流水号：{{batch}}</li>
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
  name: "cancelresult",
  data() {
    return {
      batch: "124122331434",
    };
  }
};
</script>
<style>
.result-img {
  text-align: center;
  margin: 67px 0 18px 0;
}
</style>
<style scoped>
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
.result-btn {
  padding: 66px 0 57px 0;
}
.result-btn{
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
    margin-top: 21px;
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