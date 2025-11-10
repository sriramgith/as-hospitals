import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyreviewdateComponent } from './modifyreviewdate.component';

describe('ModifyreviewdateComponent', () => {
  let component: ModifyreviewdateComponent;
  let fixture: ComponentFixture<ModifyreviewdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyreviewdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyreviewdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
