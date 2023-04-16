import { getDb } from "../config/setup";
import { comparePassword, hashPassword } from "../helpers/bycrypt";
import { createToken } from "../helpers/jwt";
const Users = () => {
  const database = getDb();
  return database?.collection("Users");
};
const createUsers = async (
  username: string,
  password: string
): Promise<any> => {
  try {
    // check if user already exist
    const checkUserIsAlreadyInDb = await Users()?.findOne({ username });
    // if username not exist add new user
    if (!checkUserIsAlreadyInDb) {
      const newUsers = await Users()?.insertOne({
        username: username,
        password: hashPassword(password),
      });
      return Promise.resolve(newUsers.insertedId);
    }
    // if username exist throw new error
    throw { message: "Username already exist" };
  } catch (error) {
    return Promise.reject(error);
  }
};

const login = async (username: string, password: string): Promise<any> => {
  try {
    // check if user is exist
    const findUser = await Users()?.findOne({ username });
    if (findUser) {
      // compare hash password
      const checkPassword = comparePassword(password, findUser.password);
      console.log(checkPassword);
      if (checkPassword) {
        //create token
        const payload = {
          username,
          role: "admin",
        };
        const access_token = createToken(payload);
        return Promise.resolve(access_token);
      }
      throw { message: "Invalid usename or password" };
    }
    throw { message: "user is not exist" };
  } catch (error) {
    return Promise.reject(error);
  }
};

export { createUsers, login };
