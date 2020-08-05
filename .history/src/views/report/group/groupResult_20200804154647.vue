<template>
  <div>
    <div class="result-wrap">
      <div class="table-title">
        <li class="title-left">分组新增结果页</li>
        <li class="title-right"></li>
      </div>
      <div class="content-wrap">
        <div>
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
        <!-- <div class="add-btn">
          <button @click="add">确认</button>
        </div> -->
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
</style>