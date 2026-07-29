import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { Highlight } from '../../directives/highlight';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, CourseCard, Highlight],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  selectedCourseId: number | null = null;
  isLoading = false;
  searchTerm = '';
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') || '';
    this.courses = this.courseService.getCourses();
  }

  get filteredCourses(): Course[] {
    if (!this.searchTerm.trim()) {
      return this.courses;
    }

    return this.courses.filter(course =>
      course.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onSearchChange(): void {
    this.router.navigate(['/courses'], {
      queryParams: this.searchTerm ? { search: this.searchTerm } : {}
    });
  }

  isEnrolled(courseId: number): boolean {
    return this.enrollmentService.isEnrolled(courseId);
  }

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
    this.enrollmentService.toggleEnrollment(courseId);
  }

  openDetails(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }
}