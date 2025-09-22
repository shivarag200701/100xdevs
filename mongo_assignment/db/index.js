import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://mikemax1998:Sivrahul%401998@cluster0.qedxute.mongodb.net/Courses?retryWrites=true&w=majority&appName=Cluster0"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  title: String,
  id: Number,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

export const Admin = mongoose.model("Admin", AdminSchema);
export const User = mongoose.model("User", UserSchema);
export const Course = mongoose.model("Course", CourseSchema);
