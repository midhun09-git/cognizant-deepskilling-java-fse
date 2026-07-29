import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  selectedCourseId: number | null = null;

  courses = [
    { id: 1, name: 'Java Full Stack', code: 'JFS101', credits: 4 },
    { id: 2, name: 'Angular Development', code: 'ANG201', credits: 3 },
    { id: 3, name: 'Database Management', code: 'DB301', credits: 3 },
    { id: 4, name: 'Spring Boot REST API', code: 'SB401', credits: 4 },
    { id: 5, name: 'Software Testing', code: 'ST501', credits: 2 }
  ];

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}