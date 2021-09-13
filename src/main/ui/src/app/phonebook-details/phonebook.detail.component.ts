import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Phonebook } from '../phonebook.model';
import { PhonebookService } from '../services/phonebook.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './phonebook.detail.component.html',
    styleUrls: ['./phonebook.detail.component.css']
  })
  export class PhonebookDetailComponent implements OnInit {
    user: Phonebook | undefined;
  
    constructor(
        private route: ActivatedRoute,
        private phonebookService: PhonebookService,
        private location: Location
    ) { }
  
    ngOnInit(): void {
        this.getUser();
    }

    getUser(): void {
        const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
        this.phonebookService.getUserById(id)
          .subscribe(user => this.user = user);
    }
    
    //goBack(): void {
     //   this.location.back();
    //}
  
  }