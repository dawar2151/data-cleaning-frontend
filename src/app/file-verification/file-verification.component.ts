import { Component, OnInit } from '@angular/core';
import { UploadService } from '../_services/upload.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { concat } from  'rxjs';
@Component({
  selector: 'app-file-verification',
  templateUrl: './file-verification.component.html',
  styleUrls: ['./file-verification.component.css']
})
export class FileVerificationComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }
  fileOverBase(event):  void {
    this.hasBaseDropZoneOver  =  event;
  }
  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }
  upload() {
    const files = this.getFiles();
    console.log(files);
    const requests = [];
    files.forEach((file) => {
      const formData = new FormData();
      formData.append('file' , file.rawFile, file.name);
      requests.push(this.uploadService.upload(formData));
    });

    concat(...requests).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
