<template>
  <div>
    <div class="modify-wrap">
      <div class="table-title">
        <li class="title-left">角色查询</li>
        <li class="title-right"></li>
      </div>
      <div class="modify-content">
          <div class="password-wrap">
              <ul>
                  <li>原密码</li>
                  <input type="text" placeholder="请输入当前登录密码">
              </ul>
              <ul>
                   <li>设置新密码</li>
                  <input type="text" placeholder="请输入数字，英文字母（区分大小写）或组合">
              </ul>
              <ul>
                   <li>确认新密码</li>
                  <input type="text" placeholder="请与设置的新密码保持一致">
              </ul>
          </div>
          <div class="modify-btn">
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
.password-wrap{
    padding-top: 170px;
}
.password-wrap ul{
    display: -webkit-box;
    width: 53%;
    margin: 0 auto;
    margin-top: 14px;
}
.password-wrap ul li{
    font-size:14px;
    width: 80px;
    line-height: 33px;
font-family:SourceHanSansCN;
font-weight:bold;
color:rgba(51,51,51,1);
text-align: right;
}
.password-wrap ul input{
    width:380px;
height:33px;
background:rgba(255,255,255,1);
border:2px solid rgba(231,232,239,1);
border-radius:3px;
padding-left: 21px;
margin-left: 67px;
}
.modify-btn{
    text-align: center;
}
.modify-btn button{
    cursor: pointer;
    outline: none;
    border: none;
    width:129px;
height:39px;
line-height: 39px;
font-size:14px;
font-family:SourceHanSansCN;
font-weight:400;
color:rgba(255,255,255,1);
background:rgba(206,40,72,1);
border-radius:3px 3px 3px 3px;
margin: 90px 0 165px 0;
}
</style>