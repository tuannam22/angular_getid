import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class CateService{

    constructor( private http:HttpClient ){}

    getCate(){

        // option
        let options = {
            headers: new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
        }

        // body

        return this.http.post("http://localhost:3000/api/dscate", options);
    }
}