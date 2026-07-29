import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, Highlight],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  selectedCourseId: number | null = null;

  // Keep false so courses display immediately
  isLoading = false;

  courses = [
    { id: 1, name: 'Java Full Stack', code: 'JFS101', credits: 4, gradeStatus: 'passed' as const, enrolled: false },
    { id: 2, name: 'Angular Development', code: 'ANG201', credits: 3, gradeStatus: 'pending' as const, enrolled: false },
    { id: 3, name: 'Database Management', code: 'DB301', credits: 3, gradeStatus: 'failed' as const, enrolled: false },
    { id: 4, name: 'Spring Boot REST API', code: 'SB401', credits: 4, gradeStatus: 'passed' as const, enrolled: false },
    { id: 5, name: 'Software Testing', code: 'ST501', credits: null, gradeStatus: 'pending' as const, enrolled: false }
  ];

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;

    this.courses = this.courses.map(course =>
      course.id === courseId ? { ...course, enrolled: true } : course
    );
  }
}