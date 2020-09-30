import "firebase/storage";
import {firebase} from "../config/FirebaseConfig";

const storage = firebase.storage();

class UploadService {
  public upload(
    pathFolder: string,
    fileName: string,
    file: File | Blob
  ): Promise<string> {
    return storage
      .ref(`/${pathFolder}/${fileName}`)
      .put(file)
      .then((value: any) => {
        console.log(value);
        return storage
          .ref(pathFolder)
          .child(fileName)
          .getDownloadURL()
          .then((url: string) => {
            return url;
          });
      });
  }

  public uploadWithAutogenFileName(
    pathFolder: string,
    file: File | Blob
  ): Promise<string> {
    return this.upload(pathFolder, new Date().getTime().toString(), file);
  }
}
export const uploadService = new UploadService();
