import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }

  ButtonActive1 = false;
  ButtonActive2 = true;
  ButtonActive3 = true;
  ButtonActive4 = true;
  
 
  constructor() { // <--- inject FormBuilder
  }


}
