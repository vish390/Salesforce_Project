import { LightningElement,wire,api } from 'lwc';
import getContact from '@salesforce/apex/accountSelectorController.getContact';

const columns = [
    {label:'FirstName',fielldName:'FirstName'},
    {label:'LastName',fielldName:'LastName'},
    {label:'Phone',fielldName:'Phone'},
    {label:'Email',fielldName:'Email'}
    ];

export default class ShowContacts extends LightningElement {
    columns = columns;
_recordId;
conData;
error;
@api get recordId(){
    return this._recordId;
}
set recordId(value){
    if(value){
        this._recordId = value;
    }
}

@wire(getContact,{accountId:'$recordId'})
wieContactData({error,data}){
if(data){
    this.conData = data;
}else if(error){
    this.error = error;
}
}
}