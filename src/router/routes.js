
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:"mainPage", component: () => import('pages/MainPage.vue') },
      { path: '/contacts', name:"contactsPage", component: () => import('pages/ContactsPage.vue') },
      { path: '/skills', name:"skillsPages", component: () => import('pages/skillsPage.vue') },
      { path: '/projects', name:"projectsPage", component: () => import('pages/ProjectsPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
