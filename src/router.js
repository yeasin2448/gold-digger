import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Services from './pages/Services.vue'
import Blog from './pages/Blog.vue'
import Contact from './pages/Contact.vue'
import Login from './pages/Login.vue'

const router = new VueRouter({
	mode: 'history',
	base: '/',
	routes: [
		{
			name: 'Home',
			path: "/",
			component: Home
		},
		{
			name: 'Login',
			path: "/login",
			component: Login
		},
		{
			name: 'About',
			path: "/about",
			component: About
		},
		{
			name: 'Services',
			path: "/services",
			component: Services
		},
		{
			name: 'Blog',
			path: "/blog",
			component: Blog
		},
		{
			name: 'Contact',
			path: "/contact",
			component: Contact
		}
	]
})

export default router