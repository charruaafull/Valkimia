import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

    end_point$: Object;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        this.data.getEndPoint().subscribe(
            data => this.end_point$ = data
        );
    }

}
