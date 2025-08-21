import mongoose from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'rider' | 'driver';
  isBlocked: boolean;
  // Driver-specific fields
  approvalStatus?: 'pending' | 'approved' | 'suspended';
  onlineStatus?: boolean;
  vehicleInfo?: string;
  currentRide?: mongoose.Types.ObjectId;
  comparePassword(candidatePassword: string): Promise<boolean>;
}