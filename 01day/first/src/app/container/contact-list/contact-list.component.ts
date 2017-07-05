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
    tabIndex = 1;
    changeTab(tabIndex) {
        this.tabIndex = tabIndex;
    }
    contacts = [
        {
            id: 1,
            name: "Hoang",
            job: "web developer",
            avatar: {
                url: "http://via.placeholder.com/100x100"
            }
        },
        {
            id: 2,
            name: "Lan",
            job: "web developer",
            avatar: {
                url: "http://placehold.it/100/09f.png/fff"
            }
        },
        {
            id: 3,
            name: "Ngan",
            job: "web developer",
           
        }
    ];
}