import { Component, Input, HostBinding, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-textarea',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ],
  template: `
    <textarea
      class="input textarea"
      [id]="id"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [value]="value"
      (input)="onInput($event)"
    ></textarea>
  `,
  styles: [
    `
      @import './input.css';

      .input.textarea {
        width: 100%;
        height: 100%;
        font-weight: 400;
        resize: none;
        border: 1px solid rgba(47, 47, 47, 1);
      }

      .input.textarea:hover,
      .input.textarea:focus,
      .input.textarea.active {
        background: rgba(47, 47, 47, 1);
        border: 1px solid rgba(255, 255, 255, 0.5);
      }

      :host {
        display: block;
        width: 16rem;
        height: 16rem;
      }
    `
  ]
})
export class TextareaComponent implements ControlValueAccessor {
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
