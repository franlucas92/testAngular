import { Component,Input, OnInit } from '@angular/core';
import { Adversario } from '../../models/adversario.model';

@Component({
  selector: 'app-adversario',
  templateUrl: './adversario.component.html',
  styleUrls: ['./adversario.component.scss']
})
export class AdversarioComponent implements OnInit {


  @Input() myAdversario:Adversario = {
    id: "",
    image: "",
    name:"",
    description:"",
    color:""
  };
  constructor() { }

  ngOnInit(): void {

  }

}
