<template>
  <div class="page">
    <p class="page_title">404 page not found</p>
    <ui-button class="ui-mt" @click="$router.replace({ path: '/' })">
      {{ $t('views.system.error.404.back') }}
    </ui-button>
  </div>
</template>

<style lang="scss" scoped>
.page {
  background: #303133;
  background-blend-mode: multiply,multiply;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .page_title {
    font-size: 20px;
    color: #FFF;
  }
}
</style>
