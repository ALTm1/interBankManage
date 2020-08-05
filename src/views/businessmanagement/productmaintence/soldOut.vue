<template>
  <!-- 下架确认页 -->
  <div class="sold-out-conf">
    <div class="right-wrap">
      <div class="form">
        <ui-form ref="form" label-width="150px">
          <ui-row>
            <ui-col :span="12">
              <ui-form-item label="产品类型">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="业务类型">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="产品发布者">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="发布方联系人">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="产品名称">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="发布日期">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="属性">
                <div class="right-item">产品类型</div>
              </ui-form-item>
            </ui-col>
            <ui-col :span="12">
              <ui-form-item label="产品标签">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="交易方向">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="交易期限（天）">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="金额（万元）">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="年利率">
                <div class="right-item">产品类型</div>
              </ui-form-item>
              <ui-form-item label="备注">
                <div class="right-item">产品类型</div>
              </ui-form-item>
            </ui-col>
          </ui-row>
        </ui-form>
      </div>
      <ui-row class="list-title" style="padding-top: 33px">
        <div class="img"></div>
        <span>机构列表</span>
      </ui-row>
      <!-- <ui-row class="handle-title">
        <ui-col :span="12">机构列表</ui-col>
        <ui-col :span="12" class="back">返回</ui-col>
      </ui-row>-->
      <div class="table">
        <ui-table :data="productList" style="width: 80%;margin:0 auto">
          <ui-table-column label="序号">
            <template slot-scope="scope">
              <span class="serial-number">{{scope.$index+1}}</span>
            </template>
          </ui-table-column>
          <!-- <ui-table-column prop="name" label="序号" width="80"></ui-table-column> -->
          <ui-table-column prop="loginName" label="机构全称"></ui-table-column>
        </ui-table>
      </div>
      <ui-row class="list-title" style="padding-top: 33px">
        <div class="img"></div>
        <span>发布方联系人</span>
      </ui-row>

      <div class="table">
        <ui-table :data="productList" style="width: 80%;margin:0 auto">
          <ui-table-column label="序号">
            <template slot-scope="scope">
              <span class="serial-number">{{scope.$index+1}}</span>
            </template>
          </ui-table-column>
          <ui-table-column prop="name" label="联系人姓名"></ui-table-column>
          <ui-table-column prop="loginName" label="联系电话"></ui-table-column>
          <ui-table-column prop="idCard" label="在线聊天"></ui-table-column>
        </ui-table>
      </div>
      <ui-row class="btn">
        <ui-button type="primary" class="continue-next" @click="submitForm()">下架</ui-button>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'soldOut',
  computed: {},
  data() {
    return {
      // 表格数据
      // 单选按钮
      tableRadio: '',
      // 获取选中数据
      chosedData: [],
      // 用户信息数据
      productList: [
        {
          index: '001',
          name: '朱一龙',
          loginName: '小哥の',
          idCard: '334455666888',
          organForShort: '就那个地方',
          subsidiaryOrgan: '所属机构',
          subsidiarySection: '所属部门',
          status: '正常',
        },
        {
          index: '002',
          name: '朱一龙',
          loginName: '小哥の',
          idCard: '334455666888',
          organForShort: '就那个地方',
          subsidiaryOrgan: '所属机构',
          subsidiarySection: '所属部门',
          status: '已停用',
        },
        {
          index: '003',
          name: '朱一龙',
          loginName: '小哥の',
          idCard: '334455666888',
          organForShort: '就那个地方',
          subsidiaryOrgan: '所属机构',
          subsidiarySection: '所属部门',
          status: '已注销',
        },
      ],
    }
  },
  created() {},
  methods: {
    // 点击下架
    submitForm() {
      this.$router.push('/soldOutRes')
    },

    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
.sold-out-conf {
  .right-wrap {
    background: #fff;
  }
  .form {
    .ui-form {
      padding: 62px 20px;
    }
  }
}
</style>
