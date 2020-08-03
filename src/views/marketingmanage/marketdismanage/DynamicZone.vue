<!--
 * @Author: your name
 * @Date: 2020-07-30 19:52:15
 * @LastEditTime: 2020-08-03 14:13:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\marketdismanage\DynamicZone.vue
--> 

<template>
  <div class="wrap">
    <div>
      <div>
        <DisplayItem title="推送会议" content="会议标题1"></DisplayItem>
        <span class="choose-text" @click="meetingDialog=!meetingDialog">选择</span>
      </div>
      <div>
        <DisplayItem title="推送培训" content="培训标题1"></DisplayItem>
        <span class="choose-text" @click="organDynamicDialog=!organDynamicDialog">选择</span>
      </div>
      <div>
        <DisplayItem title="推送机构动态" content="机构动态标题1"></DisplayItem>
        <span class="choose-text" @click="trainDialog=!trainDialog">选择</span>
      </div>
    </div>
    <ui-dialog title="会议列表" center :visible.sync="meetingDialog">
      <div class="dialog-content">
        <ui-table :data="meetingTable">
          <ui-table-column label="请选择" width="80">
            <template slot-scope="scope">
              <ui-radio
                v-model="meetingRadio"
                :label="scope.$index"
                @change="getCurrentMeetingRow(scope.row)"
              >
                <i></i>
              </ui-radio>
            </template>
          </ui-table-column>
          <ui-table-column prop="meetingTitle" label="会议标题" align="center" min-width="150px"></ui-table-column>
          <ui-table-column prop="releaseDate" label="发布时间" align="center" min-width="150px"></ui-table-column>
        </ui-table>
      </div>
      <div class="footer">
        <span class="cancel-button float-left" @click="meetingDialog=!meetingDialog">取消</span>
        <span class="confirm-button float-right" @click="meetingDialog=!meetingDialog">确认</span>
      </div>
    </ui-dialog>
    <ui-dialog title="培训列表" center :visible.sync="trainDialog">
      <div class="dialog-content">
        <ui-table :data="trainTable">
          <ui-table-column label="请选择" width="80">
            <template slot-scope="scope">
              <ui-radio
                v-model="trainRadio"
                :label="scope.$index"
                @change="getCurrentTrainRow(scope.row)"
              >
                <i></i>
              </ui-radio>
            </template>
          </ui-table-column>
          <ui-table-column prop="trainTitle" label="培训标题" align="center" min-width="150px"></ui-table-column>
          <ui-table-column prop="releaseDate" label="发布时间" align="center" min-width="150px"></ui-table-column>
        </ui-table>
      </div>
      <div class="footer">
        <span class="cancel-button float-left" @click="trainDialog=!trainDialog">取消</span>
        <span class="confirm-button float-right" @click="trainDialog=!trainDialog">确认</span>
      </div>
    </ui-dialog>
    <ui-dialog title="机构动态列表" center :visible.sync="organDynamicDialog">
      <div class="dialog-content">
        <ui-table :data="organDynamicTable">
          <ui-table-column label="请选择" width="80">
            <template slot-scope="scope">
              <ui-radio
                v-model="organDynamicRadio"
                :label="scope.$index"
                @change="getCurrentOrganDynamicRow(scope.row)"
              >
                <i></i>
              </ui-radio>
            </template>
          </ui-table-column>
          <ui-table-column label="请选择" width="80">
            <template slot-scope="scope">
              <ui-radio v-model="rowRadio" :label="scope.$index" @change="getCurrentRow(scope.row)">
                <i></i>
              </ui-radio>
            </template>
          </ui-table-column>
          <ui-table-column prop="organDynamicTitle" label="机构动态标题" align="center" min-width="150px"></ui-table-column>
          <ui-table-column prop="releaseDate" label="发布时间" align="center" min-width="150px"></ui-table-column>
        </ui-table>
      </div>
      <div class="footer">
        <span class="cancel-button float-left" @click="organDynamicDialog=!organDynamicDialog">取消</span>
        <span class="confirm-button float-right" @click="organDynamicDialog=!organDynamicDialog">确认</span>
      </div>
    </ui-dialog>

    <div style="text-align: center">
      <Button text="提交" backgroundColor="#9B7041"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 会议列表弹框
      meetingDialog: false,
      meetingTable: [
        {
          order: 1,
          meetingTitle: '江南银行会议',
          releaseDate: '2020-09-09',
        },
        {
          order: 2,
          meetingTitle: '江南银行会议',
          releaseDate: '2020-09-09',
        },
      ],
      meetingRadio: '',
      choseMeetingRow: {},
      // 培训列表弹框
      trainDialog: false,
      trainTable: [
        {
          order: 1,
          trainTitle: '江南银行会议',
          releaseDate: '2020-09-09',
        },
        {
          order: 2,
          trainTitle: '江南银行会议',
          releaseDate: '2020-09-09',
        },
      ],
      trainRadio: '',
      choseTrainRow: {},
      // 机构动态列表弹框
      organDynamicDialog: false,
      organDynamicTable: [
        {
          order: 1,
          organDynamicTitle: '江南银行会议',
          releaseDate: '2020-09-09',
        },
        {
          order: 2,
          organDynamicTitle: '江南银行会议',
          releaseDate: '2020-09-09',
        },
      ],
      organDynamicRadio: '',
      choseOrganDynamicRow: {},
    }
  },
  methods: {
    // 获取会议列表选中行
    getCurrentMeetingRow(row) {
      this.choseMeetingRow = row
    },
    // 获取培训列表选中行
    getCurrentTrainRow(row) {
      this.choseTrainRow = row
    },
    // 获取机构动态列表选中行
    getCurrentOrganDynamicRow(row) {
      this.choseOrganDynamicRow = row
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  width: 700px;
  margin: 0 auto;
}
.choose-text {
  font-size: 14px;
  font-family: SimHei;
  font-weight: 400;
  text-decoration: underline;
  color: rgba(5, 141, 215, 1);
  margin-left: 20px;
}

/* 弹出框 */
.wrap /deep/ .ui-dialog--center .ui-dialog__body {
  padding: 0px 0px;
}
.wrap /deep/ .ui-dialog__header {
  background: rgba(245, 246, 248, 1);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px 4px 0px 0px;
}
.wrap /deep/ .ui-dialog__title {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.dialog-content {
  padding: 100px 100px;
}
.footer {
  width: 100%;
  height: 83px;
}
.cancel-button {
  display: inline-block;
  width: 50%;
  height: 83px;
  line-height: 83px;
  background: rgba(238, 238, 238, 1);
  text-align: center;
  font-size: 20px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.confirm-button {
  display: inline-block;
  width: 50%;
  height: 83px;
  line-height: 83px;
  background: rgba(155, 112, 65, 1);
  text-align: center;
  font-size: 20px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>