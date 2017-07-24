import React from 'react';
import StyledButton from './StyledButton';
import Title from './StyleTitle';
import AddPhoto1 from './StyleAddPhoto1';
import {Image} from 'cloudinary-react';
import StyleText from './Styletext';
import AddPhoto2 from './StyleAddPhoto2';
import StyleImageSecondary from'./StyleImageSecondary';
import StyleImage2 from './StyleImageSecondary'

/* Need to have a cloudinary account:
In settings: go to the 'upload' tab and then at the bottom of the page 'upload preset'
create one with 'unsigned' mode and edit 'incoming transfomartion' and put the
'resize and crop' mode at 'crop' and 'gravity' at 'custom'.
Then you juste need to change CLOUD_NAME with your cloud name
and CLOUDINARY_UPLOAD_PRESET with your upload preset name.
*/

const CLOUDINARY_UPLOAD_PRESET = 'Preset';
const CLOUD_NAME = 'morgane';
var imagePreviewFirst = null;
var imagePreviewTwo = null;
var imagePreviewThree = null;
var imagePreviewFour = null;

class ImageUpload extends React.Component {
state = {
  publicIdFirst:this.props.fieldValues.publicIdFirst,
  publicIdTwo:this.props.fieldValues.publicIdTwo,
  publicIdThree:this.props.fieldValues.publicIdThree,
  publicIdFour:this.props.fieldValues.publicIdFour
};

  ButtonPhotoFirst = () => {
    {cloudinary.openUploadWidget({cloud_name: CLOUD_NAME,
                                  upload_preset: CLOUDINARY_UPLOAD_PRESET,
                                  theme: 'minimal',
                                  multiple: 'false',
                                  cropping: 'server',
                                  cropping_aspect_ratio: '1.75',
                                  theme: 'minimal',
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
                                    "sources.camera.note": "Soyez sur que votre navigateur autorise la photo de la camera, positionnez vous sur Photo:",
                                    "sources.camera.capture": "Photo",
                                    "progress.uploading": "Téléchargement...",
                                    "progress.upload_cropped": "Télécharger",
                                    "progress.processing": "En cours de traitement...",
                                    "progress.retry_upload": "Reessayer",
                                    "progress.failed_note": "Certaines de vos images ne se sont pas téléchargées."
                                  }},
    (err,result) => {
      this.setState({
        publicIdFirst: result[0].public_id,
    })
    this.props.fieldValues.publicIdFirst = this.state.publicIdFirst,
      imagePreviewFirst = (<Image cloudName={CLOUD_NAME} publicId= {this.state.publicIdFirst} height='280' width='495'/>)
      }
    )}
}

ButtonPhotoTwo = () => {
  {cloudinary.openUploadWidget({cloud_name: CLOUD_NAME,
                                upload_preset: CLOUDINARY_UPLOAD_PRESET,
                                theme: 'minimal',
                                multiple: 'false',
                                cropping: 'server',
                                cropping_aspect_ratio: '1.75',
                                theme: 'minimal',
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
                                  "sources.camera.note": "Soyez sur que votre navigateur autorise la photo de la camera, positionnez vous sur Photo:",
                                  "sources.camera.capture": "Photo",
                                  "progress.uploading": "Téléchargement...",
                                  "progress.upload_cropped": "Télécharger",
                                  "progress.processing": "En cours de traitement...",
                                  "progress.retry_upload": "Reessayer",
                                  "progress.failed_note": "Certaines de vos images ne se sont pas téléchargées."
                                }},
  (err,result) => {
    this.setState({
      publicIdTwo: result[0].public_id,
  })
  this.props.fieldValues.publicIdTwo = this.state.publicIdTwo,
    imagePreviewTwo = (<Image cloudName={CLOUD_NAME} publicId= {this.state.publicIdTwo} height='86' width='154'/>)
    }
  )}
}

