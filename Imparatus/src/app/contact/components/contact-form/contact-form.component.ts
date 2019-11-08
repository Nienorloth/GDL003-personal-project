import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  emailField: FormControl;

  constructor() { 
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    /*this.emailField.valueChanges
    .subscribe(value => {
      console.log(value); 
    });*/
  }

  ngOnInit() {
  }

sendMail() {
  if (this.emailField.valid) {
    console.log(this.emailField.value);
  }
}

}
