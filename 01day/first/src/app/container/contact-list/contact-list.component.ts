import { Component } from '@angular/core';

@Component({
    selector: 'hoang-contact-list',
    template: `
        <h2>{{ message }}</h2>
    `
})

export class ContactListComponent {
    message: string = "Xin chao, ContactListComponent";
}