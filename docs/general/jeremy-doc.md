github : Cuistot-du-coin | cuistot1

1. Blog | Netlify to see deploy -> https://app.netlify.com/sites/blog-cuistot-du-coin/deploys

Issue with search | didn't find good doc

Docs hugo : https://github.com/gohugoio/hugo
https://gohugo.io/getting-started/

2. Admin On Rest

Every id in database have to be name 'id'.
Location -> I think we have to use 2 fields instead name location.x and location.y

No reference between tables

Docs: https://github.com/marmelab/aor-simple-graphql-client/blob/b8f36adae002d17dbd844ec68192e124f963f42a/README.md
https://marmelab.com/blog/2017/06/01/aor-graphql.html

https://stackoverflow.com/questions/45056706/admin-on-rest-error-data-format
https://stackoverflow.com/questions/44973525/aor-simple-graphql-client-error-when-loading-data

3. Email

With SES | project name -> Admin-on-rest_server_with_email
https://github.com/Cuistot-du-coin/admin-on-rest_server_with-email
files for email -> src/email/* -> https://github.com/Cuistot-du-coin/admin-on-rest_server_with-email/tree/master/src/email

MJML he's use to generate html email -> https://mjml.io/
Project Email -> https://github.com/Cuistot-du-coin/Email

Docs : http://budiirawan.com/send-emails-using-amazon-ses-and-node-js/
https://github.com/timstermatic/node-amazon-ses-example/blob/master/send.js
https://github.com/dennmart/nodemailer-express/blob/master/app.js

4. Cuistot server

Sequelize : http://docs.sequelizejs.com/
http://dev.apollodata.com/tools/

Error with scalar type Date  : EX : Argument \"birthday_legal\" has invalid value \"05-11-1996\".\nExpected type \"Date\", found \"05-11-1996\"
Doc : http://dev.apollodata.com/tools/graphql-tools/scalars.html

J'utilise le context pour gérer les autorisations des requêtes faites au serveur.
La definition du context est en dur pour le moment :
server/index.js -> ligne 72 à 94

5. Cook screen

url : /cook/:cook_id
Pour accéder à la page cuistot -> cliquer sur l'avatar d'un cuistot.
url : /cook_profil/:cook_id
Pour accéder à la page profil cuistot -> dans le menu une fois connecté entre Modifier le profil et déconnexion.
Dans les requêtes utilisées pour les pages ci-dessus je n'ai pas utilisé birthday_legal : erreur avec le type scalar Date dans le serveur.
