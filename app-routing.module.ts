import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './Components/Pages/Home/home.component';
import { DetailComponent } from './Components/Pages/Detail/detail.component';
import { CateComponent } from './Components/Pages/Cate/cate.component';
import { RegisterComponent } from './Components/Pages/Register/register.component';

const routesConfig:Routes = [
    {path:'cate/:id', component:CateComponent},
    {path:'detail', component:DetailComponent},     
    {path:'register', component:RegisterComponent},     
    {path:'**', component:HomeComponent}
]

@NgModule({
    declarations:[
        HomeComponent,
        DetailComponent,
        CateComponent,
        RegisterComponent
    ],
    imports:[
        RouterModule.forRoot(routesConfig),
        CommonModule,       
        FormsModule        
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}