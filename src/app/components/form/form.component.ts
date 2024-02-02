import { NgClass, NgFor } from '@angular/common';
import { Component, QueryList, ViewChildren, signal } from '@angular/core';
import { FormStepComponent } from '../form-step/form-step.component';
import { Step } from '../../interfaces/step.interface';

@Component({
  selector: 'epic-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  imports: [NgFor, FormStepComponent, NgClass],
})
export class FormComponent {
  steps: Step[] = [
    { title: 'Step 1', done: false, description: this.generateRandomText() },
    { title: 'Step 2', done: false, description: this.generateRandomText() },
    { title: 'Step 3', done: false, description: this.generateRandomText() },
  ];

  generateRandomText(): string {
    // You can customize the text generation as needed
    const adjectives = [
      'Amazing',
      'Incredible',
      'Superb',
      'Fantastic',
      'Awesome',
    ];
    const nouns = [
      'Adventure',
      'Journey',
      'Experience',
      'Discovery',
      'Exploration',
    ];
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `Unlock your ${randomAdjective} ${randomNoun}!`;
  }

  @ViewChildren(FormStepComponent)
  formStepsQueryList!: QueryList<FormStepComponent>;

  currentStep = signal<Step>(this.steps.at(0) as Step);
  progress = 0;

  ngOnInit() {}

  handleStepCompletion(index: number) {
    this.formStepsQueryList.get(index)!.step.done = true;
    const nextStep = this.steps.at(index + 1);
    if (nextStep) {
      this.currentStep.set(nextStep);
    }
    this.calculateProgress();
  }

  calculateProgress() {
    const completed = this.formStepsQueryList
      .toArray()
      .filter((formStep) => formStep.step.done).length;
    this.progress = completed / this.steps.length;
  }

  // handleValidationChange(isValid: boolean) {
  //   // 2. Prevent moving to the next step if the current step is invalid
  //   if (!isValid && this.currentStep() > 0) {
  //     this.currentStep.update((val) => val - 1); // Go back to the previous step
  //   }

  //   // 3. Validate the entire form if all steps are completed
  //   if (this.currentStep() === this.steps.length - 1) {
  //     const allValid = this.formStepsQueryList
  //       .toArray()
  //       .every((step) => step.isValid);
  //     console.log({ allValid });
  //     // this.formValid.value = allValid; // Assuming you have a signal for overall form validity
  //   }
  // }
}
