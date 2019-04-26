export class Depend{
	static target: any
	private sub: any[] = []
	public constructor(){

	}
	notify(): void {
		this.sub.forEach((item: any) => {
			item.update()
		})
	}
	addSub(watcher: any): void{
		this.sub.push(watcher)
		Depend.target = null
	}
}