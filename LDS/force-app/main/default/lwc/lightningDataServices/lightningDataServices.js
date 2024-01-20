import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';


export default class LightningRecordEditFormDemo extends LightningElement {
    nameField = NAME_FIELD;
    phoneField = PHONE_FIELD;


    @api recordId;
    @api objectApiName;
}