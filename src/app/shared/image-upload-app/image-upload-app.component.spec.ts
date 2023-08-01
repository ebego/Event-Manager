import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadAppComponent } from './image-upload-app.component';

describe('ImageUploadAppComponent', () => {
  let component: ImageUploadAppComponent;
  let fixture: ComponentFixture<ImageUploadAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUploadAppComponent]
    });
    fixture = TestBed.createComponent(ImageUploadAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
