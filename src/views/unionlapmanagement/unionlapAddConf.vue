<template>
  <!-- 联盟圈页新增确认-->
  <div class="unionlapadd-conf">
    <div class="right-wrap">
      <block-title blockTitle="联盟圈管理新增确认"></block-title>
      <ui-row>
        <ui-col>
          <div class="form">
            <ui-form ref="form" :model="form" label-width="150px">
              <ui-form-item label="联盟圈名称">
                <ui-input v-model="form.organName" placeholder="请输入联盟圈名称"></ui-input>
              </ui-form-item>
            </ui-form>
          </div>
        </ui-col>
      </ui-row>
      <ui-row class="list-title">
        <div class="img"></div>
        <span>机构列表</span>
      </ui-row>

      <div class="table">
        <ui-table :data="userInfoList">
          <ui-table-column label="序号" width="80">
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
        <ui-button type="primary" class="continue-next" @click="goAddConf">确认</ui-button>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unionlapAddConf',
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
    // 点击查询
    clickQuery() {},
    // 点击查看详情
    goAddConf() {
      this.$router.push('/unionlapAddRes')
    },
  },
}
</script>
<style lang="scss">
.unionlapadd-conf {
  .right-wrap {
    background: #fff;
  }
  .form {
    // background: #fff;
    .ui-form {
      width: 50%;
      padding: 0;
      margin: 82px auto 47px;
    }
  }
  .list-title {
    margin: 0px 0 37px;
    height: 15px;
    font-size: 14px;
    font-family: SourceHanSansCN;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    .img {
      display: inline-block;
      width: 6px;
      height: 15px;
      background: red;
      vertical-align: middle;
    }
    span {
      margin-left: 5px;
      height: 15px;
      font-size: 14px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }
  .table {
    // background: #fff;
    .ui-table {
      width: 81%;
      margin: 0 auto;
    }
    .ui-table thead tr th {
      height: 50px;
      background: rgba(245, 246, 248, 1);
      box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      border-radius: 4px 4px 0px 0px;
    }
  }
  .btnbg {
    margin-top: 0;
    // background: #fff;
    padding: 57px 0 30px;
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
