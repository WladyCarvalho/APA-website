import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoCardComponent } from './artigo-card.component';

describe('ArtigoCardComponent', () => {
  let component: ArtigoCardComponent;
  let fixture: ComponentFixture<ArtigoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
