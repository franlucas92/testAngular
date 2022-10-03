import { Component, OnInit,Input, Output, EventEmitter,OnChanges, AfterViewInit,OnDestroy,SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy {

  
img:string = "";
@Input('img')
set changeImg(newImg:string)
{
  this.img = newImg;
  console.log('solo cambio la imagen => ',this.img);
  //code
}
@Input() alt:string = '';
@Output() loaded = new EventEmitter<string>();
imageDefault = '';
// counterFunction:number | undefined;



constructor() {
 }

 ngOnChanges(changes:SimpleChanges): void {
 }

ngOnInit(): void {
}
ngAfterViewInit(): void {
}
ngOnDestroy(): void {
}

}
