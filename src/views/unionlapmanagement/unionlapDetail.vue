<template>
  <!-- 联盟圈详情页 -->
  <div class="unionlap-detail">
    <div class="right-wrap">
      <ui-row>
        <div class="form">
          <ui-form ref="form" :model="form" label-width="150px">
            <ui-row>
              <ui-col>
                <ui-form-item label="联盟圈名称">
                  <div class="right-item">{{form.organName}}</div>
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
        <div class="table">
          <ui-table :data="userInfoList" style="width: 96%;margin:0 auto">
            <ui-table-column label="请选择" width="80">
              <template slot-scope="scope">
                <span class="serial-number">{{scope.$index+1}}</span>
              </template>
            </ui-table-column>
            <ui-table-column prop="name" label="联盟圈名称"></ui-table-column>
            <ui-table-column prop="loginName" label="创建时间"></ui-table-column>
            <ui-table-column prop="loginName" label="是否圈内共享授用信材料"></ui-table-column>
          </ui-table>
        </div>
      </ui-row>

      <ui-row class="btn btnbg">
        <ui-button type="primary" class="back-btn single-btn" @click="goBack">返回</ui-button>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unionlapDetail',
  computed: {},
  data() {
    return {
      // 表单的值
      form: {
        organName: '啦啦啦',
        userName: '',
      },

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
  },
}
</script>
<style lang="scss">
.unionlap-detail {
  .form {
    // background: #fff;
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
