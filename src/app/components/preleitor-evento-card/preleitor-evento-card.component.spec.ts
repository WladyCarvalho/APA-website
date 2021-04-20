import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreleitorEventoCardComponent } from './preleitor-evento-card.component';

describe('PreleitorEventoCardComponent', () => {
  let component: PreleitorEventoCardComponent;
  let fixture: ComponentFixture<PreleitorEventoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreleitorEventoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreleitorEventoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
