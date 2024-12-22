import admin from "./_firebase";
import { getFirestore } from "firebase-admin/firestore";
import { helpers } from "utils/helpers";
import { getAuth } from "firebase-admin/auth";
import { scrypt } from "./login";

const db = getFirestore(admin);

const createUser = async (uid, name, password) => {
  return await getAuth(admin).createUser({
    uid,
    displayName: name,
    password,
  });
};

const getUser = async (regno) => {
  return db
    .collection("users")
    .where("regno", "==", regno)
    .get()
    .then(helpers.format)
    .then((docs) => (docs ? docs[0] : null));
};

const checkUser = async (uid, password) => {
  const userRecord = await getAuth(admin).listUsers();
  const hash = userRecord.users.filter((user) => user.uid == uid)[0]
    .passwordHash;
  const salt = userRecord.users.filter((user) => user.uid == uid)[0]
    .passwordSalt;
  if (!hash) return true;
  return await scrypt.verify(password, salt, hash);
};

const createCustomToken = async (uid, claims) => {
  return await getAuth(admin).createCustomToken(uid, claims);
};

const deleteUser = async (uid) => {
  await db.doc(`users/${uid}`).delete();
  await getAuth(admin)
    .deleteUser(uid)
    .catch(() => {});
};

module.exports = {
  getUser,
  checkUser,
  createCustomToken,
  createUser,
  deleteUser,
};
