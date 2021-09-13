import { Component, OnInit } from '@angular/core';

import { Phonebook } from '../phonebook.model';
import { PhonebookService } from '../services/phonebook.service';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhoneBookComponent implements OnInit {

    users: Phonebook[] = [];

    constructor(private phonebookService: PhonebookService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.phonebookService.getAllUsers()
        .subscribe(users => this.users = users);
  }

}