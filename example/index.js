import Mve from '../src/index'
const vm = new Mve({
	data:{
		msg:1,
		ms:2,
	},
	watch:{
		msg(){
			console.log('watch')
		}
	}
})
window.vm = vm
console.log(vm)