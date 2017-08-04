Dev cuistot du coin Morgane

Configuration:
Config Facebook:
https://developers.facebook.com/
Dans le fichier config.js dans la dossier server configurer les clés facebook: pour cela il faut avoir creér un application sur facebook developpers: (appli web → mettre le domaine en localhost pour les tests et mettre l’URL de l’appli)
Ajouter une demande facebook nouveaux champ: (photo de profil..)
- /Server/index →  ligne: 127: ajouter dans scope (http://passportjs.org/docs/facebook)
- /Server/passport → ligne: 49: ajouter dans profileFields pour pouvoir le mettre dans le BDD (http://www.ccalvert.net/books/CloudNotes/Assignments/PassportFacebook.html)

Config cloudinary:
cloudinary.com
Creer un compte cloudinary: puis dans les paramètres aller dans l’onglet ‘upload’ puis creér un ‘upload preset’ avec le mode ‘unsigned’ et edite ‘incoming transformation’ et mettre ‘resize and crop’ en ‘crop’ et ‘gravity’ en ‘custom’.
Pas de fichier, car la bibliothèque cloudinary-react est pas top.. Donc:
/app/components/genericComponent/Header/index: ligne: 298: changer le nom du CloudName
/app/components/genericComponent/HeaderPages/index: ligne: 72: pareil
C’est d’ailleurs ces deux images qui montre les avatars de base → donc pour mettre celle du profil ce sera ici avec le public_id à personaliser
/app/pages/Organize/Steps/ImageCloudinary: ligne:15 changer le nom du CloudName et Cloudinary_Upload_Preset
/app/pages/Profil/UploadPicture: ligne: 15 pareil.

Problèmes:
- Champ photo secondaire qui ne sont pas enregistré dans la BDD dans /app/pages/Organize/index (pas de champ en BDD)
- Champ Date pas rempli non plus

- Champ location gourmet: pas en base de donnée, il faut transformé l’adresse en point /app/component/genericComponent/Header/index

- /App/component/pages/Organize/Steps/PracticalInfo → les kitchen sont entrée en dur dans les options. Ligne: 240
- /App/component/Pages/Organize/index: location de kicthen pas en BDD

- Dans le Header (home), le menu déroulant qui apparaît, le modifier mon profil et le mes réservations ne sont pas clickable → surement un problème de z-index mais pas réussi à la corriger regarder dans
app/component/genericComponent/Header/StyleProfil..
