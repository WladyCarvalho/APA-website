import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadeItemComponent } from './comunidade-item.component';

describe('ComunidadeItemComponent', () => {
  let component: ComunidadeItemComponent;
  let fixture: ComponentFixture<ComunidadeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunidadeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
