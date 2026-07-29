import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../models/course.model';
import { CourseService } from './course';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];
  private enrolledSubject = new BehaviorSubject<number[]>(this.enrolledCourseIds);

  enrolledIds$ = this.enrolledSubject.asObservable();

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
      this.enrolledSubject.next(this.enrolledCourseIds);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
    this.enrolledSubject.next(this.enrolledCourseIds);
  }

  toggleEnrollment(courseId: number): void {
    if (this.isEnrolled(courseId)) {
      this.unenroll(courseId);
    } else {
      this.enroll(courseId);
    }
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Course[] {
    return this.courseService
      .getCourses()
      .filter(course => this.enrolledCourseIds.includes(course.id));
  }
}