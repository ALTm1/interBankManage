<template>
  <div>
    <div class="modify-content">
      <div class="table-title">
        <li class="title-left">操作员修改录入页</li>
        <li class="title-right" @click="back">
           <img src="~@/assets/image/back.png" alt=""> 
        </li>
      </div>
      <div style="margin-top:40px;">
        <ul class="content-left">
          <li>操作员ID</li>
          <input type="number" name id v-model="id" />
        </ul>
        <ul class="content-right">
          <li>操作员姓名</li>
          <input type="text" name id v-model="name" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>证件号</li>
          <input type="number" name id v-model="znumber" />
        </ul>
        <ul class="content-right">
          <li>工号</li>
          <input type="number" name id v-model="number" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>联系电话</li>
          <input type="number" name id v-model="phone" />
        </ul>
        <ul class="content-right">
          <li>邮箱</li>
          <input type="text" name id v-model="email" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>所属机构</li>
          <ui-select v-model="value" placeholder="请选择">
            <ui-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></ui-option>
          </ui-select>
        </ul>
        <ul class="content-right">
          <li>所属部门</li>
          <ui-select v-model="value1" placeholder="请选择">
            <ui-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></ui-option>
          </ui-select>
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>操作角色</li>
          <ui-select v-model="value2" placeholder="请选择">
            <ui-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></ui-option>
          </ui-select>
        </ul>
         <ul class="content-right">
          <li>状态</li>
          <input type="text" disabled name id v-model="state" />
        </ul>
      </div>
      <!-- 按钮 -->
      <div class="modify-btn">
        <button @click="modify">修改</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'operatemodify',
  data() {
    return {
      id: '1100',
      name: '',
      znumber: '123456789009876543',
      number: '',
      phone: '18888888888',
      email: '12113564892@mdks.cn',
      state:'',
      options: [
        {
          value: '江南农商银行总行',
          label: '江南农商银行总行',
        },
        {
          value: '双皮奶',
          label: '双皮奶',
        },
      ],
      options1: [
        {
          value: '选项1',
          label: '金融同业部',
        },
        {
          value: '选项2',
          label: '金融同业部',
        },
      ],
      options2: [
        {
          value: '选项1',
          label: '交易员',
        },
        {
          value: '选项2',
          label: '交易员',
        },
      ],
      value: '江南农商银行总行',
      value1: '',
      value2: '交易员',
    }
  },
  created(){
    console.log(this.$route.params)
    this.value1=this.$route.params.department;
    this.name=this.$route.params.name;
    this.number=this.$route.params.number;
    this.value2=this.$route.params.role;
    this.state=this.$route.params.state;
// time: "2020-01-31  17:00"
  },
  methods: {
     back(){
            this.$router.go(-1)
        },
    modify() {
      console.log(this.value)
      var dataSet={
        id:this.id,
        name:this.name,
        znumber: this.znumber,
      number: this.number,
      phone: this.phone,
      email: this.email,
      orgnization:this.value,
    department:this.value1,
    state:this.state,
    role:this.value2,
      };
      console.log(dataSet)
      this.$router.push({
        name:'modifyConfirm',
        params:dataSet
      })
    },
  },
}
</script>
<style lang="scss">
.operate-modify {
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
.title-left{
    display: inline-block;
}
.title-right{
    float: right;
      cursor: pointer;
}
.title-right img{
  width: 14px;
  margin-right: 12px;
}
input {
  outline: none;
}
.modify-content {
  width: 100%;
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
.modify-content div input,
.modify-content div div {
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
</style>