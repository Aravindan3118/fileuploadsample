import { Component } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fileUpload';
  myImage = null
  constructor(private http: HttpClient){
    
  }
  upload(files){
    //pick from one of the 4 styles of file uploads below
    this.uploadAndProgress(files);
  }

  uploadAndProgress(files){
    console.log(files)
    var formData = new FormData();
    formData.append('file',files[0])
    // Array.from(files).forEach(f => formData.append('file[]',f))
    
    this.http.post('http://172.16.6.154:8081/user/uploadProfile', formData)
      .subscribe(res => {
        console.log('res',res)
        this.myImage = res['url']
    });
  }
}
