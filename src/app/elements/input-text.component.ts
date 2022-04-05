import { Component, Input, HostBinding, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-input-text',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ],
  template: `
    <input
      type="text"
      class="input text"
      [id]="id"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [value]="value"
      (input)="onInput($event)"
    />
  `,
  styles: [
    `
      @import './input.css';
      .input.text {
        width: 100%;
      }
      :host {
        display: block;
        width: 16rem;
      }
    `
  ]
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() id: string = ''
  @Input() placeholder: string = ''
  @Input() disabled = false

  @HostBinding('style.opacity')
  get opacity () {
    return this.disabled ? 0.5 : 1
  }

  public value = ''

  constructor () {}

  onInput (event: Event) {
    this.onChange((event.target as HTMLInputElement).value)
  }

  onChange (_value: string) {}
  onTouched (_value: string) {}
  writeValue (value: string) {
    this.value = value
  }

  registerOnChange (onChange: (value: string) => void): void {
    this.onChange = onChange
  }
  registerOnTouched (onTouched: (value: string) => void): void {
    this.onTouched = onTouched
  }
  setDisabledState (disabled: boolean): void {
    this.disabled = disabled
  }
}
