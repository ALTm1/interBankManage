<template>
  <!-- 联盟圈修改确认页 -->
  <div class="modify-conf">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <block-title blockTitle="联盟圈管理修改确认"></block-title>
      <ui-row>
        <div class="form">
          <ui-form ref="form" :model="form" label-width="150px">
            <ui-row>
              <ui-col>
                <ui-form-item label="联盟圈名称">
                  <ui-input-business v-model="form.organName" placeholder="请输入联盟圈名称"></ui-input-business>
                </ui-form-item>
                <!-- <ui-form-item label="用户姓名">
                  <ui-input-business v-model="form.userName" placeholder="请输入用户姓名"></ui-input-business>
                </ui-form-item>-->
              </ui-col>
            </ui-row>
            <!-- <ui-row class="btn">
              <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
              <ui-button type="primary" class="continue-next" @click="clickQuery('form')">查询</ui-button>
            </ui-row>-->
          </ui-form>
        </div>
      </ui-row>
      <ui-row class="list-title">
        <div class="img"></div>
        <span>机构列表</span>
      </ui-row>
      <div class="table">
        <ui-table :data="userInfoList" style="width: 96%;margin:0 auto">
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
          <ui-table-column prop="loginName" label="圈内共享受用信材料"></ui-table-column>
        </ui-table>
      </div>
      <ui-row class="btn btnbg">
        <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
        <ui-button type="primary" class="continue-next" @click="clickConfirm">确认</ui-button>
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
      // 表单的值
      form: {
        organName: 'lalala',
        userName: '',
      },
      //复选框
      checkList: ['选中且禁用'],
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

    // 点击确认
    clickConfirm() {
      this.$router.push('/unionlapModifyRes')
    },

    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.modify-conf {
  .form {
    // background: #fff;
    .ui-form {
      width: 50%;
      padding: 0;
      margin: 82px auto 47px;
    }
  }
  .table {
    background: #fff;
  }
  .btnbg {
    margin-top: 0;
    // background: #fff;
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
