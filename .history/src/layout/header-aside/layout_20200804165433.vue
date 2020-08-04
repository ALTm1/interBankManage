<template>
  <div>
    <!-- 顶栏 -->
    <div class="tab-menu">
      <img src="~@/assets/image/tab.png" alt />
      <!-- <menuTree></menuTree> -->
      <div class="tab-title">
        <li>{{user}}，欢迎您！</li>
        <li>这是您第{{time}}次登录，上次登录时间：{{}}</li>
      </div>
    </div>
    <!-- 退出登录 -->
    <ui-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>确认退出？</span>
      <span slot="footer" class="dialog-footer">
        <ui-button @click="dialogVisible = false">取 消</ui-button>
        <ui-button type="primary" @click="getout">确 定</ui-button>
      </span>
    </ui-dialog>

    <!-- 半透明遮罩 -->
    <!-- <div class="ui-layout-header-aside-mask"></div> -->
    <!-- 主体内容 -->
    <div class="menu-side clear">
      <div class="menu-wrap float-left">
        <div class="menu-admin">
          <span>系统员管理1</span>
          <div>
            <li @click="dialogVisible = true">退出登录</li>
          </div>
        </div>
        <ui-menu default-active="1" class="ui-menu-vertical-demo" @open="handleOpen">
          <!-- <ui-submenu index="1">
            <template slot="title">
              <i class="ui-icon-location"></i>
              <span>我的主页</span>
            </template>
            <ui-menu-item index="1-1">选项1</ui-menu-item>
            <ui-menu-item index="1-2">选项2</ui-menu-item>
            <ui-submenu index="1-4">
              <template slot="title">选项4</template>
              <ui-menu-item index="1-4-1">选项1</ui-menu-item>
            </ui-submenu>
          </ui-submenu>-->
          <ui-submenu index="2">
            <template slot="title">
              <i class="ui-icon-location"></i>
              <span>系统管理</span>
            </template>
            <ui-menu-item index="2-1" @click="system">操作员管理</ui-menu-item>
            <ui-menu-item index="2-2" @click="role">角色管理</ui-menu-item>
            <ui-menu-item index="2-3" @click="log">日志管理</ui-menu-item>
            <ui-menu-item index="2-4">登录密码修改</ui-menu-item>
            <ui-menu-item index="2-5" @click="reset">登录密码重置</ui-menu-item>
          </ui-submenu>

          <!-- <ui-menu-item index="3">
            <i class="ui-icon-document"></i>
            <span slot="title">机构管理</span>
          </ui-menu-item>
          <ui-menu-item index="4">
            <i class="ui-icon-setting"></i>
            <span slot="title">用户管理</span>
          </ui-menu-item>
          <ui-menu-item index="5">
            <i class="ui-icon-setting"></i>
            <span slot="title">产品查询</span>
          </ui-menu-item>
          <ui-menu-item index="6">
            <i class="ui-icon-setting"></i>
            <span slot="title">任务中心</span>
          </ui-menu-item>
          <ui-menu-item index="7">
            <i class="ui-icon-setting"></i>
            <span slot="title">个人中心</span>
          </ui-menu-item>
          <ui-menu-item index="8">
            <i class="ui-icon-setting"></i>
            <span slot="title">同业圈管理</span>
          </ui-menu-item> -->
          <!-- <ui-menu-item index="9">
            <i class="ui-icon-setting"></i>
            <span slot="title">举报及反馈管理</span>
          </ui-menu-item> -->
          
          <ui-submenu index="11">
            <template slot="title">
              <i class="ui-icon-location"></i>
              <span>参数管理</span>
            </template>
            <ui-menu-item index="11-1" @click="goTagService">产品标签维护</ui-menu-item>
            <ui-menu-item index="11-2" @click="goSection">部门维护</ui-menu-item>
            <ui-menu-item index="11-3" @click="goApproveMenuService">审批菜单维护</ui-menu-item>
          </ui-submenu>
          <ui-submenu index="12">
            <template slot="title">
              <i class="ui-icon-location"></i>
              <span>业务管理</span>
            </template>
            <ui-menu-item index="12-1" @click="goOutBankInfo">行外机构信息维护</ui-menu-item>
            <ui-menu-item index="12-2" @click="goUserManagement">用户管理</ui-menu-item>
            <ui-menu-item index="12-3" @click="goProductmaintence">产品维护</ui-menu-item>
            <ui-menu-item index="12-4" @click="goFilesManagement">文件管理</ui-menu-item>
          </ui-submenu>
          <ui-submenu index="13">
            <template slot="title">
              <i class="ui-icon-location"></i>
              <span>授信管理</span>
            </template>
            <ui-menu-item index="13-1" @click="goCreditQuery">授信额度查询</ui-menu-item>
            <ui-menu-item index="13-2" @click="goCreditFilesManagement">授信文件管理</ui-menu-item>
          </ui-submenu>
          <ui-submenu index="14">
            <template slot="title">
              <i class="ui-icon-location"></i>
              <span>营销管理</span>
            </template>
            <ui-menu-item index="14-1" @click="goMeetingManage">会议管理</ui-menu-item>
            <ui-menu-item index="14-2" @click="goTrainingManage">培训管理</ui-menu-item>
            <ui-menu-item index="14-3" @click="goOrganManage">机构动态管理</ui-menu-item>
            <ui-menu-item index="14-4" @click="goMarketDisManage">营销展示管理</ui-menu-item>
          </ui-submenu>
          <ui-submenu index="15">
            <template slot="title">
              <i class="ui-icon-location"></i>
              <span>审批管理</span>
            </template>
            <ui-menu-item index="15-1" @click="goOrganApprove">机构认证审批</ui-menu-item>
            <ui-menu-item index="15-2" @click="goBackManApprove">后管交易审批</ui-menu-item>
            <ui-menu-item index="15-3" @click="goApprovalRecord">审批记录查询</ui-menu-item>
          </ui-submenu>
          <ui-submenu index="16">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>行为模块分析</span>
            </template>
            <ui-menu-item index="16-1" @click="goAccessFrequency">功能模块访问频次</ui-menu-item>
            <ui-menu-item index="16-2" @click="goAccessTime">功能模块访问时长</ui-menu-item>
          </ui-submenu>
          <ui-submenu index="17">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>联盟圈管理</span>
            </template>
            <ui-menu-item index="17-1" @click="goUnionlapmanagement">联盟圈管理</ui-menu-item>
          </ui-submenu>
          <ui-submenu index="18">
            <template slot="title">
              <i class="ui-icon-location"></i>
              <span>报表管理</span>
            </template>
            <ui-menu-item index="18-1" @click="personal">个人票据统计</ui-menu-item>
            <ui-menu-item index="18-2" @click="team">团队票据统计</ui-menu-item>
            <ui-menu-item index="18-3" @click="group">分组信息维护</ui-menu-item>
          </ui-submenu>
          <ui-menu-item index="10">
            <i class="ui-icon-setting"></i>
            <span slot="title" @click="client">客户端版本管理</span>
          </ui-menu-item>
        </ui-menu>
      </div>
      <!-- 右侧 -->
      <div class="menu-right float-right">
        <router-view />
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import uiMenuSide from './components/menu-side'
import uiMenuHeader from './components/menu-header'
import uiTabs from './components/tabs'
import uiHeaderFullscreen from './components/header-fullscreen'
import uiHeaderLocales from './components/header-locales'
import uiHeaderSearch from './components/header-search'
import uiHeaderSize from './components/header-size'
import uiHeaderTheme from './components/header-theme'
import uiHeaderUser from './components/header-user'
import uiHeaderLog from './components/header-log'
import uiHeaderColor from './components/header-color'
import { mapState, mapGetters, mapActions } from 'vuex'
import mixinSearch from './mixins/search'
import menuTree from './components/menu-tree/menu'
import home from '../../pages/home/Home'
export default {
  name: 'ui-layout-header-aside',
  mixins: [mixinSearch],
  components: {
    uiMenuSide,
    uiMenuHeader,
    uiTabs,
    uiHeaderFullscreen,
    uiHeaderLocales,
    uiHeaderSearch,
    uiHeaderSize,
    uiHeaderTheme,
    uiHeaderUser,
    uiHeaderLog,
    uiHeaderColor,
    menuTree,
    home,
  },
  data() {
    return {
      dialogVisible: false,
      // 用户身份
      user: '系统管理员1',
      time: '2',
      // [侧边栏宽度] 正常状态
      asideWidth: '200px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px',
    }
  },
  computed: {
    ...mapState('vxadmin', {
      keepAlive: (state) => state.page.keepAlive,
      grayActive: (state) => state.gray.active,
      transitionActive: (state) => state.transition.active,
      asideCollapse: (state) => state.menu.asideCollapse,
    }),
    ...mapGetters('vxadmin', {
      themeActiveSetting: 'theme/activeSetting',
    }),
    /**
     * @description 最外层容器的背景图片样式
     */
    styleLayoutMainGroup() {
      /* eslint-disable indent */
      return {
        ...(this.themeActiveSetting.backgroundImage
          ? {
              backgroundImage: `url('${this.$baseUrl}${this.themeActiveSetting.backgroundImage}')`,
            }
          : {}),
      }
    },
  },
  methods: {
    ...mapActions('vxadmin/menu', ['asideCollapseToggle']),
    /**
     * 接收点击切换侧边栏的按钮
     */
    handleToggleAside() {
      this.asideCollapseToggle()
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    // 操作员管理
    system() {
      this.$router.push('/index/system')
    },
    // 角色管理
    role() {
      this.$router.push('/index/role')
    },
    // 密码重置
    reset(){
      this.$router.push('/index/loginreset')
    },
    //日志管理
    log(){
      this.$router.push('/index/log')
    },
    // 个人票务
     personal(){
       this.$router.push('/index/personalbill')
     },
    // 团队票务
    group(){
      this.$router.push('/index/group')
    },
    team(){
    this.$router.push('/index/teamlbill')
    },
    // 客户端
    client(){
      this.$router.push('/index/client')
    },
    /***参数管理***/
    // 产品标签维护
    goTagService() {
      this.$router.push('/productService')
    },
    // 部门维护
    goSection() {
      this.$router.push('/sectionService')
    },
    // 审批菜单维护
    goApproveMenuService() {
      this.$router.push('/menuService')
    },
    /**业务管理***/
    //  行外机构信息管理
    goOutBankInfo() {
      this.$router.push('/outBankInfoMaintain')
    },
    // 用户管理
    goUserManagement() {
      this.$router.push('/userQuery')
      productQuery
    },
    // 产品维护
    goProductmaintence() {
      this.$router.push('/productQuery')
    },
    // 文件管理
    goFilesManagement() {
      this.$router.push('/filesManagement')
    },
    /***
     * 授信管理
     */
    //授信额度查询
    goCreditQuery() {
      this.$router.push('/lineCreditQuery')
    },
    //授信文件管理
    goCreditFilesManagement() {
      this.$router.push('/creditFilesManagement')
    },
    /***
     * 行为分析
     */
    //访问频次
    goAccessFrequency() {
      this.$router.push('/accessFrequency')
    },
    //访问时长
    goAccessTime() {
      this.$router.push('/accessTime')
    },
    /***
     * 联盟圈管理
     */
    goUnionlapmanagement() {
      this.$router.push('/unionlapQuery')
    },

    /** 营销管理 **/

    // 会议管理
    goMeetingManage() {
      this.$router.push('/marketingmanage/meetingmanage/meetingindex')
    },
    // 培训管理
    goTrainingManage() {
      this.$router.push('/marketingmanage/trainingmanage/trainingindex')
    },
    // 机构动态管理
    goOrganManage() {
      this.$router.push('/marketingmanage/organmanage/organindex')
    },
    // 营销展示管理
    goMarketDisManage() {
      this.$router.push('/marketingmanage/marketdismanage/marketdisindex')
    },

    /** 审批管理 **/

    // 机构认证审批
    goOrganApprove() {
      this.$router.push('/approvalmanage/organapprove/organapproveindex')
    },
    // 后管交易审批
    goBackManApprove() {
      this.$router.push('/approvalmanage/backmanapprove/backmanapproveindex')
    },
    // 审批记录查询
    goApprovalRecord() {
      this.$router.push('/approvalmanage/approvalrecord/approvalrecordqry')
    },

    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    getout() {
      this.dialogVisible = false
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss">
// 注册主题
@import '~@/assets/style/theme/register.scss';
</style>
<style lang="scss">
.tab-menu {
  background-color: #fff;
  border-bottom: 6px solid #ce2848;
  display: -webkit-box;
  img {
    width: 140px;
    height: 30px;
    margin: 10px 0;
  }
  span {
    height: 50px;
    line-height: 50px;
    display: -webkit-box;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
  li {
    font-size: 16px;
  }
  p {
    color: #cccccc;
    display: inline;
    margin: 0 30px;
  }
}
.menu-badge {
  position: relative;
  &::after {
    content: attr(data-badge);
    position: absolute;
    top: -50%;
    right: 0;
    transform: translateX(80%) translateY(-4px);
    color: #f00;
    line-height: 1em;
    font-style: italic;
    z-index: 1;
  }
}
.tab-title {
  display: -webkit-box;
  line-height: 50px;
  margin-left: 100px;
}
.menu-side {
  background: rgb(240, 239, 244);
}

.menu-wrap {
  // width: 300px;
  background-color: #fff;
}
.menu-right {
  width: calc(100% - 196px);
  min-height: 92vh;
  padding: 20px 20px;
  box-sizing: border-box;
  background: rgba(239, 240, 244, 1);
}
.menu-admin {
  // width:196px;
height:104px;
// line-height: 104px;
  background: #DADADA;
  text-align: center;
  cursor: pointer;
}
.menu-admin span{
  font-size:17px;
font-weight:400;
color: #fff;
margin-top: 32px;
}
.menu-admin li{
  font-size:15px;
font-weight:400;
color:rgba(128,195,223,1);

}
</style>
