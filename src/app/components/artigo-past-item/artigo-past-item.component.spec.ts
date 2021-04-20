import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoPastItemComponent } from './artigo-past-item.component';

describe('ArtigoPastItemComponent', () => {
  let component: ArtigoPastItemComponent;
  let fixture: ComponentFixture<ArtigoPastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoPastItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoPastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
