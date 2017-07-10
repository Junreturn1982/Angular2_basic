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
   
    colorH3: string = 'blue';
    static clickCounter = 0;
    baseContact = {
        id: 4,
        name: "User 04",
        job: "marketing online",
        avatar: {
            url: "http://via.placeholder.com/100/ff66cc/000000"
        }
    }
    contacts = [
        {
            id: 1,
            name: "Hoang",
            job: "web developer",
            avatar: {
                round: true,
                url: "http://via.placeholder.com/100x100"
            }
        },
        {
            id: 2,
            name: "Lan",
            job: "web developer",
            avatar: {
                round: true,
                url: "http://placehold.it/100/09f.png/fff"
            }
        },
        {
            id: 3,
            name: "Ngan",
            job: "web developer",
            avatar: {
                round: false,
                url: "http://via.placeholder.com/100/ff66cc/000000"
            }
        }
    ];
    serverContacts = [
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
            avatar: {
                url: "http://via.placeholder.com/100/ff66cc/000000"
            }
        }
    ];
     changeTab(tabIndex) {
        this.tabIndex = tabIndex;
    }
    getDataFromServer() {
        return JSON.parse(JSON.stringify(this.serverContacts));
    }

    getContact() {
        if(ContactListComponent.clickCounter % 2 == 0) {
            this.contacts = this.getDataFromServer().concat(this.baseContact);
        } else {
            this.contacts = this.getDataFromServer().concat([]);
        }
        ContactListComponent.clickCounter++;
    }

    contactTrackByFn(index, item) {
        return item.id;
    }

    switchesValueChange(event: boolean, index) {
        this.contacts[index].avatar.round = event;
    }
}