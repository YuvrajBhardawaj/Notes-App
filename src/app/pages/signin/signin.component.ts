import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [MaterialModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  visibility:boolean=false;
  hide(){
    this.visibility=!this.visibility;
  }
}
