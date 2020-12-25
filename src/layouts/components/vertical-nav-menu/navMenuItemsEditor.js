/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: null,
  //   name: 'Dashboard',
  //   tag: '2',
  //   tagColor: 'warning',
  //   icon: 'HomeIcon',
  //   i18n: 'Dashboard',
  //   submenu: [
  //     { url: '/dashboard/analytics', name: 'Analytics', slug: 'dashboard-analytics', i18n: 'Analytics' },
  //     { url: '/dashboard/ecommerce', name: 'eCommerce', slug: 'dashboard-ecommerce', i18n: 'eCommerce' }
  //   ]
  // },
  {
    header: 'config',
    icon: 'PackageIcon',
    i18n: 'config',
    items: [
      { url: '/config/combat', name: 'combat', slug: 'combat', icon: 'MailIcon', i18n: 'combat' },
      { url: '/config/embattle', name: 'embattle', slug: 'embattle', icon: 'MailIcon', i18n: 'embattle' },
      { url: '/config/battleLine', name: 'battleLine', slug: 'battleLine', icon: 'MailIcon', i18n: 'battleLine' },
      { url: '/config/workShop', name: 'workShop', slug: 'workShop', icon: 'MailIcon', i18n: 'workShop' },
      { url: '/config/checkpoint', name: 'checkpoint', slug: 'checkpoint', icon: 'MailIcon', i18n: 'checkpoint' }
    ]
  },
  {
    header: 'card',
    icon: 'PackageIcon',
    i18n: 'card',
    items: [{ url: '/card/illustrated', name: 'illustrated', slug: 'illustrated', icon: 'MailIcon', i18n: 'illustrated' }]
  },
  {
    header: 'activity',
    icon: 'PackageIcon',
    i18n: 'activity',
    items: [
      { url: '/activity/calendar', name: 'calendar', slug: 'calendar', icon: 'MailIcon', i18n: 'calendar' },
      { url: '/activity/activityChart', name: 'activityChart', slug: 'activityChart', icon: 'MailIcon', i18n: 'activityChart' }
    ]
  },
  {
    header: 'tools',
    icon: 'PackageIcon',
    i18n: 'tools',
    items: [
      { url: '/tools/virtualCombat', name: 'virtualCombat', slug: 'virtualCombat', icon: 'MailIcon', i18n: 'virtualCombat' },
      { url: '/tools/warcraftCompare', name: 'warcraftCompare', slug: 'warcraftCompare', icon: 'MailIcon', i18n: 'warcraftCompare' }
    ]
  }
]

