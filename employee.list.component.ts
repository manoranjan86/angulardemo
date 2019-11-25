/// <reference path="rating.components.ts" />

import { Component, Output, EventEmitter } from '@angular/core';
import { Employee } from '../module/employee'
import { EmployeeLogic } from '../../logic/employee.dummy.logic'
import { EmployeeAddComponent } from './employee.add.component'
import { RatingComponent } from './rating.components'


@Component({
    moduleId: module.id,
    selector: 'employee-list',
    templateUrl: './employee.list.component.html'
})
export class EmployeeListComponent {

    Employees: Array<Employee>;   
    @Output() onAddNew: EventEmitter<void> = new EventEmitter<void>();
    constructor(private eLogic: EmployeeLogic) {
        this.Employees = eLogic.GetEmployees(); 
    }

    ShowAdd(): void {
        debugger;
        this.onAddNew.emit();
    }


    Add(i): void {
        this.Employees[i].Rating+= 1;
    }
    Remove(i): void {
        if (this.Employees[i].Rating > 0)
            this.Employees[i].Rating -= 1;
    }  
    abcd():void{
        alert('a');
    }  
}