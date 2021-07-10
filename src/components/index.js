import Button from './utils/Button.vue'

export const registerGlobalComponents = Vue => {
	Vue.component(Button.name, Button)
}