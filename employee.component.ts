import { Component,ViewChild } from '@angular/core';
import { Employee } from '../module/employee'
import { EmployeeLogic } from '../../logic/employee.dummy.logic'
import { EmployeeListComponent } from './employee.list.component'

@Component({
    moduleId : module.id, 
    selector: 'employee-view',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent {    
    Employees: Array<Employee>;
    IsAddNew: boolean = false;     
    @ViewChild("el") el:EmployeeListComponent;
    ShowAddData(): void {
        this.IsAddNew = true;
    }
    ShowCancel(): void {
        this.IsAddNew = false;
    }
    ClickMe():void{
        this.el.abcd();
    }
}