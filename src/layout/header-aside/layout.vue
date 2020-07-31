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
    <div class="menu-side">
      <div class="menu-wrap">
        <div class="menu-admin">
          <span>系统员管理1</span>
          <div>
            <li @click="dialogVisible = true">退出登录</li>
          </div>
        </div>
        <ui-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen">
          <ui-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>我的主页</span>
            </template>
            <ui-menu-item index="1-1">选项1</ui-menu-item>
            <ui-menu-item index="1-2">选项2</ui-menu-item>
            <ui-submenu index="1-4">
              <template slot="title">选项4</template>
              <ui-menu-item index="1-4-1">选项1</ui-menu-item>
            </ui-submenu>
          </ui-submenu>
          <ui-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统管理</span>
            </template>
            <ui-menu-item index="2-1" @click="operate">操作员管理</ui-menu-item>
            <ui-menu-item index="2-2" @click="system">角色管理</ui-menu-item>
            <ui-menu-item index="2-3">日志管理</ui-menu-item>
            <ui-menu-item index="2-4">登录密码修改</ui-menu-item>
            <ui-menu-item index="2-5">登录密码重置</ui-menu-item>
          </ui-submenu>

          <ui-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">机构管理</span>
          </ui-menu-item>
          <ui-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">用户管理</span>
          </ui-menu-item>
          <ui-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">产品查询</span>
          </ui-menu-item>
          <ui-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title">任务中心</span>
          </ui-menu-item>
          <ui-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title">个人中心</span>
          </ui-menu-item>
          <ui-menu-item index="8">
            <i class="el-icon-setting"></i>
            <span slot="title">同业圈管理</span>
          </ui-menu-item>
          <ui-menu-item index="9">
            <i class="el-icon-setting"></i>
            <span slot="title">举报及反馈管理</span>
          </ui-menu-item>
          <ui-menu-item index="10">
            <i class="el-icon-setting"></i>
            <span slot="title">客户端版本管理</span>
          </ui-menu-item>
          <ui-submenu index="11">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>参数管理</span>
            </template>
            <ui-menu-item index="11-1" @click="goTagService">产品标签维护</ui-menu-item>
            <ui-menu-item index="11-2" @click="goSection">部门维护</ui-menu-item>
            <ui-menu-item index="11-3" @click="goApproveMenuService">审批菜单维护</ui-menu-item>
          </ui-submenu>
          <ui-submenu index="12">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>业务管理</span>
            </template>
            <ui-menu-item index="12-1" @click="goOutBankInfo">行外机构信息维护</ui-menu-item>
            <ui-menu-item index="12-2" @click="goUserManagement">用户管理</ui-menu-item>
            <ui-menu-item index="12-3" @click="goProductmaintence">产品维护</ui-menu-item>
            <ui-menu-item index="12-4" @click="goFilesManagement">文件管理</ui-menu-item>
          </ui-submenu>
          <ui-submenu index="13">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>授信管理</span>
            </template>
            <ui-menu-item index="13-1" @click="goCreditQuery">授信额度查询</ui-menu-item>
            <ui-menu-item index="13-2" @click="goCreditFilesManagement">授信文件管理</ui-menu-item>
          </ui-submenu>
        </ui-menu>
      </div>
      <!-- 右侧 -->
      <div class="menu-right">
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
    system() {
      this.$router.push('rolemanage')
    },
    operate() {
      this.$router.push('operatemanage')
    },
    /***参数管理***/
    // 产品标签维护
    goTagService() {
      this.$router.push('productService')
    },
    // 部门维护
    goSection() {
      this.$router.push('sectionService')
    },
    // 审批菜单维护
    goApproveMenuService() {
      this.$router.push('menuService')
    },
    /**业务管理***/
    //  行外机构信息管理
    goOutBankInfo() {
      this.$router.push('outBankInfoMaintain')
    },
    // 用户管理
    goUserManagement() {
      this.$router.push('userQuery')
      productQuery
    },
    // 产品维护
    goProductmaintence() {
      this.$router.push('productQuery')
    },
    // 文件管理
    goFilesManagement() {
      this.$router.push('filesManagement')
    },
    /***
     * 授信管理
     */
    //授信额度查询
    goCreditQuery() {
      this.$router.push('lineCreditQuery')
    },
    //授信文件管理
    goCreditFilesManagement() {
      this.$router.push('creditFilesManagement')
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
  display: -webkit-box;
  background: rgb(240, 239, 244);
}

.menu-wrap {
  width: 300px;
  background-color: #fff;
}
.menu-right {
  width: calc(100% - 300px);
  min-height: 92vh;
  background: rgba(239, 240, 244, 1);
}
.menu-admin {
  background: #be9d62;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.menu-right {
  width: calc(100% - 300px);
}
</style>
