import { Depend } from './Depend'
export class Observer {
	private data: any
	private dep: Depend
	public constructor(data: any){
		this.data = data
		this.dep = new Depend()
		this.walk(data)
	}
	private walk(data: any): void {
		Object.keys(data).forEach((key: any) => {
			const item: any = data[key]
			if(typeof item === 'object'){
				this.walk(item)
			}
			this.defineReactive(data, key, item)
		})
	}
	private defineReactive(data:any, key: any,value:any): void {
		console.log(key)
		const self = this
		Object.defineProperty(data, key, {
			set(val: any): any{
				value = val
				console.log('set')
				self.dep.notify()
				if(typeof val === 'object'){
					observer(val)
				}
			},
			get(): void{
				console.log('get')
				if(Depend.target){
					self.dep.addSub(Depend.target)
				}
				return value
			}
		})
	}
}
export function observer(data: any): void {
	new Observer(data)
}