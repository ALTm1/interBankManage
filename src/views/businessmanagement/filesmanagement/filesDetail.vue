<template>
  <!-- 文件详情页 -->
  <div class="files-detail">
    <div class="right-wrap">
      <div class="table">
        <ui-table :data="fielsDetailList" style="width: 96%;margin:0 auto">
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
          <ui-table-column prop="name" label="产品类型" width="80"></ui-table-column>
          <ui-table-column prop="loginName" label="业务类型"></ui-table-column>
          <ui-table-column prop="idCard" label="业务场景"></ui-table-column>
          <ui-table-column prop="organForShort" label="文件标题"></ui-table-column>
          <ui-table-column prop="subsidiaryOrgan" label="文件内容"></ui-table-column>
        </ui-table>
      </div>
      <ui-row class="btn btnbg">
        <!-- <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button> -->
        <ui-button type="primary" class="continue-next" @click="goBack">返回</ui-button>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'filesDetail',
  computed: {},
  data() {
    return {
      // 单选按钮
      tableRadio: '',
      // 获取选中数据
      chosedData: [],
      // 文件详情数据
      fielsDetailList: [
        {
          name: '朱一龙',
          loginName: '小哥の',
          idCard: '334455666888',
          organForShort: '就那个地方',
          subsidiaryOrgan: '所属机构',
          subsidiarySection: '所属部门',
          status: '正常',
        },
        {
          name: '朱一龙',
          loginName: '小哥の',
          idCard: '334455666888',
          organForShort: '就那个地方',
          subsidiaryOrgan: '所属机构',
          subsidiarySection: '所属部门',
          status: '已停用',
        },
        {
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
  methods: {
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
    // 点击查询
    clickQuery() {},
    // 点击重置
    resetForm(formName) {
      console.log(3)
      this.$refs[formName].resetFields()
    },

    // 点击下架
    goSoldOut(row) {
      this.$router.push({
        path: '/soldOut',
      })
    },

    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.files-detail {
  .form {
    background: #fff;
    .ui-form {
      // width: 50%;
      padding: 62px 20px;
      // margin: 0 auto;
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
  .resetTip {
    text-align: center;
    font-size: 14px;
    font-family: SimHei;
    font-weight: 400;
    color: #333;
  }
}
</style>
