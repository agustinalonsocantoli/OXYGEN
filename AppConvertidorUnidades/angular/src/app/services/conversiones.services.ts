import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

import { Global } from "./global";
import { Conversiones } from "../models/conversiones";

@Injectable()
export class ConversionesService {
    public url: string;

    constructor(
        private _http: HttpClient
        
        ) {
        
        this.url = Global.url;
    }

    saveConversiones(conversiones: Conversiones): Observable<any> {
        let params = JSON.stringify(conversiones);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save-conversion', params, { headers: headers });
    }

    getConversiones(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'conversiones', { headers: headers });
    }

    deleteConversiones(id: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url + 'conversion/' + id, { headers: headers })
    }
}