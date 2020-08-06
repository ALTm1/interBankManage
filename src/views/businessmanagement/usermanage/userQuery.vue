<template>
  <!-- 用户查询页 -->
  <div class="user-query">
    <div class="right-wrap">
      <ui-row>
        <div class="form">
          <ui-form ref="form" :model="form" label-width="150px">
            <ui-row>
              <ui-col>
                <ui-form-item label="机构名称">
                  <ui-input-business v-model="form.organName" placeholder="请输入机构名称"></ui-input-business>
                </ui-form-item>
                <ui-form-item label="用户姓名">
                  <ui-input-business v-model="form.userName" placeholder="请输入用户姓名"></ui-input-business>
                </ui-form-item>
              </ui-col>
            </ui-row>
            <ui-row class="btn">
              <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
              <ui-button type="primary" class="continue-next" @click="clickQuery('form')">查询</ui-button>
            </ui-row>
          </ui-form>
        </div>
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
          <ui-table-column prop="name" label="姓名" width="80"></ui-table-column>
          <ui-table-column prop="loginName" label="登录名" width="80"></ui-table-column>
          <ui-table-column prop="idCard" label="身份证号码"></ui-table-column>
          <ui-table-column prop="organForShort" label="机构简称"></ui-table-column>
          <ui-table-column prop="subsidiaryOrgan" label="所属机构"></ui-table-column>
          <ui-table-column prop="subsidiarySection" label="所属部门"></ui-table-column>
          <ui-table-column prop="status" label="状态" width="80"></ui-table-column>
          <ui-table-column label="操作">
            <template slot-scope="scope">
              <ui-button
                class="operator-button"
                @click="goDetail(scope.row)"
                type="text"
                size="small"
              >详情</ui-button>
              <ui-button
                v-if="scope.row.status === '正常'"
                class="operator-button"
                @click="goResetPass(scope.row)"
                type="text"
                size="small"
              >密码重置</ui-button>
              <ui-button
                v-if="scope.row.status === '正常'"
                class="operator-button"
                @click="goBlockUp(scope.row)"
                type="text"
                size="small"
              >停用</ui-button>
              <ui-button
                v-if="scope.row.status === '已停用'"
                class="operator-button"
                @click="goStartUsing(scope.row)"
                type="text"
                size="small"
              >启用</ui-button>
              <ui-button
                v-if="scope.row.status != '已注销'"
                class="operator-button"
                @click="goCancel(scope.row)"
                type="text"
                size="small"
              >注销</ui-button>
            </template>
          </ui-table-column>
        </ui-table>
      </div>
      <!-- 重置密码弹窗 -->
      <ui-dialog title="提示" :visible.sync="centerDialogVisible" width="50%" center>
        <div class="resetTip">是否确认修改密码？</div>
        <span slot="footer" class="dialog-footer">
          <ui-button type="primary" class="back-btn" @click="centerDialogVisible = false">取 消</ui-button>
          <ui-button type="primary" class="continue-next" @click="clickConfirm">确 定</ui-button>
        </span>
      </ui-dialog>
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
        organName: '',
        userName: '',
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
    // 点击查询
    clickQuery() {},
    // 点击查看详情
    goDetail(row) {
      //   console.log(row)
      this.$router.push({
        name: 'userDetail',
        params: { detail: row },
      })
    },

    // 点击重置密码
    goResetPass(row) {
      this.centerDialogVisible = true
      //   this.$router.push({
      //     path: '/handleConf',
      //     query: { detail: row, type: 0 },
      //   })
    },
    // 点击重置密码确认按钮
    clickConfirm() {
      this.$router.push({
        path: '/passResetRes',
      })
    },
    // 点击启用
    goStartUsing(row) {
      this.$router.push({
        path: '/handleConf',
        query: { detail: row, type: 0 },
      })
    },
    // 点击停用
    goBlockUp(row) {
      this.$router.push({
        path: '/handleConf',
        query: { detail: row, type: 1 },
      })
    },
    // 点击注销
    goCancel(row) {
      this.$router.push({
        path: 'handleConf',
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
