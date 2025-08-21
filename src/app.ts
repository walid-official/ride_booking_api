// import express from 'express';

// import authRoutes from './modules/auth/auth.routes';

// import dotenv, { config } from 'dotenv';
// import userRoutes from './modules/users/user.routes';

// dotenv.config();

// const app = express();

// app.use(express.json());

// config();

// app.use('/auth', authRoutes);
// app.use('/users', userRoutes);
// // app.use('/drivers', driverRoutes);
// // app.use('/rides', rideRoutes);

// app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   res.status(err.status || 500).json({ message: err.message });
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express, { Request, Response } from 'express';
import cors from 'cors'; 
import authRoutes from './modules/auth/auth.routes';
import userRoutes from './modules/users/user.routes';



const app = express();

app.use(express.json());
app.use(
  cors()
);


app.use('/auth', authRoutes);
app.use('/users', userRoutes);


app.get("/", (req: Request, res: Response) => {
  res.send("Server connected successfully");
});


export default app;