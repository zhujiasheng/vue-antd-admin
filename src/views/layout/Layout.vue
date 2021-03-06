<template>
  <a-layout>
    <!-- 侧边导航 -->
    <a-layout-sider :class="['layout-sidebar', { 'layout-sidebar-fix': layout.sidebarFix }]" v-bind="siderOptiions">
      <Logo :collapse="layout.sidebar" />
      <sidebar :theme="navTheme" :collapsed="layout.sidebar" />
    </a-layout-sider>

    <a-layout class="layout-inside" :style="layoutInsideStyle">
      <!-- 顶部菜单 -->
      <a-layout-header v-show="fadeOnScroll" :class="['layout-header', { 'header-fix': layout.headerFix }]" :style="layoutHeaderStyle">
        <Header />
      </a-layout-header>

      <!-- 页面主体 -->
      <a-layout-content class="layout-content" :style="layoutContentStyle">
        <TagsNav v-show="fadeOnScroll" v-if="layout.tagsNavShow" ref="tagsNav" :style="layoutTagsNavStyle" />
        <Content class="layout-content-main" :style="layoutContentMainStyle" />
      </a-layout-content>

      <!-- 页面底部 -->
      <a-layout-footer v-if="false" class="layout-footer" :style="layoutFooterStyle">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from './Header'
import Content from './Content'
import TagsNav from './TagsNav'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Logo from './Logo'

export default {
  name: 'Layout',
  components: {
    Header,
    Content,
    TagsNav,
    Footer,
    Sidebar,
    Logo
  },
  data() {
    return {
      fadeOnScroll: true,
      position: 0
    }
  },
  computed: {
    layout() {
      return this.$store.state.layout
    },
    navTheme() {
      return 'dark'
    },
    siderOptiions() {
      let { sidebar, sidebarWidth, collapsedWidth } = this.layout
      return {
        collapsed: sidebar, // 收起状态
        width: sidebarWidth, // 宽度
        theme: this.navTheme, // 主题
        collapsible: true, // 可收起
        collapsedWidth: collapsedWidth, // 收起转态时宽度
        breakpoint: 'md', // 响应式触发边界
        trigger: null // 自定义 trigger，设置为 null 时隐藏 trigger
      }
    },
    layoutHeaderStyle() {
      let { sidebar, headerFix, headerStick } = this.layout
      return {
        left: headerFix ? (headerStick ? 0 : sidebar ? '80px' : '256px') : 0
      }
    },
    layoutInsideStyle() {
      let { sidebar, sidebarFix } = this.layout
      return {
        paddingLeft: sidebarFix ? (sidebar ? '80px' : '256px') : '0'
      }
    },
    layoutContentStyle() {
      let { headerFix, headerHeight } = this.layout
      return {
        paddingTop: headerFix ? `${headerHeight}px` : 0
      }
    },
    layoutTagsNavStyle() {
      let { sidebar, tagsNavFix, collapsedWidth, sidebarWidth } = this.layout
      if (tagsNavFix) {
        return {
          position: 'fixed',
          zIndex: 3,
          width: `calc(100% - ${sidebar ? collapsedWidth : sidebarWidth}px)`
        }
      } else {
        return { width: '100%' }
      }
    },
    layoutContentMainStyle() {
      let { tagsNavFix, tagsNavShow } = this.layout
      return {
        marginTop: tagsNavFix && tagsNavShow ? '44px' : '0'
      }
    },
    layoutFooterStyle() {
      return {}
    }
  },
  created() {
    this.handleScroll = this.$g.debounce(this.handleScroll, 20, false)
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let { headerFadeOnScroll, headerHeight } = this.layout
      let scrollTop = document.documentElement?.scrollTop || document.body.scrollTop

      let derection = scrollTop - this.position

      this.position = scrollTop

      // 顶部导航栏 多页签在滚动时渐隐
      if (headerFadeOnScroll) {
        if (derection > 0) {
          let minTop = scrollTop - headerHeight - 44 > 0
          minTop && (this.fadeOnScroll = false)
        } else {
          this.fadeOnScroll = true
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.layout-sidebar {
  min-height: 100vh;
  width: @sider-width;
}
.layout-sidebar-fix {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 13;
}
.layout-header {
  display: block;
  background: @header-color;
  padding: 0;
  height: @header-height;
  line-height: @header-height;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  transition: all 0.2s ease-in-out;
}
.header-fix {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 14;
}
.layout-inside {
  min-height: 100vh;
  transition: all 0.2s ease-in-out;
}
.layout-content {
  background: #f0f2f5;
  overflow: auto;
  transition: all 0.2s ease-in-out;
}
.layout-content-main {
  position: relative;
  margin: 20px;
  background: #fff;
}
.layout-footer {
  text-align: center;
}
</style>
