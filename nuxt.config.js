import colors from "vuetify/es5/util/colors";

export default {
  mode: "spa",
  router: {
    base: process.env.NODE_ENV === "production" ? "/vuespa/" : "/",
    routerNameSplitter: "/"
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      {
        charset: "utf-8"
      },
      /**Chrome, Firefox OS and Opera **/
      { name: "theme-color", content: "#48B983" },
      /**Windows phone **/
      { name: "msapplication-navbutton-color", content: "#48B983" },
      /**iOS Safari**/
      { name:"apple-mobile-web-app-status-bar-style", content:"#48B983"},
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    "bulma",
    // CSS file in the project
    "@/assets/css/main.css",
    // SCSS file in the project
    "@/assets/css/main.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@plugins/vuetify.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/bulma"],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  },
  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0" // default: localhost
  }
};
