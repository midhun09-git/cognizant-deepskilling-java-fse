import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Java Full Stack',
      code: 'JFS101',
      credits: 4,
      gradeStatus: 'passed',
      description: 'Learn Java, Spring Boot, REST APIs, database integration, and full-stack concepts.'
    },
    {
      id: 2,
      name: 'Angular Development',
      code: 'ANG201',
      credits: 3,
      gradeStatus: 'pending',
      description: 'Learn Angular components, routing, forms, services, directives, pipes, and HTTP.'
    },
    {
      id: 3,
      name: 'Database Management',
      code: 'DB301',
      credits: 3,
      gradeStatus: 'failed',
      description: 'Learn SQL, joins, normalization, transactions, and database design.'
    },
    {
      id: 4,
      name: 'Spring Boot REST API',
      code: 'SB401',
      credits: 4,
      gradeStatus: 'passed',
      description: 'Build REST APIs using Spring Boot, controllers, services, repositories, and DTOs.'
    },
    {
      id: 5,
      name: 'Software Testing',
      code: 'ST501',
      credits: null,
      gradeStatus: 'pending',
      description: 'Learn unit testing, integration testing, debugging, and test-driven development basics.'
    }
  ];

  private coursesSubject = new BehaviorSubject<Course[]>(this.courses);
  courses$ = this.coursesSubject.asObservable();

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
    this.coursesSubject.next(this.courses);
  }

  getCoursesCount(): number {
    return this.courses.length;
  }
}