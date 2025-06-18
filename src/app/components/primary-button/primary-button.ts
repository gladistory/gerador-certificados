import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primary-button',
  imports: [CommonModule, FormsModule],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css'
})
export class PrimaryButton {

  @Input() textPrimaryButton: string = '';
  @Input() disabled: boolean = false;
}  