import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'hoang-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
    @Input('avatar-url') avatarUrl: string = '';
    constructor() {}
    // lifecycle hook
    ngOnInit() {
        if (!this.avatarUrl) {
            throw new Error('avatarUrl is required!!!');
        }
    }
}