import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input() course!: {
    id: number;
    name: string;
    code: string;
    credits: number | null;
    gradeStatus: 'passed' | 'failed' | 'pending';
    enrolled?: boolean;
  };

  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course input changed:', changes['course']);
  }

  get cardClasses() {
    // Getter keeps template clean by moving class logic into TypeScript.
    return {
      'card--enrolled': this.course.enrolled,
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

  enroll(): void {
    this.enrollRequested.emit(this.course.id);
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }
}