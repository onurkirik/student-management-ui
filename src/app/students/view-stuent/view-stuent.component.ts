import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from 'src/app/models/gender.model';
import { Student } from 'src/app/models/student.model';
import { GenderService } from 'src/app/services/gender.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-view-stuent',
  templateUrl: './view-stuent.component.html',
  styleUrls: ['./view-stuent.component.scss']
})
export class ViewStuentComponent {

  studentId: string | null | undefined;
  student: Student | null = null;
  genders: Gender[] | null = null;
  constructor(
    private readonly _studentService: StudentsService,
    private readonly _genderService: GenderService,
    private _activatedRouter: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getStudentById();
    this.getGenders();
  }

  public getStudentById() {
    this._activatedRouter.paramMap.subscribe(
      (params) => {
        this.studentId = params.get('id');
        this._studentService.getStudent(this.studentId).subscribe(
          (student) => {
            this.student = student;
          },
          (error) => {
            // Hata durumunda yapılacak işlemler
          }
        );
      });
  }

  public getGenders() {
    this._genderService.getAll().subscribe(
      (success) => {
        this.genders = success;
      },
      (error) => {
        console.log("Mistake");
      }
    )
  }

  public updateStudent() {
    this._studentService.update(this.studentId!, this.student!).subscribe(
      (success) => {
        this._router.navigateByUrl('students')
      }, (err) => {

      }
    );
  }

}