ButtonPhotoThree = () => {
  {cloudinary.openUploadWidget({cloud_name: CLOUD_NAME,
                                upload_preset: CLOUDINARY_UPLOAD_PRESET,
                                theme: 'minimal',
                                multiple: 'false',
                                cropping: 'server',
                                cropping_aspect_ratio: '1.75',
                                theme: 'minimal',
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
                                  "sources.camera.note": "Soyez sur que votre navigateur autorise la photo de la camera, positionnez vous sur Photo:",
                                  "sources.camera.capture": "Photo",
                                  "progress.uploading": "Téléchargement...",
                                  "progress.upload_cropped": "Télécharger",
                                  "progress.processing": "En cours de traitement...",
                                  "progress.retry_upload": "Reessayer",
                                  "progress.failed_note": "Certaines de vos images ne se sont pas téléchargées."
                                }},
  (err,result) => {
    this.setState({
      publicIdThree: result[0].public_id,
  })
  this.props.fieldValues.publicIdThree = this.state.publicIdThree,
    imagePreviewThree = (<Image cloudName={CLOUD_NAME} publicId= {this.state.publicIdThree} height='86' width='154'/>)
    }
  )}
}

ButtonPhotoFour = () => {
  {cloudinary.openUploadWidget({cloud_name: CLOUD_NAME,
                                upload_preset: CLOUDINARY_UPLOAD_PRESET,
                                theme: 'minimal',
                                multiple: 'false',
                                cropping: 'server',
                                cropping_aspect_ratio: '1.75',
                                theme: 'minimal',
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
                                  "sources.camera.note": "Soyez sur que votre navigateur autorise la photo de la camera, positionnez vous sur Photo:",
                                  "sources.camera.capture": "Photo",
                                  "progress.uploading": "Téléchargement...",
                                  "progress.upload_cropped": "Télécharger",
                                  "progress.processing": "En cours de traitement...",
                                  "progress.retry_upload": "Reessayer",
                                  "progress.failed_note": "Certaines de vos images ne se sont pas téléchargées."
                                }},
  (err,result) => {
    this.setState({
      publicIdFour: result[0].public_id,
  })
  this.props.fieldValues.publicIdFour = this.state.publicIdFour,
    imagePreviewFour = (<Image cloudName={CLOUD_NAME} publicId= {this.state.publicIdFour} height='86' width='154'/>)
    }
  )}
}

  render() {
    if (this.state.publicIdFirst){
        imagePreviewFirst = (<Image cloudName={CLOUD_NAME} publicId= {this.state.publicIdFirst} height='280' width='495'/>)
    }
    else{
      imagePreviewFirst = (<div className="previewText"><StyleText>Cliquez pour ajouter une photo</StyleText></div>)
    }
    if (this.state.publicIdTwo){
        imagePreviewTwo = (<Image cloudName={CLOUD_NAME} publicId= {this.state.publicIdTwo} height='86' width='154'/>)
    }
    else{
      imagePreviewTwo = (<div className="previewText"><StyleText>Ajouter une photo</StyleText></div>)
    }
    if (this.state.publicIdThree){
        imagePreviewThree = (<Image cloudName={CLOUD_NAME} publicId= {this.state.publicIdThree} height='86' width='154'/>)
    }
    else{
      imagePreviewThree = (<div className="previewText"><StyleText>Ajouter une photo</StyleText></div>)
    }
    if (this.state.publicIdFour){
        imagePreviewFour = (<Image cloudName={CLOUD_NAME} publicId= {this.state.publicIdFour} height='86' width='154'/>)
    }
    else{
      imagePreviewFour = (<div className="previewText"><StyleText>Ajouter une photo</StyleText></div>)
    }
    return (
      <div>
      <button type ="button" onClick={this.ButtonPhotoFirst}><AddPhoto1>
        {imagePreviewFirst}
      </AddPhoto1></button>
      <StyleImage2>
      <button type ="button" onClick={this.ButtonPhotoTwo}><AddPhoto2>
      {imagePreviewTwo}
      </AddPhoto2></button>
      <button type ="button" onClick={this.ButtonPhotoThree}><AddPhoto2>
      {imagePreviewThree}
      </AddPhoto2></button>
      <button type ="button" onClick={this.ButtonPhotoFour}><AddPhoto2>
      {imagePreviewFour}
      </AddPhoto2></button>
      </StyleImage2>
      </div>
    )
  }
}

export default ImageUpload;
