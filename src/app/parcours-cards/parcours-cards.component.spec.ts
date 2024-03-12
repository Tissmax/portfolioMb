import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursCardsComponent } from './parcours-cards.component';

describe('ParcoursCardsComponent', () => {
  let component: ParcoursCardsComponent;
  let fixture: ComponentFixture<ParcoursCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcoursCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParcoursCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
