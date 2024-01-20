import { LightningElement } from 'lwc';

export default class Child_hooks extends LightningElement {
    constructor(){
        super();
        console.log('-----child construct call----');
    }
    connectedCallback(){
        console.log('-----child connectedcallback call----');
    }

    renderedCallback(){
        console.log('-----child Rendercallback call----');
    }








}