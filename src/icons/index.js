import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
// req 函数=>   根据路径       对应的模块 导入
const requireAll = requireContext => requireContext.keys().map(requireContext)
// map 返回一个新数组
// 长度和原来一样
// 映射
requireAll(req)
