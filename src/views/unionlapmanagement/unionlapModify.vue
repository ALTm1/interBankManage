<template>
  <!-- 联盟圈修改页 -->
  <div class="unionlap-modify">
    <div class="right-wrap">
      <ui-row>
        <div class="form">
          <ui-form ref="form" :model="form" label-width="150px">
            <ui-row>
              <ui-col>
                <ui-form-item label="联盟圈名称">
                  <ui-input-business v-model="form.unionlapName" placeholder="请输入联盟圈名称"></ui-input-business>
                </ui-form-item>
              </ui-col>
            </ui-row>
          </ui-form>
        </div>
      </ui-row>
      <ui-row class="list-title" style="padding-top: 33px">
        <div class="img">
          <img src="@/assets/image/titleleft.png" alt />
        </div>
        <span>机构列表</span>
      </ui-row>
      <ui-row>
        <div class="table table-list">
          <ui-table :data="userInfoList">
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
            <ui-table-column prop="name" label="机构名称"></ui-table-column>
            <ui-table-column prop="loginName" label="圈内共享受用信材料">
              <template slot-scope="scope">
                <ui-checkbox label="是" v-model="scope.checked"></ui-checkbox>
                <ui-checkbox label="否" v-model="scope.noChecked"></ui-checkbox>
              </template>
            </ui-table-column>
          </ui-table>
        </div>
      </ui-row>

      <ui-row class="btn btnbg">
        <ui-button type="primary" class="back-btn" @click="goAdd">新增机构</ui-button>
        <ui-button type="primary" class="continue-next" @click="goCancel">删除机构</ui-button>
      </ui-row>
      <ui-row class="btn btnbg">
        <ui-button type="primary" class="continue-next" @click="goBack">返回</ui-button>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unionlapModify',
  computed: {},
  data() {
    return {
      // 表单的值
      form: {
        unionlapName: '',
      },
      //复选框
      checked: false,
      noChecked: false,
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
    // 点击新增
    goAdd() {
      this.$router.push('/unionlapModifyConf')
    },
    // 点击删除
    goCancel() {
      this.$router.push('/unionlapCancelConf')
    },

    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.unionlap-modify {
  .form {
    // background: #fff;
    .ui-form {
      width: 50%;
      padding: 0;
      margin: 88px auto 47px;
    }
  }
  .right-wrap {
    .table-list {
      // background: #fff;
      margin-bottom: 17px;
      .ui-table {
        width: 62.35%;
        margin: 0 auto;
      }
    }
  }
  .table {
    // background: #fff;
  }
  .btnbg {
    margin-top: 0;
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
