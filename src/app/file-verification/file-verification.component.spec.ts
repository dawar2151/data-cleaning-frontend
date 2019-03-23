import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileVerificationComponent } from './file-verification.component';

describe('FileVerificationComponent', () => {
  let component: FileVerificationComponent;
  let fixture: ComponentFixture<FileVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
