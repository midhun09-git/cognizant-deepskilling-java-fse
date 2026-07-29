import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input() course!: Course;
  @Input() enrolled = false;

  @Output() enrollRequested = new EventEmitter<number>();
  @Output() viewRequested = new EventEmitter<number>();

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course input changed:', changes['course']);
  }

  get cardClasses() {
    return {
      'card--enrolled': this.enrolled,
      'card--full': this.course.credits !== null && this.course.credits >= 4,
      expanded: this.isExpanded
    };
  }

  get borderStyle() {
    if (this.course.gradeStatus === 'passed') {
      return { 'border-left': '6px solid green' };
    }

    if (this.course.gradeStatus === 'failed') {
      return { 'border-left': '6px solid red' };
    }

    return { 'border-left': '6px solid grey' };
  }

  enroll(event: Event): void {
    event.stopPropagation();
    this.enrollRequested.emit(this.course.id);
  }

  viewDetails(event: Event): void {
    event.stopPropagation();
    this.viewRequested.emit(this.course.id);
  }

  toggleDetails(event: Event): void {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }
}