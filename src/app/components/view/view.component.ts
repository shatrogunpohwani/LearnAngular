import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  ngOnInit() {
  }

  loginForm: FormGroup; // <--- heroForm is of type FormGroup
  arr = [];
  EditIndex = 0;
  submitt = true;
  searchQuery;
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      Title: ['', Validators.required],
      Author: '',
      Publisher: '',
      Type: '',
      Notes: ''
    });
  }


  submit() {
    console.log(this.loginForm.value);
    this.arr.push(this.loginForm.value);

    this.loginForm.reset({
      Title: "",
      Author: "",
      Publisher: "",
      Type: "",
      Notes: ""
    });


  }

  Delete(index) {
    console.log(index);
    this.arr.splice(index, 1);
  }

  Edit(index) {
    console.log(index);
    this.loginForm.setValue({
      Title: this.arr[index].Title,
      Author: this.arr[index].Author,
      Publisher: this.arr[index].Publisher,
      Type: this.arr[index].Type,
      Notes: this.arr[index].Notes
    });

    this.submitt = false;
    this.EditIndex = index;
  }

  EditSubmit() {
    this.arr[this.EditIndex].Title = this.loginForm.value.Title;
    this.arr[this.EditIndex].Author = this.loginForm.value.Author;
    this.arr[this.EditIndex].Publisher = this.loginForm.value.Publisher;
    this.arr[this.EditIndex].Type = this.loginForm.value.Type;
    this.arr[this.EditIndex].Notes = this.loginForm.value.Notes;


    this.loginForm.reset({
      Title: "",
      Author: "",
      Publisher: "",
      Type: "",
      Notes: ""
    });


    this.submitt = true;

  }
}
