import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { InputOption } from '../../../models/inputOption';
import { FilterPipe } from '../../../pipes/filter.pipe';


@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    FilterPipe,
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent implements OnInit {
  constructor() {
  }

  selectedValue: InputOption | undefined;
  inputText = '';
  selectedText = '';
  focus = false;
  debounceTimeout: number;

  @ViewChild('search') searchElement: ElementRef;

  @Output() selectedChange = new EventEmitter();

  @Output() focusChange = new EventEmitter();

  @Input() list: InputOption[];

  @Input()
  get selected() {
    return this.selectedValue;
  }

  set selected(val) {
    this.selectedValue = val;
    this.selectedChange.emit(this.selectedValue);
  }

  selectItem(item: InputOption | undefined) {
    this.selected = item;
    this.focus = false;
    if (item) {
      this.inputText = item.text;
      this.setSelect(item.value);
    } else {
      this.inputText = '';
      this.setSelect('');
    }
  }

  handleFocus() {
    this.focus = true;
    this.focusChange.emit(this.focus);
  }

  handleBlur() {
    this.focus = false;
    this.selectedText = this.selectedValue?.text as string;
  }

  // wait 500ms before updating to prevent multiple unnecessary requests
  // (that may also go out of order)
  debouncedUpdate() {
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => {
      this.setInputValue(this.inputText);
    }, 500);
  };

  deselectItem() {
    this.selectedText = '';
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
  }

  @Output() inputValue = new EventEmitter<string>();

  setInputValue(value: string) {
    this.inputValue.emit(value);
  }

  @Output() select = new EventEmitter<string>();

  setSelect(value: string) {
    this.select.emit(value);
  }

  ngOnInit(): void {
    this.selectedText = this.selectedValue?.text as string;
  }
}
