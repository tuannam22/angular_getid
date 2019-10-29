import { Component } from "@angular/core";
import { CateService } from '../../../Services/Cate.module';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl:"cate.component.html",
    selector:'cate',
    providers:[CateService]
})

export class CateComponent{

    arrCate:any=[];
    id="";
    constructor( private route:ActivatedRoute, private CateSer:CateService ){
        //Get id
       this.route.paramMap.subscribe((params:ParamMap)=>{
            // console.log(this.id);
            this.id=params.get("id");           
       });
       // Get list Cate
       CateSer.getCate().subscribe(data=>{
            console.log(data);
            this.arrCate=data;
        });        
    }    

    
}