
import { Employee } from '../components/module/employee'

export abstract class EmployeeLogic {
    abstract GetEmployees(): Array<Employee>;
    abstract AddEmployee(e: Employee): Array<Employee>;

}

export class EmployeeDummyLogic extends EmployeeLogic {
    private Employees = new Array<Employee>();
    constructor() {
        super();
        this.Employees = new Array<Employee>();
        let e1: Employee = new Employee("Dummy1", "fff", 10000,2);
        this.Employees.push(e1);

        let e2: Employee = new Employee("Dummy2", "ABC", 20000,3);
        this.Employees.push(e2);  
    }
    GetEmployees(): Array<Employee> {
        return this.Employees;
    }
    AddEmployee(e: Employee): Array<Employee> {
        this.Employees.push(e);
        return this.Employees;
    }
}

export class EmployeeRealLogic extends EmployeeLogic{
    private Employees = new Array<Employee>();
    constructor() {
        super();
        this.Employees = new Array<Employee>();
        let e1: Employee = new Employee("Real1", "fff", 10000,4);
        this.Employees.push(e1);

        let e2: Employee = new Employee("Real2", "ABC", 20000,5);
        this.Employees.push(e2);
    }
    GetEmployees(): Array<Employee> {
        return this.Employees;
    }
    AddEmployee(e: Employee): Array<Employee> {
        this.Employees.push(e);
        return this.Employees;
    }
}

