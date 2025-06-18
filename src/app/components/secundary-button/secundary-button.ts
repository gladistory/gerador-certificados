import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secundary-button',
  imports: [CommonModule],
  templateUrl: './secundary-button.html',
  styleUrl: './secundary-button.css'
})
export class SecundaryButton {

  @Input() textSecundaryButton: string = '';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;

}
