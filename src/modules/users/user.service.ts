import { User } from './user.model';

export const getAllUsers = async () => User.find({});

export const blockUser = async (id: string, isBlocked: boolean) => {
  const user = await User.findByIdAndUpdate(id, { isBlocked }, { new: true });
  if (!user) throw new Error('User not found');
  return user;
};

export const getUserById = async (id: string) => User.findById(id);