import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckScatterComponent } from './deck-scatter.component';

describe('DeckScatterComponent', () => {
  let component: DeckScatterComponent;
  let fixture: ComponentFixture<DeckScatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckScatterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeckScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
