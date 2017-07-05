import { Component, ViewEncapsulation } from '@angular/core';
// view
@Component({
    selector: 'hoang-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: [
        './contact-list.component.scss'
    ],
    // bound css default Emulated: global + không nhận cha + nhận chính nó, 
    // Native: không global + ko nhận cha + nhận chính nó, None: global
    encapsulation: ViewEncapsulation.Emulated
})
// controller
export class ContactListComponent {
    message: string = "Xin chao, ContactListComponent";
    printable = true;
    tabIndex: number = 1;
    changeTab(tabIndex) {
        this.tabIndex = tabIndex;
    }
    colorH3: string = 'blue';
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
            // avatar: {
            //     url: "http://via.placeholder.com/100/ff66cc/000000"
            // }
        }
    ];
}