<template>
  <!-- 联盟圈查询页 -->
  <div class="user-query">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <ui-row>
        <div class="form">
          <ui-form ref="form" :model="form" label-width="150px">
            <ui-row>
              <ui-col>
                <ui-form-item label="联盟圈名称" prop="unionlapName">
                  <ui-input-business v-model="form.unionlapName" placeholder="请输入联盟圈名称"></ui-input-business>
                </ui-form-item>
              </ui-col>
            </ui-row>
            <ui-row class="btn">
              <ui-button type="primary" class="back-btn" @click="reset('form')">重置</ui-button>
              <ui-button type="primary" class="continue-next" @click="clickQuery('form')">查询</ui-button>
            </ui-row>
          </ui-form>
        </div>
      </ui-row>
      <query-result :isResultShow="isResultShow"></query-result>
      <div class="table">
        <ui-table :data="userInfoList" style="width: 96%;margin:0 auto">
          <ui-table-column label="序号" width="80">
            <template slot-scope="scope">
              <span class="serial-number">00{{scope.$index + 1}}</span>
            </template>
          </ui-table-column>
          <ui-table-column prop="name" label="联盟圈名称"></ui-table-column>
          <ui-table-column prop="loginName" label="创建时间"></ui-table-column>
          <ui-table-column prop="loginName" label="状态"></ui-table-column>
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
                @click="goCancel(scope.row)"
                type="text"
                size="small"
              >注销</ui-button>
            </template>
          </ui-table-column>
        </ui-table>
      </div>
      <ui-row class="btn btnbg">
        <ui-button type="primary" class="continue-next" @click="goAdd">新增</ui-button>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userQuery',
  computed: {},
  data() {
    return {
      isResultShow: false,
      // 表单的值
      form: {
        unionlapName: '',
      },
      // 单选按钮
      tableRadio: '',
      // 获取选中数据
      chosedData: [],
      // 用户信息数据
      userInfoList: [
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
      //  重置密码弹窗是否显示
      centerDialogVisible: false,
    }
  },
  methods: {
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    // 点击查询
    clickQuery() {
      this.isResultShow = true
    },
    // 点击查看详情
    goDetail(row) {
      this.$router.push({
        name: 'unionlapDetail',
        params: { detail: row },
      })
    },
    // 新增
    goAdd() {
      this.$router.push('unionlapAdd')
    },

    // 点击修改
    goModify(row) {
      this.$router.push({
        path: '/unionlapModify',
        query: { detail: row, type: 0 },
      })
    },

    // 点击删除
    goCancel(row) {
      this.$router.push({
        path: 'unionlapCancelConf',
        query: { detail: row, type: 2 },
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
.user-query {
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
  .resetTip {
    text-align: center;
    font-size: 14px;
    font-family: SimHei;
    font-weight: 400;
    color: #333;
  }
}
</style>
