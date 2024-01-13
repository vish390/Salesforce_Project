import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/WireController.getAccount';    
     
export default class HelloWord extends LightningElement {
    parentVar;

    @wire(getAccount)accountList;

    
    handleMessage(event){
       this.parentVar = this.template.querySelector('c-child-hello-word').message;
    }
    handleCallMethod(){
        this.parentVar = this.template.querySelector('c-child-hello-word').changeMessage();
    }
}
