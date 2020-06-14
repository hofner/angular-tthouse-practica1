import {Component} from '@angular/core';
import {Http} from '@angular/http'; //este es el servicio Http

@Component({
    selector: 'app-entry-list',
    templateUrl: 'entry-list.component.html',
    styleUrls:['entry-list.component.css']

})
export class EntryListComponent {
    constructor(http:Http){
        http.get('/app/entries').toPromise()
        .then(response=>{debugger;},error=>{debugger;})

    }

}