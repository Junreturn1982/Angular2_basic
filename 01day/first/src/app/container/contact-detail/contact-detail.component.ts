import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'hoang-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
    private _avatarUrl: string = '';
    
    constructor() {}
    
    get avatarUrl() {
        return this._avatarUrl;
    }
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