import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisorComponent } from './televisor.component';

describe('TelevisorComponent', () => {
  let component: TelevisorComponent;
  let fixture: ComponentFixture<TelevisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelevisorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelevisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
