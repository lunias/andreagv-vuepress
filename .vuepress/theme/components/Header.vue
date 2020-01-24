<template>
  <header
    id="header"
    class="shadow"
  >
    <div class="p-3 d-flex justify-content-between">
      <router-link
        to="/"
        class="text-decoration-none h4"
      >
        <img src="/logo-primary.png" alt="Andrea Gallego-Valencia" class="logo">
        <span class="site-title">{{ $site.title }}</span>
      </router-link>
      <SearchBox />
    </div>
[       <nav class="px-5" id="nav">
      <el-menu
        v-if="$themeConfig.nav"
        :default-active="activeIndex"
        mode="horizontal"
        class="d-flex justify-content-center border-0"
      >
        <el-menu-item
          v-for="item in routerItems"
          :index="item.link"
          :key="item.link"
          @click="activeIndex !== item.link ? $router.push(item.link) : scrollTo(`#header`)"
        >
          <router-link
            :to="item.link"
            class="text-decoration-none d-block h-100 w-100"
          >
            <i
              v-if="item.icon"
              :class="item.icon"
            ></i>
            {{ item.text }}
          </router-link>
        </el-menu-item>
        <el-menu-item
          v-for="item in externalItems"
          :index="item.link"
          :key="item.link"
          @click="activeIndex !== item.link"
        >
          <a :href="item.link"
            class="text-decoration-none d-block h-100 w-100"
          >
            <i
              v-if="item.icon"
              :class="item.icon"
            ></i>
            {{ item.text }}
          </a>
        </el-menu-item>
      </el-menu>
    </nav>
  </header>
</template>

<script>
import SearchBox from "./SearchBox";

export default {
  components: { SearchBox },
  computed: {
    activeIndex() {
      return this.$route.path
    },
    routerItems() {
      return this.$themeConfig.nav.filter((item) => !item.external)
    },
    externalItems() {
      return this.$themeConfig.nav.filter((item) => item.external)
    }
  },
  methods: {
    handleScroll (event) {

    var header = document.getElementById("nav");
    var sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header.classList.remove("px-5");
      } else {
        header.classList.remove("sticky");
        header.classList.add("px-5");
      }      
    },
    scrollTo (element) {
      this.$scrollTo(element);
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="stylus">
.el-menu-item.is-active {
  border-bottom: 3px solid $accentColor !important;
}
.logo {
  height: 2.5rem;
  min-width: 2.5rem;
  margin-right: .8rem;
  vertical-align: top;
}
.site-title {
  font-size: 2.0rem;
  font-weight: 300;
  font-family: 'Tinos', serif;
  position: relative;
}
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
}
</style>