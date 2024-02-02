import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Step } from '../../interfaces/step.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'epic-form-step',
  standalone: true,
  imports: [NgClass],
  templateUrl: './form-step.component.html',
  styleUrl: './form-step.component.css',
})
export class FormStepComponent {
  @Input() step!: Step;
  @Input() index!: number;
  @Input() isValid = false; // Implement your validation logic

  @Output() stepCompleted = new EventEmitter<number>();

  completeStep() {
    this.stepCompleted.emit(this.index);
  }
}
