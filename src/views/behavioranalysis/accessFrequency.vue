<template>
  <!-- 行为分析查询页 -->
  <div class="access-frequency">
    <div class="right-wrap">
      <ui-row>
        <div class="form">
          <ui-form ref="form" :model="form" label-width="150px">
            <ui-row>
              <ui-col>
                <ui-form-item label="访问渠道">
                  <ui-select v-model="form.access" @change placeholder="请选择">
                    <ui-option
                      v-for="item in accessList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
                <ui-form-item label="访问模块">
                  <ui-select v-model="form.accessModule" placeholder="请选择">
                    <ui-option
                      v-for="item in accessModuleList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></ui-option>
                  </ui-select>
                </ui-form-item>
              </ui-col>
            </ui-row>
            <ui-row class="btn">
              <ui-button type="primary" class="back-btn" @click="goBack">重置</ui-button>
              <ui-button type="primary" class="continue-next" @click="clickQuery('form')">查询</ui-button>
            </ui-row>
          </ui-form>
        </div>
      </ui-row>

      <div class="table">
        <ui-table :data="productTags" style="width: 96%;margin:0 auto">
          <ui-table-column label="请选择" width="80">
            <template slot-scope="scope">
              <ui-radio
                v-model="tableRadio"
                :label="scope.$index"
                @change.native="getCurrentRow(scope.row)"
              >
                <i></i>
              </ui-radio>
            </template>
          </ui-table-column>
          <ui-table-column prop="tagName" label="访问渠道"></ui-table-column>
          <ui-table-column prop="remark" label="访问模块"></ui-table-column>
          <ui-table-column prop="remark" label="访客数"></ui-table-column>
          <ui-table-column prop="remark" label="注册用户"></ui-table-column>
          <ui-table-column prop="remark" label="总浏览器量"></ui-table-column>
        </ui-table>
      </div>
      <ui-row class="btn btnbg">
        <ui-pagination background layout="prev, pager, next" :total="1000"></ui-pagination>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'accessFrequency',
  data() {
    return {
      // 标题
      blockTitle: '功能模块访问频次',
      // 表单的值
      form: {
        access: '',
        accessModule: '',
      },
      // 访问渠道数据
      accessList: [
        {
          value: '1',
          label: 'APP端',
        },
        {
          value: '2',
          label: '门户端',
        },
      ],
      //   pc端功能模块
      PCModuleList: [
        {
          value: '1',
          label: '首页',
        },
        {
          value: '2',
          label: '行业动态',
        },
        {
          value: '3',
          label: '金融市场',
        },
        {
          value: '4',
          label: '会员中心',
        },
        {
          value: '5',
          label: '基金通',
        },
        {
          value: '6',
          label: '联盟圈',
        },
        {
          value: '7',
          label: '个人设置',
        },
        {
          value: '8',
          label: '客服功能',
        },
        {
          value: '9',
          label: '消息中心',
        },
      ],
      //   app端功能模块
      AppModuleList: [
        {
          value: '1',
          label: '首页',
        },
        {
          value: '2',
          label: '资讯',
        },
        {
          value: '3',
          label: '产品',
        },
        {
          value: '4',
          label: '通讯',
        },
        {
          value: '5',
          label: '我的',
        },
        {
          value: '6',
          label: '联盟圈',
        },
      ],
      // 访问模块数据
      accessModuleList: [],
      // 单选按钮
      tableRadio: '',
      // 获取选中数据
      chosedData: [],
      // 产品标签维护数据
      productTags: [
        {
          index: '1',
          tagName: '蓝天大地',
          remark: '一千万',
          createTime: '2020-02-24',
        },
        {
          index: '2',
          tagName: '蓝天大地',
          remark: '一千万',
          createTime: '2020-02-24',
        },
        {
          index: '3',
          tagName: '蓝天大地',
          remark: '一千万',
          createTime: '2020-02-24',
        },
      ],
    }
  },
  created() {
    this.accessModuleList = [...this.PCModuleList]
  },
  methods: {
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
    //下拉框事件
    selectType() {
      if (this.form.access === '1') {
        this.accessModuleList = [...this.AppModuleList]
      } else {
        this.accessModuleList = [...this.PCModuleList]
      }
    },
    // 点击查询
    clickQuery() {
      console.log(this.form.access)
    },
    // 点击查看详情
    goDetail(row) {
      this.$router.push('/infoDetail')
    },
    // 点击注销
    goCancel(row) {
      this.$router.push('/organCancel')
    },
    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.access-frequency {
  .form {
    background: #fff;
    .ui-form {
      width: 50%;
      padding: 62px 0;
      margin: 0 auto;
    }
  }
  .table {
    background: #fff;
  }
  .btnbg {
    margin-top: 0;
    background: #fff;
    padding: 50px 0 30px;
  }
}
</style>
