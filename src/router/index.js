import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'

import BookList from '@/components/book/list'
import BookCategoryList from '@/components/bookcategory/list'
import EchartsMap from '@/components/echarts/map'
import EchartsMonitor from '@/components/echarts/monitor'
import EchartsPie from '@/components/echarts/pie'
import UserList from '@/components/user/list'
import UserChangePwd from '@/components/user/changepwd'
import UserProfile from '@/components/user/profile'
import ImageEdit from '@/components/editTool/imgEdit'
import TextEdit from '@/components/editTool/text-edit'
import Draggable from '@/components/editTool/draggable'
import Favorite from '@/components/plug-in/myfavorite'
import Video from '@/components/videopulg'
// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
      path: '/login',
      name: '登录',
      component: Login
    }, {
      path: '/video',
      name: '监控视频',
      component: Video
    }, {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/dashboard',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [{
        path: '/dashboard',
        component: Dashboard,
        name: '首页',
        menuShow: true
      }]
    }, {
      path: '/',
      component: Home,
      name: '用户管理',
      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [{
        path: '/user/list',
        component: UserList,
        name: '用户列表',
        menuShow: true
      }]
    }, {
      path: '/',
      component: Home,
      name: '图书管理',
      menuShow: true,
      iconCls: 'iconfont icon-books',
      children: [{
          path: '/book/list',
          component: BookList,
          name: '图书列表',
          menuShow: true
        },

      ]
    }, {
      path: '/',
      component: Home,
      name: 'echarts',
      menuShow: true,
      iconCls: 'iconfont icon-zhuzhuangtu',
      children: [{
          path: '/echarts/map',
          component: EchartsMap,
          name: '地图',
          menuShow: true
        }, {
          path: '/echarts/pie',
          component: EchartsPie,
          name: '饼图',
          menuShow: true
        }, {
          path: '/book/category',
          component: BookCategoryList,
          name: 'demo',
          menuShow: true
        }, {
          path: '/monitor',
          component: EchartsMonitor,
          name: '监控异常图',
          menuShow: true
        }
        // { path: '/echarts/monitor', component: EchartsMonitor, name: '监控异常图', menuShow: true }
      ]
    }, {
      path: '/',
      component: Home,
      name: '插件库',
      menuShow: true,
      iconCls: 'iconfont icon-zhuzhuangtu',
      children: [{
        path: '/plug-in/myfavorite',
        component: Favorite,
        name: 'Favorite',
        menuShow: true
      }, ]
    },

    {
      path: '/',
      component: Home,
      name: '设置',
      menuShow: true,
      iconCls: 'iconfont icon-setting1',
      children: [{
        path: '/user/profile',
        component: UserProfile,
        name: '个人设置',
        menuShow: true
      }, {
        path: '/user/changepwd',
        component: UserChangePwd,
        name: '修改密码',
        menuShow: true
      }]
    }, {
      path: '/',
      component: Home,
      name: '编辑工具',
      menuShow: true,
      iconCls: 'iconfont icon-gongju',
      children: [{
        path: '/editTool/imgEdit',
        component: ImageEdit,
        name: '图片编辑',
        menuShow: true
      }, {
        path: '/editTool/text-edit',
        component: TextEdit,
        name: '文本编辑',
        menuShow: true
      }, {
        path: '/editTool/draggable',
        component: Draggable,
        name: '拖拽组件',
        menuShow: true
      }]
    }
    // {
    //   path: '/',
    //   component: Home,
    //   name: '监控异常图',
    //   menuShow: true,
    //   leaf: true, // 只有一个节点
    //   iconCls: 'iconfont icon-users', // 图标样式class
    //   children: [
    //     
    //   ]
    // }

  ]
})

router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.sessionStorage.removeItem('access-user')
    next()
  } else {
    let user = JSON.parse(window.sessionStorage.getItem('access-user'))
    if (!user) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
})

export default router