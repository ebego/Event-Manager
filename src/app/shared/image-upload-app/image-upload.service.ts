import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient, private httpClient: HttpClient) {
  }

  uploadImage(imageFile: File) {
    const formData: FormData = new FormData();
    formData.append('file', imageFile);

    // Replace 'YOUR_IMAGE_UPLOAD_API_URL' with your backend API endpoint for image upload
    this.http.post(environment.apiBaseUrl + "/upload", formData).subscribe({
      next: result => {
        console.log(result);
      },
      error: err => {
        console.error(err);
      }
    });

    //     uploadImage(imageFile: File): Promise<any> { // Return type is Promise<any>
    //       const formData
    //   :
    //     FormData = new FormData();
    //     formData.append('image', imageFile, imageFile.name);
    //
    //     // Replace 'YOUR_IMAGE_UPLOAD_API_URL' with your backend API endpoint for image upload
    //     return this.http.post<any>(environment.apiBaseUrl + "/upload", formData).toPromise();
    // }
  }
}
