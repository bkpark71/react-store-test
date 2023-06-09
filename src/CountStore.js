import { makeObservable, observable, action } from 'mobx';
// 관찰을 받는 , 감시를 받는 대상자로 등록
// 일반 자바스크립트 클래스임. react component일 필요가 없음

class CountStore{
    count=0;

    constructor(){
        makeObservable(this, {
            count:observable,
            plus:action,
            minus:action,
        }); // 감시받는 대상자를 생성함
    }
    
    plus=(data)=>{
        //this.count++;
        this.count+=data;
    }

    minus=()=>{
        this.count--;
    }
}

const countStore =  new CountStore(); 
export default countStore;// 객체화한후 객체를 방출