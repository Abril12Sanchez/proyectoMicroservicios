const admin = require("firebase-admin");
const serviceAccountFirebase = require("../proyectomicroservicios-dd33d-firebase-adminsdk-crp6u-63e076cf78.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountFirebase)
});

module.exports = admin;