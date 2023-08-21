import * as bcrypt from 'bcryptjs';

export const encodeHash = (text: string, saltLength = 10) => {
  const salt = bcrypt.genSaltSync(saltLength);
  const hashedText = bcrypt.hashSync(text, salt);
  return hashedText;
};
