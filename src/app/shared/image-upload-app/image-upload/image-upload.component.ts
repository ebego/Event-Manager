import {Component,ElementRef, ViewChild} from '@angular/core';
import {ImageUploadService} from "../image-upload.service";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedFile: File | null = null;

  constructor(private imageUploadService: ImageUploadService) { }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log("ERDIT", inputElement);
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile);
      this.clearFileInput()
    }
  }

  clearFileInput(): void {
    this.fileInput.nativeElement.value = '';
    this.selectedFile = null;
  }
}
