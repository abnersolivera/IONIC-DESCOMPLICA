import { Platform } from "@ionic/angular";
import { UserPhoto } from "../modules/userPhoto.module";
import { Injectable } from "@angular/core";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

@Injectable({ providedIn: "root"})
export class PhotoService {
    public photos: UserPhoto[] = [];
    private PHOTO_STORAGE: string = "photos";

    constructor(private platform: Platform) {}

    public async addNewToGallery() {
        const capturePhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        });
    }

    // this.photos.unshift({
    //     filepath: "soon...",
    //     webviewPath: capturePhoto.webPath
    // });
}