import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

    public end_point$;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.data.getEndPoint().subscribe(
            data => this.end_point$ = data
        );
    }

}
