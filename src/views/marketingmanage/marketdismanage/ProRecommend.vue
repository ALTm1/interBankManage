<!--
 * @Author: your name
 * @Date: 2020-07-29 16:03:32
 * @LastEditTime: 2020-08-04 09:53:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\views\marketingmanage\marketdismanage\ProRecommend.vue
--> 
<template>
  <div class="pro-recommend-wrap">
    <div class="pro-block">
      <p class="table-title">产品1</p>
      <ui-table :data="tableData">
        <ui-table-column prop="order" label="序号" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="proLevelOne" label="产品一级分类" align="center" min-width="200px"></ui-table-column>
        <ui-table-column prop="proLevelTwo" label="产品二级分类" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="tradeDirec" label="交易方向" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="proName" label="产品名称" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="organName" label="机构全称" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="proRate" label="利率" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="timeLimit" label="期限" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="money" label="金额" align="center" min-width="100px"></ui-table-column>
        <!-- <ui-table-column label="操作" align="center" min-width="200px">
          <template slot-scope="scope">
            <ui-button
              class="operator-button"
              @click="goModify(scope.row)"
              type="text"
              size="small"
            >修改</ui-button>
          </template>
        </ui-table-column>-->
      </ui-table>
    </div>
    <div class="pro-block">
      <p class="table-title">产品2</p>
      <ui-table :data="tableData">
        <ui-table-column prop="order" label="序号" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="proLevelOne" label="产品一级分类" align="center" min-width="200px"></ui-table-column>
        <ui-table-column prop="proLevelTwo" label="产品二级分类" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="tradeDirec" label="交易方向" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="proName" label="产品名称" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="organName" label="机构全称" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="proRate" label="利率" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="timeLimit" label="期限" align="center" min-width="100px"></ui-table-column>
        <ui-table-column prop="money" label="金额" align="center" min-width="100px"></ui-table-column>
        <!-- <ui-table-column label="操作" align="center" min-width="200px">
          <template slot-scope="scope">
            <ui-button
              class="operator-button"
              @click="goModify(scope.row)"
              type="text"
              size="small"
            >修改</ui-button>
          </template>
        </ui-table-column>-->
      </ui-table>
    </div>
    <div class="pro-block add-pro-wrap">
      <p class="table-title">产品3</p>
      <div class="add-button" slot="reference" @click="proPopup = !proPopup">
        <span class="add-text">+添加</span>
      </div>
      <ui-dialog title="产品列表" center :visible.sync="proPopup">
        <ui-form class="form-block clear" ref="ruleForm" :model="form" label-width="100px">
          <ui-form-item label="产品一级分类" class="sel-row">
            <div class="float-left sel-row-left">
              <ui-select v-model="form.proLevelOne" placeholder="请选择" multiple>
                <div v-for="item in form.proLevelOneList" :key="item.label">
                  <ui-option :label="item.label" :value="item.value"></ui-option>
                </div>
              </ui-select>
            </div>
          </ui-form-item>
          <ui-form-item label="产品二级分类" class="sel-row">
            <div class="float-right">
              <ui-select v-model="form.proLevelTwo" placeholder="请选择" multiple>
                <div v-for="item in form.proLevelTwoList" :key="item.label">
                  <ui-option :label="item.label" :value="item.value"></ui-option>
                </div>
              </ui-select>
            </div>
          </ui-form-item>
          <ui-form-item label="交易方向" class="sel-row">
            <div class="float-left sel-row-left">
              <ui-select v-model="form.tradeDirec" placeholder="请选择" multiple>
                <div v-for="item in form.tradeDirecList" :key="item.label">
                  <ui-option :label="item.label" :value="item.value"></ui-option>
                </div>
              </ui-select>
            </div>
          </ui-form-item>
          <ui-form-item label="产品期限" class="sel-row">
            <div class="float-right">
              <ui-select v-model="form.expires" placeholder="请选择" multiple>
                <div v-for="item in form.expiresList" :key="item.label">
                  <ui-option :label="item.label" :value="item.value"></ui-option>
                </div>
              </ui-select>
            </div>
          </ui-form-item>
          <ui-form-item label="最小利率" class="sel-row">
            <div class="float-left sel-row-left">
              <ui-input v-model="form.minRate" placeholder="请输入最小利率值"></ui-input>
            </div>
          </ui-form-item>
          <ui-form-item label="最大利率" class="sel-row">
            <div class="float-right">
              <ui-input v-model="form.maxRate" placeholder="请输入最大利率值"></ui-input>
            </div>
          </ui-form-item>
          <!-- 查询按钮 -->
          <div class="query-buttons">
            <Button
              text="查询"
              backgroundColor="#CE2848"
              marginRight="100px"
              @click.native="showTable=!showTable"
            ></Button>
            <Button text="重置" backgroundColor="#9B7041"></Button>
          </div>
        </ui-form>
        <ui-table :data="tableData" v-if="showTable">
          <ui-table-column label="请选择" width="80">
            <template slot-scope="scope">
              <ui-radio v-model="rowRadio" :label="scope.$index" @change="getCurrentRow(scope.row)">
                <i></i>
              </ui-radio>
            </template>
          </ui-table-column>
          <ui-table-column prop="proLevelOne" label="产品一级分类" align="center" min-width="100px"></ui-table-column>
          <ui-table-column prop="proLevelTwo" label="产品二级分类" align="center" min-width="100px"></ui-table-column>
          <ui-table-column prop="tradeDirec" label="交易方向" align="center" min-width="100px"></ui-table-column>
          <ui-table-column prop="proName" label="产品名称" align="center" min-width="100px"></ui-table-column>
          <ui-table-column prop="organName" label="机构全称" align="center" min-width="100px"></ui-table-column>
          <ui-table-column prop="proRate" label="利率" align="center" min-width="100px"></ui-table-column>
          <ui-table-column prop="timeLimit" label="期限" align="center" min-width="100px"></ui-table-column>
          <ui-table-column prop="money" label="金额" align="center" min-width="100px"></ui-table-column>
        </ui-table>
        <div class="footer">
          <span class="cancel-button float-left" @click="proPopup=!proPopup">取消</span>
          <span class="confirm-button float-right" @click="proPopup=!proPopup">确认</span>
        </div>
      </ui-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        proLevelOne: [],
        proLevelOneList: [
          {
            label: '同业存款',
            value: '同业存款',
          },
          {
            label: '线上资金',
            value: '线上资金',
          },
        ],
        proLevelTwo: [],
        proLevelTwoList: [
          {
            label: '同业存款',
            value: '同业存款',
          },
          {
            label: '线上资金',
            value: '线上资金',
          },
        ],
        tradeDirec: [],
        tradeDirecList: [
          {
            label: '买入',
            value: '买入',
          },
          {
            label: '卖出',
            value: '卖出',
          },
        ],
        expires: '',
        expiresList: [
          {
            label: '全部',
            value: '全部',
            active: false,
          },
          {
            label: '30天以内',
            value: '30天以内',
            active: false,
          },
          {
            label: '30-90天',
            value: '30-90天',
            active: false,
          },
          {
            label: '91-180天',
            value: '91-180天',
            active: false,
          },
          {
            label: '181-360天',
            value: '181-360天',
            active: false,
          },
          {
            label: '一年以上',
            value: '一年以上',
            active: false,
          },
        ],
        minRate: '',
        maxRate: '',
      },
      showTable: false,
      rowRadio: '',
      tableData: [
        {
          order: 1,
          proLevelOne: '同业资金',
          proLevelTwo: '同业存放',
          tradeDirec: '资金融入',
          proName: 'XXXX',
          organName: '江南银行',
          proRate: '4.55%',
          timeLimit: '360天',
          money: '3500万',
        },
        {
          order: 2,
          proLevelOne: '同业资金',
          proLevelTwo: '同业存放',
          tradeDirec: '资金融入',
          proName: 'XXXX',
          organName: '江南银行',
          proRate: '4.55%',
          timeLimit: '360天',
          money: '3500万',
        },
      ],
      // 产品列表弹框
      proPopup: false,
      choseRow: {},
    }
  },
  methods: {
    // 产品添加
    proAdd() {
      this.proPopup = true
    },
    // 获取选中行
    getCurrentRow(row) {
      this.choseRow = row
    },
  },
}
</script>

