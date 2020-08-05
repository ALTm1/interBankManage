/*
 * @Author: your name
 * @Date: 2020-07-27 19:06:57
 * @LastEditTime: 2020-08-03 18:12:14
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

// 引入自定义BorderHeader 
import BorderHeader from '@/components/borderheader'
// 引入自定义结果页
import Result from '@/components/result'

// 引入块级标题
import BlockTitle from '@/components/blocktitle'
// 引入查询结果标题
import QueryResult from '@/components/queryresult'
// 注意 有些组件使用异步加载会有影响
Vue.component('ui-container-full', ContainerFull)
Vue.component('ui-icon-fa', IconFa)
Vue.component('ui-icon-svg', IconSvg)

Vue.component('Button', Button)
Vue.component('DisplayItem', DisplayItem)
Vue.component('HeaderItem', HeaderItem)
Vue.component('BorderHeader', BorderHeader)
Vue.component('block-title', BlockTitle)
Vue.component('result', Result)
Vue.component('QueryResult', QueryResult)

