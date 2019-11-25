
import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Employee } from '../module/employee'
import { EmployeeLogic } from '../../logic/employee.dummy.logic'
import { EmployeeAddComponent } from './employee.add.component'

@Component({
    moduleId: module.id,
    selector: 'employee-rating',
    templateUrl: './rating.component.html'
})
export class RatingComponent {

    @Input() myrating: number;
    @Input() title: number;
    noArr: Array<number> = new Array<number>();
    @Output() newRating: EventEmitter<void> = new EventEmitter<void>();
    @Output() removeRating: EventEmitter<void> = new EventEmitter<void>();

    ngOnInit() {
        this.GenerateRating();
    }

    GenerateRating() {
        for (let i = 1; i <= this.myrating; i++) {
            this.noArr.push(i);
        }
    }

    addRating() {
        let len: number = this.noArr.length;
        this.noArr.push(len++);
        this.newRating.emit();
    }

    remove() {
        this.noArr.splice(0, 1);
        this.removeRating.emit();
    }

    constructor() {

    }
}


//export class RatingComponent {
//    arrar: Array<number> = new Array<number>();
//    @Input() ratingResult: number;
//    constructor() {
       
       
//    }
//    ngOnInit() {
//        for (let i = 0; i < 4; i++) {
//            this.arrar.push(i);
//        }
//    }
//    PlusRating(): void {
//        let len = this.arrar.length;
//        this.arrar.push(len++);
//    }
//    MinusRating(): void {
//        let len = this.arrar.length;
//        this.arrar.splice(0, 1);
//    }

//}