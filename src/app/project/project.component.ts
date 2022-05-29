import { Component, OnInit } from '@angular/core';

let value = [{data:'Example',id:1}]

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit {

  public val:any
  constructor() { this.val=value }

  ngOnInit(): void {
  }

  
  value = (i:any) => {  
    this.val.push({data:i,id:Math.random()})
  }

  delect = (A:any)=>{
    var list = this.val.filter((x:any )=>{
      return x.id != A
    })
    this.val=list
    console.log(list)
  }

  
  DontShow = "block"
  set = true
  Edit = ()=>{
    this.DontShow = 'show'
    this.set = false
  }
  Update = ()=>{
    this.DontShow = 'block'
    this.set = true
  }

}
