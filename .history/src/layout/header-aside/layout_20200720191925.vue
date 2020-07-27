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
    <!-- 半透明遮罩 -->
    <!-- <div class="ui-layout-header-aside-mask"></div> -->
    <!-- 主体内容 -->
    <div class="menu-side">
      <div class="menu-wrap">
        <ui-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
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
          <ui-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">系统管理</span>
          </ui-menu-item>
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
        </ui-menu>
      </div>
      <!-- 右侧 -->
      
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import uiMenuSide from "./components/menu-side";
import uiMenuHeader from "./components/menu-header";
import uiTabs from "./components/tabs";
import uiHeaderFullscreen from "./components/header-fullscreen";
import uiHeaderLocales from "./components/header-locales";
import uiHeaderSearch from "./components/header-search";
import uiHeaderSize from "./components/header-size";
import uiHeaderTheme from "./components/header-theme";
import uiHeaderUser from "./components/header-user";
import uiHeaderLog from "./components/header-log";
import uiHeaderColor from "./components/header-color";
import { mapState, mapGetters, mapActions } from "vuex";
import mixinSearch from "./mixins/search";
import menuTree from "./components/menu-tree/menu";
import home from "../../pages/home/Home";
export default {
  name: "ui-layout-header-aside",
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
    home
  },
  data() {
    return {
      // 用户身份
      user: "系统管理员1",
      time: "2",
      // [侧边栏宽度] 正常状态
      asideWidth: "200px",
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: "65px"
    };
  },
  computed: {
    ...mapState("vxadmin", {
      keepAlive: state => state.page.keepAlive,
      grayActive: state => state.gray.active,
      transitionActive: state => state.transition.active,
      asideCollapse: state => state.menu.asideCollapse
    }),
    ...mapGetters("vxadmin", {
      themeActiveSetting: "theme/activeSetting"
    }),
    /**
     * @description 最外层容器的背景图片样式
     */
    styleLayoutMainGroup() {
      /* eslint-disable indent */
      return {
        ...(this.themeActiveSetting.backgroundImage
          ? {
              backgroundImage: `url('${this.$baseUrl}${this.themeActiveSetting.backgroundImage}')`
            }
          : {})
      };
    }
  },
  methods: {
    ...mapActions("vxadmin/menu", ["asideCollapseToggle"]),
    /**
     * 接收点击切换侧边栏的按钮
     */
    handleToggleAside() {
      this.asideCollapseToggle();
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
// 注册主题
@import "~@/assets/style/theme/register.scss";
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
}
.menu-wrap {
  width: 300px;
  background-color: #fff;
}
</style>
