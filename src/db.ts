import mongoose, { Schema, model } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL!)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});



// const tagSchema = new Schema({
//   title: { type: String, required: true, unique: true }
// });




// const contentTypes = ['image', 'video', 'article', 'audio']; // Extend as needed

// const contentSchema = new Schema({
//   link: { type: String, required: true },
//   type: { type: String, enum: contentTypes, required: true },
//   title: { type: String, required: true },
//   tags: [{ type: Types.ObjectId, ref: 'Tag' }],
//   userId: { type: Types.ObjectId, ref: 'User', required: true },
// });


// const linkSchema = new Schema({
//   hash: { type: String, required: true },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// });



export const UserModel =  model("User", UserSchema);
// const contentModel =  model("content", contentSchema);
// const tagModel =   model("tags", tagSchema);
// const linkModel =  model("link", linkSchema)

// module.exports = {
//     userModel,
//     contentModel,
//     tagModel,
//     linkModel

// }