<template>
  <div
    id="base-list-layout"
    class="zoomIn"
  >
    <header
      class="home-hero"
      :style="{backgroundImage: 'url(' + $withBase($themeConfig.heroImage) + ')'}"
    >
      <div class="p-3 text-center text-light">
        <img src="/logo-primary.png" alt="Andrea Gallego-Valencia" style="max-width:100%;">        
        <h1 class="display-3 site-title">{{ $site.title }}</h1>
        <p class="font-weight-light h3 text-light">Photography / Videography Portfolio and Blog</p>
        <button
          v-scroll-to="{ el: '#posts', offset: -100 }"
          class="el-button el-button--primary my-3 main-btn"
        >Blog</button>
        <a
          href="/projects"
          class="el-button el-button--primary my-3 main-btn"
        >Recent Projects</a>
      </div>
    </header>
    <featured-posts class="my-5 d-sm-none d-lg-block"></featured-posts>
    <el-container class="row p-3">
      <aside class="col-sm-12 col-lg-3 py-3 my-2">
        <About />
        <BlogTags :tags="tags" />
      </aside>
      <div
        class="col-sm-12 col-lg-8 mx-auto"
        id="posts"
      >
        <PostsList
          :posts="pages"
          title="Latest Posts"
        />

        <div class="d-flex">
          <component
            v-if="$pagination.length > 1 && paginationComponent"
            :is="paginationComponent"
          ></component>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from "vue";
import PostsList from "@theme/components/PostsList.vue";
import About from "@theme/components/About.vue";
import FeaturedPosts from "@theme/components/FeaturedPosts";
import { Pagination, SimplePagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: { PostsList, Pagination, FeaturedPosts, About },
  created () {
    this.paginationComponent = this.getPaginationComponent()
  },
  computed: {
    pages () {
      return this.$pagination.pages;
    },
    tags () {
      return this.$tag.list
    }
  },
  methods: {
    getPaginationComponent () {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }
      if (n === 'SimplePagination') {
        return SimplePagination
      }
      return Vue.component(n) || Pagination
    },
  }
};
</script>

<style src="prismjs/themes/prism-okaidia.css"></style>


<style>
header.home-hero {
  background-color: #999;
  background-blend-mode: multiply;
  padding: 10rem 0rem;
  background-repeat: none;
  background-size: cover;
}

.site-title {
  font-family: 'Tinos', serif;
}

.main-btn {
  outline: none;
}
</style>