import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalInAppBrowserService } from '../services/local-inappbrowser.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public textInput: string;

  constructor(private activatedRoute: ActivatedRoute, private localInaAppbrowser: LocalInAppBrowserService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  buttonClick(){
    console.log(this.textInput);
    if(this.textInput?.trim()) {
      this.localInaAppbrowser.initBrowser(this.textInput.trim());
    }
  }
}
