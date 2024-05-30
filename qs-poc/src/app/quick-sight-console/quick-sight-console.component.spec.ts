import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSightConsoleComponent } from './quick-sight-console.component';

describe('QuickSightConsoleComponent', () => {
  let component: QuickSightConsoleComponent;
  let fixture: ComponentFixture<QuickSightConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickSightConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickSightConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
