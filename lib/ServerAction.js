"use server";

import User from "@/models/userModel";

export const addData = async (formData) => {
  const user = new User({
    name: formData.get("name"),
    email: formData.get("email"),
  });
  await user.save();
  console.log("Created");
};
