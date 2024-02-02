import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepDescriptionGeneratorService {
  adjectives = ['Amazing', 'Incredible', 'Superb', 'Fantastic', 'Awesome'];
  nouns = ['Adventure', 'Journey', 'Experience', 'Discovery', 'Exploration'];
  generate(): string {
    // You can customize the text generation as needed
    const randomAdjective =
      this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
    const randomNoun =
      this.nouns[Math.floor(Math.random() * this.nouns.length)];
    return `Unlock your ${randomAdjective} ${randomNoun}!`;
  }
}
