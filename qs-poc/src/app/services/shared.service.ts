import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private selectedValueSource = new BehaviorSubject<string>('default');

    public selectedValue$ = this.selectedValueSource.asObservable();

    setSelectedValue(value: string): void {
        this.selectedValueSource.next(value);
    }
}
