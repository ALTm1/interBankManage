<template>
  <div>
    <div class="modify-content">
      <div class="table-title">
        <li class="title-left">分组信息维护修改录入页</li>
         <li class="title-right" @click="back">
         <img src="~@/assets/image/back.png" alt=""> 
      </li>
      </div>
       <div class="modify-wrap">
      <div>
        <ul>
          <li>组长</li>
          <input type="text" v-model="leader" name id placeholder="请输入组长名称" />
        </ul>
        <ul>
          <li>组员1</li>
          <input type="text" v-model="member1" name id placeholder="请输入组员名称" />
        </ul>
        <ul>
          <li>组员2</li>
          <input type="text" v-model="member2" name id placeholder="请输入组员名称" />
        </ul>
        <ul>
          <li>组员3</li>
          <input type="text" v-model="member3" name id placeholder="请输入组员名称" />
        </ul>
         <ul>
          <li>组员4</li>
          <input type="text" v-model="member4" name id placeholder="请输入组员名称" />
        </ul>
         <ul>
          <li>组员5</li>
          <input type="text" v-model="member5" name id placeholder="请输入组员名称" />
        </ul>
      </div>
      <!-- 按钮 -->
      <div class="modify-btn">
        <button @click="modify">修改</button>
      </div>
    </div>
     </div>
  </div>
</template>
<script>
export default {
  name: "operatemodify",
  data() {
    return {
      leader:'',
      member1:'',
      member2:'',
      member3:'',
      member4:'',
      member5:'',
    };
  },
  created(){
    this.leader=this.$route.params.leader;
    this.member1=this.$route.params.member1;
    this.member2=this.$route.params.member2;
    this.member3=this.$route.params.member3;
    this.member4=this.$route.params.member4;
    this.member5=this.$route.params.member5;
  },
  methods: {
    modify() {
      var dataSet={
        leader:this.leader,
        member1:this.member1,
        member2:this.member2,
        member3:this.member3,
        member4:this.member4,
        member5:this.member5,
      }
      this.$router.push({
        name:'groupmodifyconfirm',
        params:dataSet
      }
       );
    },
     back(){
            this.$router.go(-1)
    }
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
input {
  outline: none;
}
.modify-content {
  width: 96%;
  background-color: #fff;
  margin: 21px 0 254px 0;
}
.modify-content div {
  display: inline-block;
}
.modify-content div ul {
  line-height: 33px;
  display: -webkit-box;
}
.modify-content div input {
  font-size: 12px;
  font-family: SourceHanSansCN;
  font-weight: bold;
  color: rgba(153, 153, 153, 1);
}
.modify-content div input{
  text-align: center;
  /* float: right; */
  width: 300px;
  height: 33px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(231, 232, 239, 1);
}
.content-left {
  float: left;
}
.content-right {
  float: right;
}
.content-left li,
.content-right li {
  /* float: left; */
  line-height: 33px;
  width: 120px;

  margin-right: 43px;
  text-align: right;
}
.modify-btn {
  width: 100%;
  text-align: center;
}
.modify-btn button {
  width: 129px;
  height: 39px;
  background: rgba(152, 36, 61, 1);
  border-radius: 3px;
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  outline: none;
  cursor: pointer;
  border: none;
  margin-top: 71px;

  margin-bottom: 197px;
}
.title-left {
  padding-left: 11px;
}
.modify-wrap{
  /* padding: 40px 81px 81px 90px; */
  background-color: #fff;
  width: 100%;
box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.1);
border-radius:4px 4px 0px 0px;
}
.modify-wrap div {
  width: 100%;
  margin-top: 100px;
  display: inline-block;
}
.modify-wrap ul{
    width: 500px;
    margin: 0 auto;
    display: -webkit-box;
    border-top: 1px solid #999;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
}
.modify-wrap ul:last-child{
    border-bottom: 1px solid #999;
}
.modify-wrap ul li{
    width: 80px;
    line-height: 40px;
    border-right: 1px solid #999;
    
}
.modify-wrap div input,
.modify-wrap div div{
    text-align: center;
  width: 400px;
  height: 40px;
  line-height: 40px;
  border: none;
  
}
</style>