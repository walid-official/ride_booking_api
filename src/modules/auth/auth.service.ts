
import { generateToken } from '../../utils/jwt.utils';
import { IUser } from '../users/user.interface';
import { User } from '../users/user.model';

export const register = async (userData: Partial<IUser>) => {
  const user = new User(userData);
  await user.save();
  return user;
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid credentials');
  }
  if (user.isBlocked) throw new Error('Account blocked');
  const token = generateToken(user._id.toString(), user.role);
  return { user, token };
};