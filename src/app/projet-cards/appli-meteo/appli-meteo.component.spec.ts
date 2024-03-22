import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliMeteoComponent } from './appli-meteo.component';

describe('AppliMeteoComponent', () => {
  let component: AppliMeteoComponent;
  let fixture: ComponentFixture<AppliMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppliMeteoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppliMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
