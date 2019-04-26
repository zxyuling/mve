import initMixin from './core/init'
class Mve{
	private options: any;
	public constructor(options: any){
		this.options = options
		this.init()
	}
	private init():void{
		initMixin(this)
	}
}
export default Mve