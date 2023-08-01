import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient, private httpClient:HttpClient) { }

  uploadImage(imageFile: File): Promise<any> {
    const formData: FormData = new FormData();
    formData.append('image', imageFile, imageFile.name);

    // Replace 'YOUR_IMAGE_UPLOAD_API_URL' with your backend API endpoint for image upload
    return this.http.post<any>(environment.apiBaseUrl + "/events/latest", formData).toPromise();
  }
}
