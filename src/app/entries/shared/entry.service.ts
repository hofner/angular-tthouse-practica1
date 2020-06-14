import {Entry} from './entry.model'
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class EntryService{
    
    //esto es para que el http quede como atributo en el servicio
    //y los demas puedan usarlo
    constructor(private http:Http){

    }
    
    getEntries():Promise<Entry[]>{
        return this.http.get('app/entries')
        .toPromise()
        .then(response=>response.json().data as Entry[]);

    }

}