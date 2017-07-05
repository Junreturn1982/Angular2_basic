import { Component } from '@angular/core';
// view
@Component({
    selector: 'hoang-contact-list',
    template: `
        <h2>{{ message }}</h2>
        <button (click)="doClick()">Click me</button>
    `
})
// controller
export class ContactListComponent {
    message: string = "Xin chao, ContactListComponent";
    doClick() {
        this.message = "Button clicked";
        setTimeout(() => {
            this.message = "Button done!";
        }, 1000);
    }
}