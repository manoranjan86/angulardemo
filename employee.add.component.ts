import { Component,Output,EventEmitter } from '@angular/core';
import { Employee } from '../module/employee'
import { EmployeeLogic } from '../../logic/employee.dummy.logic'
import {NgForm} from '@angular/forms';
@Component({
    moduleId: module.id,
    selector: 'employee-add',
    templateUrl: './employee.add.component.html'
})
export class EmployeeAddComponent {

    Employees: Array<Employee>;
    FName: string;
    LName : string;
    Salary: number;
    @Output() onSave:EventEmitter<void>=new EventEmitter<void>();
    constructor(private eLogic: EmployeeLogic) { 
        
this.FName="AZ";
this.LName="B";
this.Salary=1000;
    }
    SaveEmployee(f: NgForm): void {
        let e: Employee = new Employee(this.FName,this.LName,this.Salary,null);
        this.Employees = this.eLogic.AddEmployee(e);
        this.onSave.emit();
    }

    ShowCancel(): void {
        this.onSave.emit();
    }
    
}