<template>
  <!-- 联盟圈新增页 -->
  <div class="unionlap-add">
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
      <ui-row class="btn">
        <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
        <ui-button type="primary" class="continue-next" @click="goAdd">新增</ui-button>
        <!-- 新增弹窗 -->
        <ui-dialog
          class="alert"
          title="机构列表"
          :show-close="false"
          :visible.sync="dialogTableVisible"
        >
          <div class="table">
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
              <ui-table-column prop="index" label="序号"></ui-table-column>
              <ui-table-column prop="name" label="机构名称"></ui-table-column>
              <ui-table-column prop="loginName" label="圈内共享受用信材料">
                <template slot-scope="scope">
                  <ui-checkbox label="是" v-model="scope.checked"></ui-checkbox>
                  <ui-checkbox label="否" v-model="scope.noChecked"></ui-checkbox>
                </template>
              </ui-table-column>
            </ui-table>
          </div>
          <div slot="footer" class="dialog-footer">
            <div class="del" @click="dialogTableVisible=false">取消</div>
            <div class="confirm" @click="goConfirm">确定</div>
          </div>
        </ui-dialog>
      </ui-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unionlapAdd',
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
          index: 1,
          name: '朱一龙',
          loginName: '小哥の',
          idCard: '334455666888',
          organForShort: '就那个地方',
          subsidiaryOrgan: '所属机构',
          subsidiarySection: '所属部门',
          status: '正常',
        },
        {
          index: 1,
          name: '朱一龙',
          loginName: '小哥の',
          idCard: '334455666888',
          organForShort: '就那个地方',
          subsidiaryOrgan: '所属机构',
          subsidiarySection: '所属部门',
          status: '已停用',
        },
        {
          index: 1,
          name: '朱一龙',
          loginName: '小哥の',
          idCard: '334455666888',
          organForShort: '就那个地方',
          subsidiaryOrgan: '所属机构',
          subsidiarySection: '所属部门',
          status: '已注销',
        },
      ],
      // 新增弹窗是否显示
      dialogTableVisible: false,
    }
  },
  methods: {
    // 返回按钮
    goBack() {
      this.$router.go(-1)
    },
    // 点击新增
    goAdd() {
      this.dialogTableVisible = true
    },
    // 点击弹窗确定
    goConfirm() {
      this.$router.push('/unionlapAddConf')
    },
    // 获取选中的数据
    getCurrentRow(row) {
      this.chosedData = row
    },
  },
}
</script>
<style lang="scss">
.unionlap-add {
  .form {
    .ui-form {
      width: 50%;
      padding: 62px 0;
      margin: 0 auto;
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

  .ui-dialog {
    width: 75.2%;
  }
  .alert {
    .table {
      width: 75.2%;
      margin: 127px auto 0;
      // background: #fff;
      .ui-table thead tr th {
        height: 50px;
        background: rgba(245, 246, 248, 1);
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
        border-radius: 4px 4px 0px 0px;
      }
    }

    .ui-dialog__body {
      padding: 30px 0;
    }
    .ui-dialog__footer {
      margin-top: 123px;
      padding: 0;
      text-align: left;
    }
    .ui-dialog__header {
      padding: 0;
      height: 50px;
      line-height: 50px;
      background: rgba(245, 246, 248, 1);
      box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
      border-radius: 4px 4px 0px 0px;
    }
    .del,
    .confirm {
      width: 50%;
      text-align: center;
      display: inline-block;
      line-height: 83px;
      margin-top: 1px;
      // border-radius: 4px;
      font-size: 20px;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    .del {
      background: rgba(238, 238, 238, 1);
    }
    .confirm {
      color: #fff;
      background: rgba(155, 112, 65, 1);
    }
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
