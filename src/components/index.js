/*
 * @Author: your name
 * @Date: 2020-07-27 19:06:57
 * @LastEditTime: 2020-07-31 13:34:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\components\index.js
 */
import Vue from 'vue'

import {
  ContainerFull,
  IconFa,
  IconSvg
} from '@csii/vx-web-ext'


// 引入自定义Button组件
import Button from "@/components/button"

// 引入自定义展示单元Item
import DisplayItem from '@/components/displayitem'

// 引入自定义HeaderItem
import HeaderItem from '@/components/headeritem'

// 注意 有些组件使用异步加载会有影响
Vue.component('ui-container-full', ContainerFull)
Vue.component('ui-icon-fa', IconFa)
Vue.component('ui-icon-svg', IconSvg)

Vue.component('Button', Button)
Vue.component('DisplayItem', DisplayItem)
Vue.component('HeaderItem', HeaderItem)

