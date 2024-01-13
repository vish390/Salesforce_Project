import { LightningElement,api} from 'lwc';

export default class ChildHelloWord extends LightningElement {
    @api message = 'vishal';

    @api
    changeMessage(){
        this.message = 'Message chsange by method';
        return this.message;
    }
}