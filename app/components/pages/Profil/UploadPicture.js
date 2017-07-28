import React from "react";
import { Image } from "cloudinary-react";

import AddPhoto from "./AddPhoto";
import StyleText from "./StyleText";

/* Need to have a cloudinary account:
In settings: go to the 'upload' tab and then at the bottom of the page 'upload preset'
create one with 'unsigned' mode and edit 'incoming transfomartion' and put the
'resize and crop' mode at 'crop' and 'gravity' at 'custom'.
Then you juste need to change CLOUD_NAME with your cloud name
and CLOUDINARY_UPLOAD_PRESET with your upload preset name.
*/

const CLOUDINARY_UPLOAD_PRESET = "Preset";
const CLOUD_NAME = "morgane";
var imagePreview = null;

export class UploadPicture extends React.Component {
  state = {
    publicId: this.props.fieldValues.pictureID
  };

  ButtonPhoto = () => {
    {
      cloudinary.openUploadWidget(
        {
          cloud_name: CLOUD_NAME,
          upload_preset: CLOUDINARY_UPLOAD_PRESET,
          theme: "minimal",
          multiple: "false",
          cropping: "server",
          cropping_aspect_ratio: "0.75",
          theme: "minimal",
          text: {
            "sources.local.title": "Mes fichiers",
            "sources.local.drop_file": "Déposer un fichier ici",
            "sources.local.drop_or": "ou",
            "sources.local.select_file": "Sélection fichier",
            "sources.url.title": "URL",
            "sources.url.note": "une URL publique d'un fichier d'image:",
            "sources.url.upload": "Télécharger",
            "sources.url.error": "Tapez, s'il vous plait, une URL valide.",
            "sources.camera.title": "Camera",
            "sources.camera.note":
              "Soyez sur que votre navigateur autorise la photo de la camera, positionnez vous sur Photo:",
            "sources.camera.capture": "Photo",
            "progress.uploading": "Téléchargement...",
            "progress.upload_cropped": "Télécharger",
            "progress.processing": "En cours de traitement...",
            "progress.retry_upload": "Reessayer",
            "progress.failed_note":
              "Certaines de vos images ne se sont pas téléchargées."
          }
        },
        (err, result) => {
          this.setState({
            publicId: result[0].public_id
          });
          (this.props.fieldValues.pictureID = this.state.publicId), (imagePreviewFirst = (
            <Image
              cloudName={CLOUD_NAME}
              publicId={this.state.publicId}
              height="245"
              width="182"
            />
          ));
        }
      );
    }
  };

  render() {
    if (this.state.publicId) {
      imagePreview = (
        <Image
          cloudName={CLOUD_NAME}
          publicId={this.state.publicId}
          height="245"
          width="182"
        />
      );
    } else {
      imagePreview = (
        <div className="previewText">
          <StyleText>Cliquez pour ajouter une photo</StyleText>
        </div>
      );
    }
    return (
      <button type="button" onClick={this.ButtonPhoto}>
        <AddPhoto>
          {imagePreview}
        </AddPhoto>
      </button>
    );
  }
}

export default UploadPicture;
