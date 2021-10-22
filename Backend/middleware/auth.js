import { verifyToken } from "../helpers/token.js";
import { UserService } from "../services/index.js";

let userService = new UserService();

export default async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    let user = verifyToken(token);
    let exist = await userService.verifyIfUserExist(user.cpf);

    if (exist === false) {
      console.log("Usuario Inexistente!");
      throw new Error();
    }
    req.user = user;

    console.log("--------------------");
    console.log(" Usuario Verificado!");
    console.log("--------------------");
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed." });
  }
};
