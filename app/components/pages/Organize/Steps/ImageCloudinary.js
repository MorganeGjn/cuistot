import React from "react";
import { Image } from "cloudinary-react";
import PropTypes from "prop-types";
import AddPhoto from "./StyleAddPhoto";
import StyleText from "./Styletext";

/* Need to have a cloudinary account:
In settings: go to the 'upload' tab and then at the bottom of the page 'upload preset'
create one with 'unsigned' mode and edit 'incoming transfomartion' and put the
'resize and crop' mode at 'crop' and 'gravity' at 'custom'.
Then you juste need to change CLOUD_NAME with your cloud name
and CLOUDINARY_UPLOAD_PRESET with your upload preset name.
*/

const CLOUDINARY_UPLOAD_PRESET = "Preset";
const CLOUD_NAME = "morgane";

class ImageCloudinary extends React.Component {
  state = {
    publicId: this.props.publicId
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
          cropping_aspect_ratio: "1.75",
          theme: "minimal",
          text: {
            "sources.local.title": "Mes fichiers",
            "sources.local.drop_file": "Déposer un fichier ici",
            "sources.local.drop_or": "ou",
            "sources.local.select_file": "Sélection",
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
          this.props.passData(this.state.publicId);
        }
      );
    }
  };

  render() {
    let imagePreview;
    if (this.state.publicId) {
      imagePreview = (
        <Image
          cloudName={CLOUD_NAME}
          publicId={this.state.publicId}
          height={this.props.heightPhoto}
          width={this.props.widthPhoto}
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
        <AddPhoto
          width={this.props.widthContainer}
          height={this.props.heightContainer}
          text={imagePreview}
        />
      </button>
    );
  }
}

ImageCloudinary.propTypes = {
  heightPhoto: PropTypes.number.isRequired,
  widthPhoto: PropTypes.number.isRequired,
  heightContainer: PropTypes.number.isRequired,
  widthContainer: PropTypes.number.isRequired
};

export default ImageCloudinary;
