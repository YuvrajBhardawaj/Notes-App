import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes-list',
  imports: [MaterialModule, FormsModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  title:string="";
  content:string="";
  notes=[
    {title:"Angular", content:"Angular is a front end application"},
    {title:"React JS", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim vitae ducimus magnam id similique cupiditate corporis dolorum inventore. Possimus nulla iste voluptas. Vitae doloribus excepturi consequuntur maiores ullam dicta nam!"},
  ];
  dialogBox:boolean=false;
  addContent(){
    if(this.title==="" && this.content===""){
      alert("Kindly Complete The Given Inputs");
      return;
    }
    this.notes.push({title:this.title,content:this.content});
    this.title="";
    this.content="";
    this.dialogBox=!this.dialogBox;
  }
  deleteContent(index:number){
    console.log("Current Index "+index)
    this.notes.splice(index,1)
  }
  editContent(index:number){   //work needed
    this.dialogBox=!this.dialogBox;
    this.notes[index].title=this.title;
    this.notes[index].content=this.content;
  }
}
