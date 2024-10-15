import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js"; // Correct the import path for User model

export const authenticate = async (req, res, next) => {
  const token = req.cookies.jwt; // Ensure cookie-parser middleware is used in your app
  console.log("Token received:", token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized. No token provided." });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    console.log("Token decoded:", decoded);

    // Find the user by ID from the decoded token
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized. User not found." });
    }

    // Attach the user object to the request for use in the next middleware or route handler
    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication Error:", error.message);
    return res.status(401).json({ message: "Invalid token." });
  }
};

// import jwt from "jsonwebtoken";
// import { User } from "../model/user.model.js";
// export const authenticate = async (req, res, next) => {
//   const token = req.cookies.jwt;
//   console.log("Token received:", token);
//   if (!token) {
//     return res
//       .status(401)
//       .json({ message: "Unauthorized. No token provided." });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
//     // console.log("Token decoded:", decoded);
//     const user = await User.findById(decoded.userId);
//     if (!user) {
//       return res.status(401).json({ message: "Unauthorized. User not found." });
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     console.error("Authentication Error:", error.message);
//     return res.status(401).json({ message: "Invalid token." });
//   }
// };

// import jwt from "jsonwebtoken";
// import { User } from "../model/user.model.js";
