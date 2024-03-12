import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetCardsComponent } from './projet-cards.component';

describe('ProjetCardsComponent', () => {
  let component: ProjetCardsComponent;
  let fixture: ComponentFixture<ProjetCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
