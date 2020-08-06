<template>
  <div>
    <div class="modify-content">
      <div class="table-title">
        <li class="title-left">操作员修改确认页</li>
        <li class="title-right" @click="back"><img src="~@/assets/image/back.png" alt=""> </li>
      </div>
      <div style="margin-top:40px;">
        <ul class="content-left">
          <li>操作员ID</li>
          <input disabled type="text" name id v-model="id" />
        </ul>
        <ul class="content-right">
          <li>操作员姓名</li>
          <input disabled type="text" name id v-model="name" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>证件号</li>
          <input disabled type="text" name id v-model="znumber" />
        </ul>
        <ul class="content-right">
          <li>工号</li>
          <input disabled type="text" name id v-model="number" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>联系电话</li>
          <input disabled type="text" name id v-model="phone" />
        </ul>
        <ul class="content-right">
          <li>邮箱</li>
          <input disabled type="text" name id v-model="email" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>所属机构</li>
          <input disabled type="text" name id v-model="orgnization" />
        </ul>
        <ul class="content-right">
          <li>所属部门</li>
          <input disabled type="text" name id v-model="department" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>操作角色</li>
          <input disabled type="text" name id v-model="role" />
        </ul>
        <ul class="content-right">
          <li>状态</li>
          <input disabled type="text" name id v-model="state" />
        </ul>
      </div>
      <!-- 按钮 -->
      <div class="modify-btn">
        <button @click="modify">确认</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "operatemodify",
  data() {
    return {
      id: "",
      name: "",
      znumber: "",
      number: "",
      phone: "",
      email: "",
      orgnization: "",
      department: "",
      state: "",
      role: ""
    };
  },
  created() {
    console.log(this.$route.params);
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.znumber = this.$route.params.znumber;
    this.number = this.$route.params.number;
    this.phone = this.$route.params.phone;
    this.email = this.$route.params.email;
    this.orgnization = this.$route.params.orgnization;
    this.department = this.$route.params.department;
    this.state = this.$route.params.state;
    this.role = this.$route.params.role;
  },
  methods: {
    back(){
            this.$router.go(-1)
        },
    modify() {
      var dataSet = {
        id: this.id,
        name: this.name,
        znumber: this.znumber,
        number: this.number,
        phone: this.phone,
        email: this.email,
        orgnization: this.orgnization,
        department: this.department,
        state: this.state,
        role: this.role
      };
      this.$router.push({
        name: "modifyResult",
        params: dataSet
      });
    }
  }
};
</script>
<style>
.modify-content
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
</style>
<style scoped>

.title-left {
  padding-left: 11px;
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
.modify-content div input,
.modify-content div div {
  text-align: center;
  /* float: right; */
  color: #333333;
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
</style>