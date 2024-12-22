import { getUser, createCustomToken, createUser, checkUser } from "./_db";
import { FirebaseScrypt } from "firebase-scrypt";

const firebaseParameter = {
  memCost: +process.env.MEM_COST,
  rounds: +process.env.ROUNDS,
  saltSeparator: process.env.SALT_SEPARATOR,
  signerKey: process.env.SIGNER_KEY,
};

export const scrypt = new FirebaseScrypt(firebaseParameter);

export default async function handler(req, res) {
  try {
    const { regno, password } = req.body;
    // check user in db
    const user = await getUser(regno);
    if (!user) return res.status(400).json({ message: "No User Found" });

    // create user credentials
    await createUser(user.id, user.name, password).catch(() => {});
    if (!(await checkUser(user.id, password)))
      return res.status(400).json({ message: "Regno/Password is incorrect" });

    const additionalClaims = {
      isteacher: user.isteacher,
    };

    const customToken = await createCustomToken(user.id, additionalClaims);
    return res
      .status(200)
      .json({ customToken, user: { name: user.name, regno } });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal Error" });
  }
}
