
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from '../iproduct';


@Component({
  selector: 'app-design',
  standalone: true,
  imports: [],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent implements OnInit{
   constructor( private _ProductsService:ProductsService){}
   
   products:IProduct[]=[];


   ngOnInit(): void {
       this._ProductsService.getProducts().subscribe({
        next:(res)=>{
          this.products=res;
        },
        error:(err)=>{
          console.log(err)
        }
       })
   }
   
}
