import { deleteUser } from "./_db";

export default async function handler(req, res) {
  try {
    const { uid } = req.body;
    await deleteUser(uid);
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal Error" });
  }
}
