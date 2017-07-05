import { Component } from '@angular/core';
// view
@Component({
    selector: 'hoang-contact-list',
    templateUrl: './contact-list.component.html'
})
// controller
export class ContactListComponent {
    message: string = "Xin chao, ContactListComponent";
    printable = true;
}