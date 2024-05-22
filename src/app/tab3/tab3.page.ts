import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.serives';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public photoService: PhotoService) {}

  // async ngOnInit() {
  //   await this.photoService.loadSaved();
  // }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
