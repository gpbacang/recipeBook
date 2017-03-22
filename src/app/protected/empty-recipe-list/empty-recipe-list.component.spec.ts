import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyRecipeListComponent } from './empty-recipe-list.component';

describe('EmptyRecipeListComponent', () => {
  let component: EmptyRecipeListComponent;
  let fixture: ComponentFixture<EmptyRecipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyRecipeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
