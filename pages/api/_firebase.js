const { initializeApp, cert, getApps, getApp } = require("firebase-admin/app");
const serviceAccount = require("admin_key.json");

if (getApps().length === 0) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}
const admin = getApp();
export default admin;
