<template>
  <!-- 文件管理页 -->
  <div class="files-management">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <block-title blockTitle="文件管理"></block-title>

      <div class="table">
        <ui-table :data="filesList" style="width: 96%;margin:0 auto">
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
          <ui-table-column label="操作">
            <template slot-scope="scope">
              <ui-button
                class="operator-button"
                @click="goDetail(scope.row)"
                type="text"
                size="small"
              >详情</ui-button>
              <ui-button
                class="operator-button"
                @click="goModify(scope.row)"
                type="text"
                size="small"
              >修改</ui-button>
              <ui-button
                class="operator-button"
                @click="goDel(scope.row)"
                type="text"
                size="small"
              >删除</ui-button>
              <!-- @click="goResetPass(scope.row)" -->
            </template>
          </ui-table-column>
        </ui-table>
        <ui-row class="btn btnbg">
          <!-- <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button> -->
          <ui-button type="primary" class="continue-next" @click="goAdd">新增</ui-button>
        </ui-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productQuery',
  computed: {},
  data() {
    return {
      // 单选按钮
      tableRadio: '',
      // 获取选中数据
      chosedData: [],
      // 用户信息数据
      filesList: [
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
    // 点击新增
    goAdd() {
      this.$router.push('/filesAdd')
    },
    // 点击修改
    goModify(row) {
      this.$router.push('/filesModify')
    },
    // 点击删除
    goDel(row) {
      this.$router.push('/filesDelConf')
    },
    // 点击重置
    resetForm(formName) {
      console.log(3)
      this.$refs[formName].resetFields()
    },
    // 点击查看详情
    goDetail(row) {
      this.$router.push('/filesDetail')
    },

    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.files-management {
  .form {
    background: #fff;
    .ui-form {
      padding: 62px 20px;
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
