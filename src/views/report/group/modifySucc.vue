<template>
  <div>
    <div class="result-wrap">
      <div class="table-title">
        <li class="title-left">分组新增结果页</li>
        <li class="title-right" @click="back">
         <img src="~@/assets/image/back.png" alt=""> 
      </li>
      </div>
      <div class="content-wrap">
        <div class="content-list">
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
  },
  created(){
    this.leader=this.$route.params.leader;
    this.member1=this.$route.params.member1;
    this.member2=this.$route.params.member2;
    this.member3=this.$route.params.member3;
    this.member4=this.$route.params.member4;
    this.member5=this.$route.params.member5;
  },
  methods:{
    back(){
            this.$router.go(-1)
    }
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
  width: 96%;
    /* margin-top: 21px; */
    padding-top: 21px;
}

.content-wrap{
  
    background-color: #fff;
}
.content-list{
   padding-top: 40px;
}
.content-list ul{
    display: -webkit-box;
    width: 60%;
    margin: 0 auto;
    /* padding: 5px; */
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    border-left: 1px solid #999;
}
.content-list ul li{
    /* height: 40px; */
    padding: 10px;
    text-align: center;
}
.content-list ul li:nth-child(1){
    border-right: 1px solid #999;
    padding-left: 30px;
    width: 20%;
}
.content-list ul li:nth-child(2){
    width: 80%;
}
.content-list ul:last-child{
    border-bottom: 1px solid #999;
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
  margin: 0 140px 0 330px;
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