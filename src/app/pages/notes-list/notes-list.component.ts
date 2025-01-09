import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import uuid4 from "uuid4";
interface Note{
  id: string,
  title: string,
  content: string
}
@Component({
  selector: 'app-notes-list',
  imports: [MaterialModule, FormsModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  id:string="";
  title:string="";
  content:string="";
  loader:boolean=false;
  notes:Note[]=JSON.parse(localStorage.getItem("notes")||'[]');
  dialogBox:boolean=false;
  addContent(){
    this.id=uuid4();
    if(this.title==="" && this.content===""){
      alert("Kindly Complete The Given Inputs");
      return;
    }
    this.notes.push({id:this.id,title:this.title,content:this.content});
    this.loader=true;
    setTimeout(()=>this.loader=false,500);
    localStorage.setItem("notes",JSON.stringify(this.notes));
    this.title="";
    this.content="";
    this.id="";
    this.dialogBox=!this.dialogBox;
  }
  deleteContent(id:string){
    this.notes.forEach(element => {
      if(element.id===id){
        this.notes.splice(this.notes.indexOf(element),1);
        this.loader=true;
        setTimeout(()=>this.loader=false,400);
        localStorage.setItem("notes",JSON.stringify(this.notes));
      }
    });
  }
  editContent(id:string){
    this.notes.forEach(element => {
      if(element.id===id){
        this.notes[this.notes.indexOf(element)].title=this.title;
        this.notes[this.notes.indexOf(element)].content=this.content;
        this.loader=true;
        setTimeout(()=>this.loader=false,400);
        localStorage.setItem("notes",JSON.stringify(this.notes));
      }
    });
    this.id="";
    this.title="";
    this.content="";
    this.dialogBox=!this.dialogBox;
  }
}
