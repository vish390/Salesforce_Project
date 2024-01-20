import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import ToastContainer from 'lightning/toastContainer';

export default class ToastContainerDemo extends LightningElement {
    _title = 'Sample Title';
    message = 'Sample Message';
    variant = 'error';
    position = 'top-left';
    toastContainerObj = ToastContainer.instance();

    variantOptions = [
            { label: 'Error', value: 'error' },
            { label: 'Success', value: 'success' },
            { label: 'Info', value: 'info' },
            { label: 'Warning', value: 'warning' }
    ];

    positionOptions = [
            { label: 'Top Left', value: 'top-left' },
            { label: 'Top Center', value: 'top-center' },
            { label: 'Top Right', value: 'top-right' },
            { label: 'Bottom Left', value: 'bottom-left' },
            { label: 'Bottom Center', value: 'bottom-center' },
            { label: 'Bottom Right', value: 'bottom-right' }
    ];

    // connectedCallback() { 
    //     this.toastContainerObj.toastPosition = this.position;
    // }

    titleChange(event) {
        this._title = event.target.value;
    }

    messageChange(event) {
        this.message = event.target.value;
    }

    variantChange(event) {
        this.variant = event.target.value;
    }

    positionChange(event){
        this.position = event.target.value;
        this.toastContainerObj.toastPosition = this.position;
    }

    showNotification() {
        const evt = new ShowToastEvent({
            title: this._title,
            message: this.message,
            variant: this.variant,
        });
        this.dispatchEvent(evt);
    }
}