import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'hoang-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css']
    // inputs: ['avatarUrl: avatar-url']
})
export class ContactDetailComponent implements OnInit {
    private _avatarUrl: string = '';
    @Input() round: boolean = false;
    constructor() {}
    
    get avatarUrl() {
        return this._avatarUrl;
    }
    // passing data to component
    @Input('avatar-url')
    set avatarUrl(value: string) {
        this._avatarUrl = value.trim();
    }
    
    // lifecycle hook
    ngOnInit() {
        if (!this.avatarUrl) {
            throw new Error('avatarUrl is required!!!');
        }
    }
}