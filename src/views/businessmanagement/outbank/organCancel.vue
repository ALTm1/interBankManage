<template>
  <!-- 机构注销页 -->
  <div class="info-detail">
    <!-- label-width="150px" -->
    <div class="right-wrap">
      <block-title blockTitle="机构注销"></block-title>

      <div class="form">
        <ui-row class="list-title" style="padding-top: 33px">
          <div class="img"></div>
          <span>机构列表</span>
        </ui-row>
        <ui-row style="background: #fff;">
          <ui-col :span="12">
            <!-- <ui-form-item label="机构全称"> -->
            <div class="item">
              <div class="item-label">
                <div>机构全称</div>
                <!-- <div>啦啦啦</div> -->
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>机构类型</div>
                <!-- <div>啦啦啦</div> -->
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>是否为总机构</div>
                <!-- <div>啦啦啦</div> -->
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>归属机构全称</div>
                <!-- <div>啦啦啦</div> -->
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
          </ui-col>
          <ui-col :span="12">
            <div class="item">
              <div class="item-label">
                <div>归属机构统一社会信用代码</div>
                <!-- <div>啦啦啦</div> -->
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>归属机构组织机构代码证</div>
                <!-- <div>啦啦啦</div> -->
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>附件-营业执照扫描件</div>
                <div class="folding">（加盖公章）</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>附件-授权委托书</div>
                <div class="folding1">（加盖公章）</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
          </ui-col>
        </ui-row>
      </div>
      <ui-row class="list-title" style="padding-top: 33px">
        <div class="img"></div>
        <span>证件信息</span>
      </ui-row>
      <div class="form">
        <ui-row style="background: #fff;">
          <ui-col :span="12">
            <div class="item">
              <div class="item-label">
                <div>统一社会信用代码</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>组织机构代码证</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>法定代表人</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
          </ui-col>
          <ui-col :span="12">
            <div class="item">
              <div class="item-label">
                <div>资产规模（亿）</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>净资产（亿）</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
          </ui-col>
        </ui-row>
      </div>
      <ui-row class="list-title" style="padding-top: 33px">
        <div class="img"></div>
        <span>当前机构地址</span>
      </ui-row>
      <div class="form">
        <ui-row>
          <ui-col :span="12">
            <div class="item">
              <div class="item-label">
                <div>省</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>市</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>详细地址</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>联系人</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>电话</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>手机号码</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
          </ui-col>
          <ui-col :span="12">
            <div class="item">
              <div class="item-label">
                <div>传真</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>电子邮箱</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label">
                <div>用户信息描述</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>

            <div class="item">
              <div class="item-label fold">
                <div>附件-营业执照扫描件</div>
                <div class="folding">（加盖公章）</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
            <div class="item">
              <div class="item-label fold">
                <div>附件-授权委托书</div>
                <div class="folding1">（加盖公章）</div>
              </div>
              <div class="right-item">{{form.tagName}}</div>
            </div>
          </ui-col>
        </ui-row>
        <ui-row class="btn">
          <ui-button type="primary" class="back-btn" @click="goBack">返回</ui-button>
          <ui-button type="primary" class="continue-next sigel-btn" @click="submitForm('form')">确认</ui-button>
        </ui-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'organCancel',
  computed: {},
  data() {
    return {
      form: {
        ownScialCode: '',
        tagName: '蓝天大地',
        remark: '一千万',
      },
    }
  },
  methods: {
    // 点击补录
    submitForm(formName) {
      this.$router.push('/organCancelRes')
      // 只对个别输入框进行校验
      /* this.$refs[formName].validateField(
        ["payeeAccountAcNo","trsAmount"],
        (valid) => {
          // valid为""时校验通过
          if (!valid) {
            this.onSubmit();
          } else {
            return false;
          }
        }
      ); */
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     //   this.onSubmit()
      //   } else {
      //     return false
      //   }
      // })
    },
    // 组装数据
    onSubmit() {
      // 获取上送数据，对数据按照要求的格式上送
    },
    // 提交表单
    submitPre(pargs) {},
    // 返回按钮
    goBack() {
      // this.isContentShow = '0'
      // this.btnText = '新增'
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
.info-detail {
  .right-wrap {
    background: #fff;
  }
  .item {
    font-size: 14px;
    font-family: SourceHanSansCN;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 18px;
    .item-label {
      display: inline-block;
      width: 170px;
      text-align: right;
      margin-right: 20px;
    }
    .fold {
      margin-top: -8px;
    }
    .folding {
      width: 70%;
      margin: 0 auto;
    }
    .folding1 {
      width: 90%;
      margin: 0 auto;
    }

    .right-item {
      display: inline-block;
    }
  }
}
</style>
