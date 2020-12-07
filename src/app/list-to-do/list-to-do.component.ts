import { Component, OnInit } from '@angular/core';
export class todo{
  constructor(
    public id :number,
    public description :string,
    public targetdate :Date,
    public status :string
  ){}
}
@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {


  todos=[
    new todo(1,'lern angular', new Date(), 'yes'),
    new todo(2,'lern java', new Date(), 'no'),
    new todo(1,'lern html', new Date(), 'yes')

    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
