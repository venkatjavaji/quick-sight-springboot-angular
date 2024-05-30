import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicksightEmbedComponent } from './quicksight-embed.component';

describe('QuicksightEmbedComponent', () => {
  let component: QuicksightEmbedComponent;
  let fixture: ComponentFixture<QuicksightEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuicksightEmbedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuicksightEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
