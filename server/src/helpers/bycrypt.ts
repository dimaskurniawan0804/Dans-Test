const bcryptjs = require("bcryptjs");

const hashPassword = (password: string) => {
  return bcryptjs.hashSync(password, 10);
};

const comparePassword = (userPassword: string, hashPass: string) => {
  return bcryptjs.compareSync(userPassword, hashPass);
};

export { hashPassword, comparePassword };
