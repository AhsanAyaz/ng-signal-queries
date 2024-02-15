import { NgClass, NgFor } from '@angular/common';
import { Component, QueryList, ViewChildren, inject } from '@angular/core';
import { FormStepComponent } from '../form-step/form-step.component';
import { Step } from '../../interfaces/step.interface';
import { StepDescriptionGeneratorService } from '../../services/step-description-generator.service';

@Component({
  selector: 'epic-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  imports: [NgFor, FormStepComponent, NgClass],
})
export class FormComponent {
  descriptionService = inject(StepDescriptionGeneratorService);
  steps: Step[] = [
    {
      title: 'Step 1',
      done: false,
      description: this.descriptionService.generate(),
    },
    {
      title: 'Step 2',
      done: false,
      description: this.descriptionService.generate(),
    },
    {
      title: 'Step 3',
      done: false,
      description: this.descriptionService.generate(),
    },
  ];

  @ViewChildren(FormStepComponent)
  formStepsQueryList!: QueryList<FormStepComponent>;

  currentStepIndex = 0;
  progress = 0;

  handleStepCompletion(index: number) {
    this.formStepsQueryList.get(index)!.step.done = true;
    const nextStep = this.formStepsQueryList.get(index + 1);
    if (nextStep) {
      this.currentStepIndex++;
    }
    this.calculateProgress();
  }

  calculateProgress() {
    const completed = this.formStepsQueryList.filter(
      (formStep) => formStep.step.done
    ).length;
    this.progress = (completed / this.formStepsQueryList.length) * 100;
  }
}
