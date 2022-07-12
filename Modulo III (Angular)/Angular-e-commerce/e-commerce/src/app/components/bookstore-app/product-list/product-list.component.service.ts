import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable() 

export class BookService {
    private url = "https://sheet.best/api/sheets/5091f5c3-739b-42f9-b72b-21bd8e78b2"

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }

}