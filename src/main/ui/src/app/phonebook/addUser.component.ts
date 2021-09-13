import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Phonebook } from '../phonebook.model';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css'],
  providers: [DatePipe]
})
export class AddUserComponent implements OnInit{
  phonebook!: Phonebook;
  isAdded = false;
  constructor(private phonebookService: PhonebookService){}
  currentDate = new Date();
  phonebookForm!: FormGroup;          
  ngOnInit() {
    this.phonebookForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),     
      phone: new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    this.phonebook.firstName = this.phonebookForm.value.firstName;
    this.phonebook.lastName = this.phonebookForm.value.lastName;
    this.phonebook.phone = this.phonebookForm.value.phone;
    this.save();
  }

  save(){
    this.phonebookService.addUser(this.phonebook)
                    .subscribe(phonebook=> {console.log(phonebook);
                      this.isAdded = true;
                    }, error=>console.log(error))
  }
  resetUserForm(){
    this.isAdded = false;
    this.phonebookForm.reset();
  }
}