<style lang="css" scoped>
.pro-recommend-wrap {
  background: #ffffff;
}

.table-title {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  padding-left: 20px;
}

.pro-block {
  margin-bottom: 20px;
}

.add-pro-wrap {
  padding-bottom: 30px;
  box-sizing: border-box;
}

/* 添加按钮 */
.add-button {
  width: 120px;
  height: 39px;
  line-height: 39px;
  border: 1px solid rgba(206, 40, 72, 1);
  border-radius: 20px;
  text-align: center;
  margin: 20px auto;
}
.add-text {
  font-size: 14px;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: rgba(206, 40, 72, 1);
}

.sel-row {
  display: inline-block;
}
.sel-row-left {
  margin-right: 140px;
}

.query-buttons {
  text-align: center;
  margin: 40px 0;
}

.wrap /deep/ .ui-dialog {
  width: 1127px;
}
.wrap /deep/ .ui-input__inner {
  width: 330px;
  height: 33px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(231, 232, 239, 1);
  border-radius: 3px 3px 3px 3px;
}
.wrap /deep/ .ui-input--default {
  display: inline-block;
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

.form-block {
  padding: 20px 40px;
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
.wrap /deep/ .ui-dialog--center .ui-dialog__body {
  padding: 0px 0px;
}
</style>