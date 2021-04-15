import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPeopleFeedComponent } from './comment-people-feed.component';

describe('CommentPeopleFeedComponent', () => {
  let component: CommentPeopleFeedComponent;
  let fixture: ComponentFixture<CommentPeopleFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentPeopleFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPeopleFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
