import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedValue: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  onSelectionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selected = target.value;
    this.selectedValue = selected;
    if (selected) {
      this.sharedService.setSelectedValue(selected);
    }
  }
}
