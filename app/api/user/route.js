import User from "@/models/userModel";
import connectToDb from "@/utils/connectToDb";

export const GET = async () => {
  try {
    await connectToDb();
    const response = await User.find({});
    return new Response(JSON.stringify(response[0].name));
  } catch (error) {
    console.log(error);
  }
};
