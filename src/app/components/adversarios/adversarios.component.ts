import { Component, OnInit } from '@angular/core';
import {Adversario} from '../../models/adversario.model'

@Component({
  selector: 'app-adversarios',
  templateUrl: './adversarios.component.html',
  styleUrls: ['./adversarios.component.scss']
})
export class AdversariosComponent implements OnInit {

  
  adversarios:Adversario[] = [
    {
      id: "0",
      name: "Adversario 0",
      image:"",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      color:"blue"
    },{
      id: "1",
      name: "Adversario 1",
      image:"",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      color:"yellow"
    },{
      id: "2",
      name: "Adversario 2",
      image:"",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      color:"pink"
    },{
      id: "3",
      name: "Adversario 3",
      image:"",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      color:"green"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
