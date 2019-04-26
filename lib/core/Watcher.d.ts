export declare class Watcher {
    private vm;
    private expression;
    private value;
    private callback;
    constructor(vm: any, expression: string, callback: () => any);
    get(): any;
    update(): void;
}
