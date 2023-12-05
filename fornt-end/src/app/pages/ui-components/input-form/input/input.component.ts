import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'comp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input()
  control: FormControl | any;
  @Input()
  type!: string;
  @Input()
  id!: string;
  @Input()
  name!: string;
  @Input()
  placeholder!: string;
  @Input()
  label!: string;
  @Input()
  error!: string;
  @Input() class: string = 'w-100';
  @Input() color: ThemePalette = 'primary';
}
