import { Component } from "@angular/core";
import { CategoryService } from '../../../Services/Category.module';

@Component({
    templateUrl:"categories.component.html",
    selector:'categories',
    providers: [CategoryService]
})

export class CategoriesComponent{
    
    arrCate2:any=[];
    constructor( private cateService:CategoryService){
        cateService.getCategory().subscribe(data=>{
            // console.log(data);
            this.arrCate2 = data;
        });
    }

}