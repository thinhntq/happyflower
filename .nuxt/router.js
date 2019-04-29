import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _359a80bb = () => interopDefault(import('../pages/chat.vue' /* webpackChunkName: "pages/chat" */))
const _6ff7c8d2 = () => interopDefault(import('../pages/chat/contact/_uuid.vue' /* webpackChunkName: "pages/chat/contact/_uuid" */))
const _1975e70a = () => interopDefault(import('../pages/chat/messaging/_uuid.vue' /* webpackChunkName: "pages/chat/messaging/_uuid" */))
const _3839d97e = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _69bc080c = () => interopDefault(import('../pages/empty.vue' /* webpackChunkName: "pages/empty" */))
const _e6a27c48 = () => interopDefault(import('../pages/forms.vue' /* webpackChunkName: "pages/forms" */))
const _1482699d = () => interopDefault(import('../pages/forms/basic-forms.vue' /* webpackChunkName: "pages/forms/basic-forms" */))
const _08afe3f3 = () => interopDefault(import('../pages/forms/editors.vue' /* webpackChunkName: "pages/forms/editors" */))
const _70322bcc = () => interopDefault(import('../pages/forms/selection-controls.vue' /* webpackChunkName: "pages/forms/selection-controls" */))
const _50b5b1c4 = () => interopDefault(import('../pages/forms/selects.vue' /* webpackChunkName: "pages/forms/selects" */))
const _5f3e4445 = () => interopDefault(import('../pages/forms/steppers.vue' /* webpackChunkName: "pages/forms/steppers" */))
const _47f54aa6 = () => interopDefault(import('../pages/forms/text-fields.vue' /* webpackChunkName: "pages/forms/text-fields" */))
const _91362e56 = () => interopDefault(import('../pages/general.vue' /* webpackChunkName: "pages/general" */))
const _1e7abe41 = () => interopDefault(import('../pages/general/alerts.vue' /* webpackChunkName: "pages/general/alerts" */))
const _61671500 = () => interopDefault(import('../pages/general/avatars.vue' /* webpackChunkName: "pages/general/avatars" */))
const _2715ff4c = () => interopDefault(import('../pages/general/badges.vue' /* webpackChunkName: "pages/general/badges" */))
const _4ebfcf47 = () => interopDefault(import('../pages/general/buttons.vue' /* webpackChunkName: "pages/general/buttons" */))
const _7c04c9a9 = () => interopDefault(import('../pages/general/cards.vue' /* webpackChunkName: "pages/general/cards" */))
const _095e0e59 = () => interopDefault(import('../pages/general/carousels.vue' /* webpackChunkName: "pages/general/carousels" */))
const _e8e1d426 = () => interopDefault(import('../pages/general/chips.vue' /* webpackChunkName: "pages/general/chips" */))
const _0e3276cc = () => interopDefault(import('../pages/general/colors.vue' /* webpackChunkName: "pages/general/colors" */))
const _8def521e = () => interopDefault(import('../pages/general/dialogs.vue' /* webpackChunkName: "pages/general/dialogs" */))
const _37bf81e0 = () => interopDefault(import('../pages/general/icons.vue' /* webpackChunkName: "pages/general/icons" */))
const _21e780c4 = () => interopDefault(import('../pages/general/pagination.vue' /* webpackChunkName: "pages/general/pagination" */))
const _a592267e = () => interopDefault(import('../pages/general/parallax.vue' /* webpackChunkName: "pages/general/parallax" */))
const _48914657 = () => interopDefault(import('../pages/general/progress.vue' /* webpackChunkName: "pages/general/progress" */))
const _97a79a10 = () => interopDefault(import('../pages/general/sliders.vue' /* webpackChunkName: "pages/general/sliders" */))
const _6b457da2 = () => interopDefault(import('../pages/general/snackbar.vue' /* webpackChunkName: "pages/general/snackbar" */))
const _525bc30f = () => interopDefault(import('../pages/general/tables.vue' /* webpackChunkName: "pages/general/tables" */))
const _2c3cab7a = () => interopDefault(import('../pages/general/tooltips.vue' /* webpackChunkName: "pages/general/tooltips" */))
const _b7ec284e = () => interopDefault(import('../pages/general/typography.vue' /* webpackChunkName: "pages/general/typography" */))
const _8d6a0fd4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _415ea8cc = () => interopDefault(import('../pages/mail.vue' /* webpackChunkName: "pages/mail" */))
const _3bfe02f4 = () => interopDefault(import('../pages/mail/0/_uuid.vue' /* webpackChunkName: "pages/mail/0/_uuid" */))
const _648b378a = () => interopDefault(import('../pages/mail/_mailType.vue' /* webpackChunkName: "pages/mail/_mailType" */))
const _56d4e494 = () => interopDefault(import('../pages/ManageOrder.vue' /* webpackChunkName: "pages/ManageOrder" */))
const _c14c79de = () => interopDefault(import('../pages/media.vue' /* webpackChunkName: "pages/media" */))
const _429f4312 = () => interopDefault(import('../pages/pickers.vue' /* webpackChunkName: "pages/pickers" */))
const _20ad98ee = () => interopDefault(import('../pages/pickers/datepicker.vue' /* webpackChunkName: "pages/pickers/datepicker" */))
const _4bc27be8 = () => interopDefault(import('../pages/pickers/timepicker.vue' /* webpackChunkName: "pages/pickers/timepicker" */))
const _4d09931c = () => interopDefault(import('../pages/widgets.vue' /* webpackChunkName: "pages/widgets" */))
const _41ac9dab = () => interopDefault(import('../pages/widgets/chart.vue' /* webpackChunkName: "pages/widgets/chart" */))
const _bc65d13e = () => interopDefault(import('../pages/widgets/list.vue' /* webpackChunkName: "pages/widgets/list" */))
const _1ce45ff0 = () => interopDefault(import('../pages/widgets/social.vue' /* webpackChunkName: "pages/widgets/social" */))
const _ede9d8c6 = () => interopDefault(import('../pages/widgets/statistic.vue' /* webpackChunkName: "pages/widgets/statistic" */))
const _20b95602 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _359a80bb,
      name: "chat",
      children: [{
        path: "contact/:uuid?",
        component: _6ff7c8d2,
        name: "chat-contact-uuid"
      }, {
        path: "messaging/:uuid?",
        component: _1975e70a,
        name: "chat-messaging-uuid"
      }]
    }, {
      path: "/dashboard",
      component: _3839d97e,
      name: "dashboard"
    }, {
      path: "/empty",
      component: _69bc080c,
      name: "empty"
    }, {
      path: "/forms",
      component: _e6a27c48,
      name: "forms",
      children: [{
        path: "basic-forms",
        component: _1482699d,
        name: "forms-basic-forms"
      }, {
        path: "editors",
        component: _08afe3f3,
        name: "forms-editors"
      }, {
        path: "selection-controls",
        component: _70322bcc,
        name: "forms-selection-controls"
      }, {
        path: "selects",
        component: _50b5b1c4,
        name: "forms-selects"
      }, {
        path: "steppers",
        component: _5f3e4445,
        name: "forms-steppers"
      }, {
        path: "text-fields",
        component: _47f54aa6,
        name: "forms-text-fields"
      }]
    }, {
      path: "/general",
      component: _91362e56,
      name: "general",
      children: [{
        path: "alerts",
        component: _1e7abe41,
        name: "general-alerts"
      }, {
        path: "avatars",
        component: _61671500,
        name: "general-avatars"
      }, {
        path: "badges",
        component: _2715ff4c,
        name: "general-badges"
      }, {
        path: "buttons",
        component: _4ebfcf47,
        name: "general-buttons"
      }, {
        path: "cards",
        component: _7c04c9a9,
        name: "general-cards"
      }, {
        path: "carousels",
        component: _095e0e59,
        name: "general-carousels"
      }, {
        path: "chips",
        component: _e8e1d426,
        name: "general-chips"
      }, {
        path: "colors",
        component: _0e3276cc,
        name: "general-colors"
      }, {
        path: "dialogs",
        component: _8def521e,
        name: "general-dialogs"
      }, {
        path: "icons",
        component: _37bf81e0,
        name: "general-icons"
      }, {
        path: "pagination",
        component: _21e780c4,
        name: "general-pagination"
      }, {
        path: "parallax",
        component: _a592267e,
        name: "general-parallax"
      }, {
        path: "progress",
        component: _48914657,
        name: "general-progress"
      }, {
        path: "sliders",
        component: _97a79a10,
        name: "general-sliders"
      }, {
        path: "snackbar",
        component: _6b457da2,
        name: "general-snackbar"
      }, {
        path: "tables",
        component: _525bc30f,
        name: "general-tables"
      }, {
        path: "tooltips",
        component: _2c3cab7a,
        name: "general-tooltips"
      }, {
        path: "typography",
        component: _b7ec284e,
        name: "general-typography"
      }]
    }, {
      path: "/login",
      component: _8d6a0fd4,
      name: "login"
    }, {
      path: "/mail",
      component: _415ea8cc,
      name: "mail",
      children: [{
        path: "0/:uuid?",
        component: _3bfe02f4,
        name: "mail-0-uuid"
      }, {
        path: ":mailType?",
        component: _648b378a,
        name: "mail-mailType"
      }]
    }, {
      path: "/ManageOrder",
      component: _56d4e494,
      name: "ManageOrder"
    }, {
      path: "/media",
      component: _c14c79de,
      name: "media"
    }, {
      path: "/pickers",
      component: _429f4312,
      name: "pickers",
      children: [{
        path: "datepicker",
        component: _20ad98ee,
        name: "pickers-datepicker"
      }, {
        path: "timepicker",
        component: _4bc27be8,
        name: "pickers-timepicker"
      }]
    }, {
      path: "/widgets",
      component: _4d09931c,
      name: "widgets",
      children: [{
        path: "chart",
        component: _41ac9dab,
        name: "widgets-chart"
      }, {
        path: "list",
        component: _bc65d13e,
        name: "widgets-list"
      }, {
        path: "social",
        component: _1ce45ff0,
        name: "widgets-social"
      }, {
        path: "statistic",
        component: _ede9d8c6,
        name: "widgets-statistic"
      }]
    }, {
      path: "/",
      component: _20b95602,
      name: "index"
    }],

    fallback: false
  })
}
