import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/accountSelectorController.getAccount';

const columns = [
{label:'Name',fielldName:'Name'},
{label:'Website',fielldName:'Website'},
{label:'Phone',fielldName:'Phone'}
];


export default class AccountSelector extends LightningElement {

column = columns;

accountData;
error;

@wire(getAccount)
wireAccount({error,data}){
if(data){
this.accountData = data;
}else if(error){
this.error = error;
}
}


handleRowSelection(event){
let selectRows = event.detail.selectedRows;
const itemSelected = new CustomEvent("itemSelected",{
        detail: { 
            recordId:selectRows[0].id
         }
    });
    this.dispatchEvent(itemSelected);
}
}
