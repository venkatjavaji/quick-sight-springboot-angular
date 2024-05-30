import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quick-sight demo';
  selectedValue: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  onSelectionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selected = target.value;
    this.selectedValue = target.value;;
    if (selected) {
      this.sharedService.setSelectedValue(selected);
    }
  }
}
