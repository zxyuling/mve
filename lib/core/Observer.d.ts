export declare class Observer {
    private data;
    private dep;
    constructor(data: any);
    private walk;
    private defineReactive;
}
export declare function observer(data: any): void;
