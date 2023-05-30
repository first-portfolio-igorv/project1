import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthDialogComponent } from './admin-auth-dialog.component';

describe('AdminAuthDialogComponent', () => {
  let component: AdminAuthDialogComponent;
  let fixture: ComponentFixture<AdminAuthDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAuthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
