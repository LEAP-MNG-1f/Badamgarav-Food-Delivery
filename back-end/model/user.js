import mongoose from "mongoose";

//Schema uusgeh

const roleEnum = {
  values: ["user", "admin"],
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: roleEnum,
    default: "user",
  },
});

export const User = mongoose.model("User", userSchema); //Model uusgej bna
