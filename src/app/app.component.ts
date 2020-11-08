import { Component } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AwsSDKDemo';

  async clickButton() {
    await this.loadLibrary();
  }

  async loadLibrary() {
    
    const s3 = new S3({});
    console.log(s3);
  }
}
