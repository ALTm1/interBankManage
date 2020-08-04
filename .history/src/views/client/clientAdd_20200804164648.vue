<template>
  <div class="add-wrap">
    <div class="table-title">
      <li class="title-left">客户端版本新增</li>
      <li class="title-right"></li>
    </div>
    <div class="content-wrap">
      <div>
        <ul>
          <li>版本代码</li>
          <input type="text" name id placeholder="请输入版本代码" />
        </ul>
        <ul>
          <li>版本名称</li>
          <input type="text" name id placeholder="请输入版本名称" />
        </ul>
        <ul>
          <li>某版本号之前      强制更新</li>
          <input type="text" name id placeholder="请输入版本号" />
        </ul>
        <ul>
          <li>版本链接</li>
          <input type="text" name id placeholder="请输入版本链接" />
        </ul>
         <ul>
          <li>版本描述</li>
          <input type="text" name id placeholder="请输入版本描述" />
        </ul>
      </div>

      
   
      <!-- 按钮 -->
      <div class="add-btn">
        <button @click="add">修改</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'operateAdd',
  data() {
    return {
   
    
    }
  },
  methods: {
    add() {
      this.$router.push('addconfirm')
    },
  },
}
</script>
<style lang="scss">
.add-wrap {
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
}
</style>
<style scoped>
.add-wrap {
  /* margin-left: 12px; */
  margin-top: 21px;
}

.title-left {
  float: left;
  padding-left: 9px;
}
.title-right {
  float: right;
}


.content-wrap {
  padding: 40px 81px 81px 90px;
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px 4px 0px 0px;
}
.content-wrap div {
  width: 80%;
  margin: 0 auto;
  /* display: inline-block; */
}
.content-wrap div ul{
    display: -webkit-box;
    line-height: 33px;
    width: 80%;
}
.content-wrap div ul li{
    width: 180px;
}
.content-wrap div input{
  text-align: center;
  /* float: right; */
  width: 300px;
  height: 33px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(231, 232, 239, 1);
}
.add-btn {
  text-align: center;
  padding-bottom: 106px;
  padding-top: 71px;
}
.add-btn button {
  outline: none;
  border: none;
  cursor: pointer;
  width: 129px;
  height: 39px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 39px;
  background: rgba(152, 36, 61, 1);
  border-radius: 3px 3px 3px 3px;
}
</style>