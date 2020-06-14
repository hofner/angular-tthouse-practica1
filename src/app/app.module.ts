import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { EntryListComponent,EntryComponent, EntryService } from './entries';
import { InMemoryEntryService } from './backend';

@NgModule(
    { 
        ///todos son para modulos de tipo Angular
        //no para modulos de javascript
        imports:[BrowserModule,
                HttpModule,
                FormsModule,
                InMemoryWebApiModule.forRoot(InMemoryEntryService)
                ],
        declarations:[AppComponent,EntryListComponent,EntryComponent],
        bootstrap: [AppComponent],
        providers:[EntryService]

    }
)
export class AppModule{

} 