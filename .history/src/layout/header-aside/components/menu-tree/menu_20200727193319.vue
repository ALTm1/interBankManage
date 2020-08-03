<template>
  <div class="menu-list">
    <div class="menu-wrap">
      <div class="menu-admin">
        <span>系统员管理1</span>
        <div>
          <li @click="dialogVisible = true">退出登录</li>
        </div>
      </div>
      <ui-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen">
        <ui-submenu index="2">
          <template slot="title">
            <span>系统管理</span>
          </template>
          <ui-menu-item index="2-1" @click="operate">操作员管理</ui-menu-item>
          <ui-menu-item index="2-2" @click="role">角色管理</ui-menu-item>
          <ui-menu-item index="2-3">日志管理</ui-menu-item>
          <ui-menu-item index="2-4">登录密码修改</ui-menu-item>
          <ui-menu-item index="2-5">登录密码重置</ui-menu-item>
        </ui-submenu>
        <ui-submenu index="3">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>参数管理</span>
          </template>
          <ui-menu-item index="3-1">产品标签维护</ui-menu-item>
          <ui-menu-item index="3-2">部门维护</ui-menu-item>
          <ui-menu-item index="3-3">审批菜单维护</ui-menu-item>
        </ui-submenu>
        <ui-submenu index="4">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>业务管理</span>
          </template>
          <ui-menu-item index="4-1">行外机构信息维护</ui-menu-item>
          <ui-menu-item index="4-2">用户管理</ui-menu-item>
          <ui-menu-item index="4-3">产品维护</ui-menu-item>
          <ui-menu-item index="4-4">文件管理</ui-menu-item>
        </ui-submenu>
        <ui-submenu index="5">
          <template slot="title">
            <span>授信管理</span>
          </template>
          <ui-menu-item index="5-1">授信额度查询</ui-menu-item>
          <ui-menu-item index="5-2">授信文件管理</ui-menu-item>
        </ui-submenu>
        <ui-submenu index="6">
          <template slot="title">
            <span>营销管理</span>
          </template>
          <ui-menu-item index="6-1">会议管理</ui-menu-item>
          <ui-menu-item index="6-2">培训管理</ui-menu-item>
          <ui-menu-item index="6-3">机构动态管理</ui-menu-item>
          <ui-menu-item index="6-4">营销展示管理</ui-menu-item>
        </ui-submenu>
        <ui-submenu index="7">
          <template slot="title">
            <span>审批管理</span>
          </template>
          <ui-menu-item index="7-1">机构认证审批</ui-menu-item>
          <ui-menu-item index="7-2">后管交易审批</ui-menu-item>
          <ui-menu-item index="7-3">审批记录查询</ui-menu-item>
        </ui-submenu>
        <ui-menu-item index="8">
          <i class="el-icon-setting"></i>
          <span slot="title">联盟圈管理</span>
        </ui-menu-item>
        <ui-submenu index="9">
          <template slot="title">
            <span>报表管理</span>
          </template>
          <ui-menu-item index="9-1">个人票据统计</ui-menu-item>
          <ui-menu-item index="9-2">团队票据统计</ui-menu-item>
          <ui-menu-item index="9-3">FTP信息维护</ui-menu-item>
          <ui-menu-item index="9-4">分组信息维护</ui-menu-item>
        </ui-submenu>
        <ui-menu-item index="10">
          <i class="el-icon-setting"></i>
          <span slot="title">客户端版本管理</span>
        </ui-menu-item>
        <ui-submenu index="11">
          <template slot="title">
            <span>行为分析</span>
          </template>
          <ui-menu-item index="11-1">功能模块访问频次</ui-menu-item>
          <ui-menu-item index="11-2">功能模块访问时长</ui-menu-item>
        </ui-submenu>
      </ui-menu>
    </div>
    <!-- 退出登录 -->
    <ui-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>确认退出？</span>
      <span slot="footer" class="dialog-footer">
        <ui-button @click="dialogVisible = false">取 消</ui-button>
        <ui-button type="primary" @click="getout">确 定</ui-button>
      </span>
    </ui-dialog>
  </div>
</template>
<script>
export default {
  name: "menuTree",
  components: {},
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    role() {
      this.$router.push("roleManage");
    },
    operate() {
      this.$router.push("operatemanage");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getout() {
      this.dialogVisible = false;
      this.$router.push("/login");
    }
  }
};
</script>
<style>
.ui-menu-item.is-active {
  color: #ce2848;
}
.ui-menu--horizontal > .ui-submenu .ui-submenu__title {
  font-size: 16px !important;
  line-height: 50px !important;
  height: 50px !important;
}
.ui-icon-arrow-down:before {
  content: "";
  display: none;
}
.theme-vx .ui-menu-item i,
.theme-vx .ui-submenu__title i {
  width: 0 !important;
  display: none !important;
}
.ui-menu--horizontal > .ui-submenu {
  text-align: center !important;
}
.ui-menu--horizontal > .ui-menu-item {
  font-size: 16px;
  line-height: 50px;
}
.ui-submenu .ui-submenu__title .ui-menu-item {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.menu-item {
  text-align: center;
  height: 50px;
  line-height: 50px;
}
</style>