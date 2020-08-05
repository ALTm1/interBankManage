<template>
  <div>
    <div class="modify-wrap">
      <div class="table-title">
        <li class="title-left">角色查询</li>
        <li class="title-right"></li>
      </div>
      <div class="modify-content">
          <div>
              <ul>
                  <li></li>
                  <input type="text">
              </ul>
              <ul></ul>
              <ul></ul>
          </div>
          <div>
              <button>重置</button>
          </div>
      </div>    
    </div>
  </div>
</template>
<script>
export default {
  name: "modify"
};
</script>
<style scoped>
.modify-wrap {
  margin-top: 21px;
}
.modify-content{
    width: 100%;
    background-color: #fff;
}
</style>