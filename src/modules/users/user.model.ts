import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from './user.interface';



const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['admin', 'rider', 'driver'], required: true },
  isBlocked: { type: Boolean, default: false },
  approvalStatus: { type: String, enum: ['pending', 'approved', 'suspended'], default: 'pending' }, // For drivers
  onlineStatus: { type: Boolean, default: false }, // For drivers
  vehicleInfo: { type: String }, // For drivers, e.g., "Toyota Camry - ABC123"
  currentRide: { type: Schema.Types.ObjectId, ref: 'Ride' }, // To prevent multiple active rides
});

// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model<IUser>('User', UserSchema);