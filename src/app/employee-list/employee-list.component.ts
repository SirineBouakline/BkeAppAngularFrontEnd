import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees: Array<any>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAll().subscribe(
      data => {
        this.employees = data;
      },
      error => console.log(error)
    )
  }
  /* autre method:
   this.employeeService.getAll().subscribe({
      next: data => {
        this.employees = data;
      },
      error: error => {
        // handle error
        //console.log(error);
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  */

}
