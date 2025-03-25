
enum PromiseStates {
    PENDING = "pending",
    FULLFILLED = "fullfilled",
    REJECTED = "rejected"
}

type TPromiseResoleve<T> = (value : T) => void;
type TPromiseReject<T> = (reason : T) => void;
type TPromseExecutor<T,K> = (resolve : TPromiseResoleve<T>, reject: TPromiseReject<K>) => void;

class MyPromise<T,K> {
    private PromiseState : PromiseStates = PromiseStates.PENDING;

    constructor(executorfun : TPromseExecutor<T,K>){
        executorfun()
    }

    private _PromiseReolver(value:T){
        if(this.PromiseState === PromiseStates.FULLFILLED){
            return;
        }
        this.PromiseState = PromiseStates.FULLFILLED
    }
}