import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

export const createTokenAndSaveCookies = async (userId, res) => {
  try {
    console.log(userId);
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_TOKEN, {
      expiresIn: "10d",
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use `true` if using HTTPS in production
      sameSite: "lax", // Adjust if frontend and backend are on different domains
      path: "/",
    });

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { token },
      { new: true } // This ensures the update returns the modified document
    );

    if (!updatedUser) {
      console.log("User not found. Unable to save token.");
      return null;
    }
    return token;
  } catch (error) {
    console.log("error saving toekn to user :", error);
  }
};
