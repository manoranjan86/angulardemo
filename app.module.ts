

import {NgModule} from "@angular/core" ;
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppComponent } from "./app.component" 
import { EmployeeComponent } from "./components/employee/employee.component" 
import { BrowserModule } from '@angular/platform-browser' 
import { EmployeeDummyLogic, EmployeeRealLogic, EmployeeLogic } from './logic/employee.dummy.logic'
import { EmployeeListComponent} from './components/employee/employee.list.component'
import { EmployeeAddComponent } from './components/employee/employee.add.component'
import { RatingComponent} from './components/employee/rating.components'
import { namepipe} from './components/employee/name.pipe'
import{highlight} from './Directive/highlight.directive'
@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeAddComponent,
                     EmployeeListComponent, RatingComponent,namepipe,highlight],
    bootstrap: [AppComponent],
    providers: [
        {  
        provide :EmployeeLogic,
        useClass:EmployeeDummyLogic 
        }
    ]
})
export class AppModule{

}