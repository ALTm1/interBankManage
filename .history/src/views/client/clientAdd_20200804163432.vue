<template>
  <div class="add-wrap">
    <div class="table-title">
      <li class="title-left">客户端版本新增</li>
      <li class="title-right"></li>
    </div>
    <div class="content-wrap">
      <div>
        <ul class="content-left">
          <li>版本代码</li>
          <input type="text" name id placeholder="建议使用工号" />
        </ul>
        <ul class="content-right">
          <li>操作员姓名</li>
          <input type="text" name id placeholder="请输入" />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li style="margin-right:57px;">证件号</li>
          <input type="text" name id placeholder="请输入二代身份证" />
        </ul>
        <ul class="content-right">
          <li>工号</li>
          <input type="text" name id />
        </ul>
      </div>
      <div>
        <ul class="content-left">
          <li>联系电话</li>
          <input type="text" name id placeholder="请输入" />
        </ul>
        <ul class="content-right">
          <li>邮箱</li>
          <input type="text" name id placeholder="请输入" />
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
      options: [
        {
          value: '选项1',
          label: '江南农商银行总行',
        },
        {
          value: '选项2',
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
      value: '',
      value1: '',
      value2: '',
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
.content-left {
  float: left;
}
.content-right {
  float: right;
}
.content-left li,
.content-right li {
  float: left;
  line-height: 33px;
  margin-right: 43px;
  text-align: right;
}
.content-wrap {
  padding: 40px 81px 81px 90px;
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px 4px 0px 0px;
}
.content-wrap div {
  width: 100%;
  display: inline-block;
}
.content-wrap div input,
.content-wrap div div {
  text-align: center;
  float: right;
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