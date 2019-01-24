# vue-antd-admin

## 项目目录结构

### 目录结构

- `assets` - 资源目录 [`assets`](https://zh.nuxtjs.org/guide/assets)  用于组织未编译的静态资源如 `LESS`、`SASS` 或 `JavaScript`。
- `components` - 组件目录 `components` 用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 `asyncData` 方法的特性。
- `layouts` - 布局目录 [`layouts`](https://zh.nuxtjs.org/guide/views#%E5%B8%83%E5%B1%80) 用于组织应用的布局组件。*该目录名为Nuxt.js保留的，不可更改。*
- `middleware` - [`middleware`](https://zh.nuxtjs.org/guide/routing#%E4%B8%AD%E9%97%B4%E4%BB%B6) 目录用于存放应用的中间件。
- `pages` - 页面目录 [`pages`](https://zh.nuxtjs.org/guide/views) 用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 `.vue` 文件并自动生成对应的路由配置。*该目录名为Nuxt.js保留的，不可更改。*
- `plugins` - 插件目录 [`plugins`](https://zh.nuxtjs.org/guide/plugins) 用于组织那些需要在 `根vue.js应用` 实例化之前需要运行的 Javascript 插件。
- `static` - 静态文件目录 [`static`](https://zh.nuxtjs.org/guide/assets#%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6) 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径 `/` 下。*该目录名为Nuxt.js保留的，不可更改。*
- `store` - [`store`](https://zh.nuxtjs.org/guide/vuex-store) 目录用于组织应用的 [Vuex 状态树](http://vuex.vuejs.org/) 文件。 Nuxt.js 框架集成了 [Vuex 状态树](http://vuex.vuejs.org/) 的相关功能配置，在 `store`目录下创建一个 `index.js` 文件可激活这些配置。*该目录名为Nuxt.js保留的，不可更改。*
- `package.json` 文件 - `package.json` 文件用于描述应用的依赖关系和对外暴露的脚本接口。
- `nuxt.config.js` 文件 - [`nuxt.config.js`](https://zh.nuxtjs.org/guide/configuration) 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。

### 别名

| 别名         | 目录                                                      |
| ------------ | --------------------------------------------------------- |
| `~` 或 `@`   | [src目录](https://zh.nuxtjs.org/api/configuration-srcdir) |
| `~~` 或 `@@` | [根目录](https://zh.nuxtjs.org/api/configuration-rootdir) |

默认情况下，`src目录`和`根目录`相同。

> **提示:** 在您的 `vue` 模板中, 如果你需要引入 `assets` 或者 `static` 目录, 使用 `~/assets/your_image.png` 和 `~/static/your_image.png`方式。

## 构建启动

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```


