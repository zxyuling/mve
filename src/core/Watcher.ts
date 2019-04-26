import { Depend } from './Depend'
import  utils from '../utils/index'
export class Watcher{
	private vm: any
	private expression: string
	private value: any
	private callback: () => any
	public constructor(vm: any, expression: string, callback: () => any){
		this.vm = vm
		this.expression = expression
		this.callback = callback
	}
	public get(): any {
		Depend.target = this
		this.value = utils.resolve(this.vm)(this.expression)
		return this.value
	}
	public update(): void{
		const value: any = utils.resolve(this.vm)(this.expression)
		this.callback.call(this.vm,value,this.value)
		this.value = value
	}
}