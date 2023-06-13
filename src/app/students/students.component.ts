import { Component, ViewChild } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../models/student.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  students: Student[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'email', 'phone', 'gender'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _studentService: StudentsService
  ) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  public getAllStudents() {
    this._studentService.getAll().subscribe(
      (success) => {
        this.students = success;
        this.dataSource = new MatTableDataSource<Student>(this.students);
        this.dataSource.paginator = this.paginator;
      }, (err) => {

      }
    )
  }

}
