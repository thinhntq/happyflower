import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _b6fda01e = () => interopDefault(import('../pages/chat.vue' /* webpackChunkName: "pages/chat" */))
const _1e54f44d = () => interopDefault(import('../pages/chat/contact/_uuid.vue' /* webpackChunkName: "pages/chat/contact/_uuid" */))
const _0e7ae09e = () => interopDefault(import('../pages/chat/messaging/_uuid.vue' /* webpackChunkName: "pages/chat/messaging/_uuid" */))
const _5e11146a = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _39113384 = () => interopDefault(import('../pages/empty.vue' /* webpackChunkName: "pages/empty" */))
const _0ac40d34 = () => interopDefault(import('../pages/forms.vue' /* webpackChunkName: "pages/forms" */))
const _660ebbb2 = () => interopDefault(import('../pages/forms/basic-forms.vue' /* webpackChunkName: "pages/forms/basic-forms" */))
const _8f481d06 = () => interopDefault(import('../pages/forms/editors.vue' /* webpackChunkName: "pages/forms/editors" */))
const _00383b60 = () => interopDefault(import('../pages/forms/selection-controls.vue' /* webpackChunkName: "pages/forms/selection-controls" */))
const _0061bf4e = () => interopDefault(import('../pages/forms/selects.vue' /* webpackChunkName: "pages/forms/selects" */))
const _b5d8300a = () => interopDefault(import('../pages/forms/steppers.vue' /* webpackChunkName: "pages/forms/steppers" */))
const _006b8330 = () => interopDefault(import('../pages/forms/text-fields.vue' /* webpackChunkName: "pages/forms/text-fields" */))
const _666465df = () => interopDefault(import('../pages/general.vue' /* webpackChunkName: "pages/general" */))
const _645061f7 = () => interopDefault(import('../pages/general/alerts.vue' /* webpackChunkName: "pages/general/alerts" */))
const _442b488a = () => interopDefault(import('../pages/general/avatars.vue' /* webpackChunkName: "pages/general/avatars" */))
const _324aa410 = () => interopDefault(import('../pages/general/badges.vue' /* webpackChunkName: "pages/general/badges" */))
const _78c2bb5e = () => interopDefault(import('../pages/general/buttons.vue' /* webpackChunkName: "pages/general/buttons" */))
const _2bb0d733 = () => interopDefault(import('../pages/general/cards.vue' /* webpackChunkName: "pages/general/cards" */))
const _7c57723a = () => interopDefault(import('../pages/general/carousels.vue' /* webpackChunkName: "pages/general/carousels" */))
const _3b3b2377 = () => interopDefault(import('../pages/general/chips.vue' /* webpackChunkName: "pages/general/chips" */))
const _3ebc6850 = () => interopDefault(import('../pages/general/colors.vue' /* webpackChunkName: "pages/general/colors" */))
const _2de729fb = () => interopDefault(import('../pages/general/dialogs.vue' /* webpackChunkName: "pages/general/dialogs" */))
const _3128e12c = () => interopDefault(import('../pages/general/icons.vue' /* webpackChunkName: "pages/general/icons" */))
const _7838597a = () => interopDefault(import('../pages/general/pagination.vue' /* webpackChunkName: "pages/general/pagination" */))
const _579b0a12 = () => interopDefault(import('../pages/general/parallax.vue' /* webpackChunkName: "pages/general/parallax" */))
const _6f8cd48d = () => interopDefault(import('../pages/general/progress.vue' /* webpackChunkName: "pages/general/progress" */))
const _290b0602 = () => interopDefault(import('../pages/general/sliders.vue' /* webpackChunkName: "pages/general/sliders" */))
const _1d4e6136 = () => interopDefault(import('../pages/general/snackbar.vue' /* webpackChunkName: "pages/general/snackbar" */))
const _cf9d3276 = () => interopDefault(import('../pages/general/tables.vue' /* webpackChunkName: "pages/general/tables" */))
const _533839b0 = () => interopDefault(import('../pages/general/tooltips.vue' /* webpackChunkName: "pages/general/tooltips" */))
const _0b4a76e2 = () => interopDefault(import('../pages/general/typography.vue' /* webpackChunkName: "pages/general/typography" */))
const _273a2fa0 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4e375ad0 = () => interopDefault(import('../pages/mail.vue' /* webpackChunkName: "pages/mail" */))
const _193817bc = () => interopDefault(import('../pages/mail/0/_uuid.vue' /* webpackChunkName: "pages/mail/0/_uuid" */))
const _139007f1 = () => interopDefault(import('../pages/mail/_mailType.vue' /* webpackChunkName: "pages/mail/_mailType" */))
const _63c91480 = () => interopDefault(import('../pages/ManageOrder.vue' /* webpackChunkName: "pages/ManageOrder" */))
const _0d48fa9b = () => interopDefault(import('../pages/media.vue' /* webpackChunkName: "pages/media" */))
const _1cc27fc8 = () => interopDefault(import('../pages/pickers.vue' /* webpackChunkName: "pages/pickers" */))
const _45fa0c3f = () => interopDefault(import('../pages/pickers/datepicker.vue' /* webpackChunkName: "pages/pickers/datepicker" */))
const _bbd956c4 = () => interopDefault(import('../pages/pickers/timepicker.vue' /* webpackChunkName: "pages/pickers/timepicker" */))
const _07eddfb4 = () => interopDefault(import('../pages/widgets.vue' /* webpackChunkName: "pages/widgets" */))
const _1d4ea996 = () => interopDefault(import('../pages/widgets/chart.vue' /* webpackChunkName: "pages/widgets/chart" */))
const _4df79ed2 = () => interopDefault(import('../pages/widgets/list.vue' /* webpackChunkName: "pages/widgets/list" */))
const _62ba03a6 = () => interopDefault(import('../pages/widgets/social.vue' /* webpackChunkName: "pages/widgets/social" */))
const _41814c27 = () => interopDefault(import('../pages/widgets/statistic.vue' /* webpackChunkName: "pages/widgets/statistic" */))
const _5d928c89 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/chat",
      component: _b6fda01e,
      name: "chat",
      children: [{
        path: "contact/:uuid?",
        component: _1e54f44d,
        name: "chat-contact-uuid"
      }, {
        path: "messaging/:uuid?",
        component: _0e7ae09e,
        name: "chat-messaging-uuid"
      }]
    }, {
      path: "/dashboard",
      component: _5e11146a,
      name: "dashboard"
    }, {
      path: "/empty",
      component: _39113384,
      name: "empty"
    }, {
      path: "/forms",
      component: _0ac40d34,
      name: "forms",
      children: [{
        path: "basic-forms",
        component: _660ebbb2,
        name: "forms-basic-forms"
      }, {
        path: "editors",
        component: _8f481d06,
        name: "forms-editors"
      }, {
        path: "selection-controls",
        component: _00383b60,
        name: "forms-selection-controls"
      }, {
        path: "selects",
        component: _0061bf4e,
        name: "forms-selects"
      }, {
        path: "steppers",
        component: _b5d8300a,
        name: "forms-steppers"
      }, {
        path: "text-fields",
        component: _006b8330,
        name: "forms-text-fields"
      }]
    }, {
      path: "/general",
      component: _666465df,
      name: "general",
      children: [{
        path: "alerts",
        component: _645061f7,
        name: "general-alerts"
      }, {
        path: "avatars",
        component: _442b488a,
        name: "general-avatars"
      }, {
        path: "badges",
        component: _324aa410,
        name: "general-badges"
      }, {
        path: "buttons",
        component: _78c2bb5e,
        name: "general-buttons"
      }, {
        path: "cards",
        component: _2bb0d733,
        name: "general-cards"
      }, {
        path: "carousels",
        component: _7c57723a,
        name: "general-carousels"
      }, {
        path: "chips",
        component: _3b3b2377,
        name: "general-chips"
      }, {
        path: "colors",
        component: _3ebc6850,
        name: "general-colors"
      }, {
        path: "dialogs",
        component: _2de729fb,
        name: "general-dialogs"
      }, {
        path: "icons",
        component: _3128e12c,
        name: "general-icons"
      }, {
        path: "pagination",
        component: _7838597a,
        name: "general-pagination"
      }, {
        path: "parallax",
        component: _579b0a12,
        name: "general-parallax"
      }, {
        path: "progress",
        component: _6f8cd48d,
        name: "general-progress"
      }, {
        path: "sliders",
        component: _290b0602,
        name: "general-sliders"
      }, {
        path: "snackbar",
        component: _1d4e6136,
        name: "general-snackbar"
      }, {
        path: "tables",
        component: _cf9d3276,
        name: "general-tables"
      }, {
        path: "tooltips",
        component: _533839b0,
        name: "general-tooltips"
      }, {
        path: "typography",
        component: _0b4a76e2,
        name: "general-typography"
      }]
    }, {
      path: "/login",
      component: _273a2fa0,
      name: "login"
    }, {
      path: "/mail",
      component: _4e375ad0,
      name: "mail",
      children: [{
        path: "0/:uuid?",
        component: _193817bc,
        name: "mail-0-uuid"
      }, {
        path: ":mailType?",
        component: _139007f1,
        name: "mail-mailType"
      }]
    }, {
      path: "/ManageOrder",
      component: _63c91480,
      name: "ManageOrder"
    }, {
      path: "/media",
      component: _0d48fa9b,
      name: "media"
    }, {
      path: "/pickers",
      component: _1cc27fc8,
      name: "pickers",
      children: [{
        path: "datepicker",
        component: _45fa0c3f,
        name: "pickers-datepicker"
      }, {
        path: "timepicker",
        component: _bbd956c4,
        name: "pickers-timepicker"
      }]
    }, {
      path: "/widgets",
      component: _07eddfb4,
      name: "widgets",
      children: [{
        path: "chart",
        component: _1d4ea996,
        name: "widgets-chart"
      }, {
        path: "list",
        component: _4df79ed2,
        name: "widgets-list"
      }, {
        path: "social",
        component: _62ba03a6,
        name: "widgets-social"
      }, {
        path: "statistic",
        component: _41814c27,
        name: "widgets-statistic"
      }]
    }, {
      path: "/",
      component: _5d928c89,
      name: "index"
    }],

    fallback: false
  })
}
