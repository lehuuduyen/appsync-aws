import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsyncComponent } from './appsync.component';

describe('AppsyncComponent', () => {
  let component: AppsyncComponent;
  let fixture: ComponentFixture<AppsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
