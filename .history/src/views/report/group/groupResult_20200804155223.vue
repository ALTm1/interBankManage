<template>
  <div>
    <div class="result-wrap">
      <div class="table-title">
        <li class="title-left">分组新增结果页</li>
        <li class="title-right"></li>
      </div>
      <div>
        <div class="content-wrap">
          <ul>
            <li>组长</li>
            <li>{{leader}}</li>
          </ul>
          <ul>
            <li>组员1</li>
            <li>{{member1}}</li>
          </ul>
          <ul>
            <li>组员2</li>
            <li>{{member2}}</li>
          </ul>
          <ul>
            <li>组员3</li>
            <li>{{member3}}</li>
          </ul>
          <ul>
            <li>组员4</li>
            <li>{{member4}}</li>
          </ul>
          <ul>
            <li>组员5</li>
            <li>{{member5}}</li>
          </ul>
        </div>

        <!-- 按钮 -->
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
      leader: "张三",
      member1:'李四',
      member2:'李四',
      member3:'',
      member4:'李四',
      member5:'',
    };
  }
};
</script>
<style scoped>
.title-left {
  margin-left: 11px;
}
button {
  border: none;
  outline: none;
  cursor: pointer;
}
.result-wrap{
    /* margin-top: 21px; */
    padding-top: 21px;
}
.content-wrap{
    width: 100%;
    margin-top: -15px;
    background-color: #fff;
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
</style>