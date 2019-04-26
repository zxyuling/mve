import { observer } from './Observer'
import { Watcher } from './Watcher'
function initState(vm: any): void {
	initData(vm)
	initWatch(vm)
}
function initData(vm: any): void {
	vm.$data = vm.options.data
	let data:any = vm.$data
	for(let key in data){
		proxy(vm, '$data', key)
	}
	observer(data)
}
function initWatch(vm: any): void {
	vm.$watch = vm.options.watch
	const watcherList:any = vm.$watch
	for(let watcherName in watcherList){
		const watcher = new Watcher(vm, watcherName, watcherList[watcherName])
		watcher.get()
	}
}
function proxy(obj: any, sourceKey: string, key: string|number): void {
	Object.defineProperty(obj, key, {
		configurable: true,
		get(){
			return obj[sourceKey][key]
		},
		set(value: any){
			obj[sourceKey][key] = value
		}
	})
}
export default initState