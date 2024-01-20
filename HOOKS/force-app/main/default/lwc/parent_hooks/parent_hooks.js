import { LightningElement } from 'lwc';
import primaryTemplate from './parent_hooks.html';
import secondaryTemplate from './template.html';
export default class Parent_hooks extends LightningElement {
isconval = false;
isRender = false;
    constructor(){
        super();
        console.log('-----parent construct call----',this.isconval);
        this.isconval = true;
    }
connectedCallback(){
    console.log('-----parent connectedcallback call----', this.isconval);
}

renderedCallback(){
    console.log('-----parent Rendercallback call----');
}

render(){
return this.isRender?secondaryTemplate:primaryTemplate;
}


changeHandler(event){
this.isRender = true;
}
}
