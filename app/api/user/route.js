import User from "@/models/userModel";
import connectToDb from "@/utils/connectToDb";

export const POST = async (req, res) => {
  const { name, email } = await req.json();

  try {
    await connectToDb();
    const user = new User({ name, email });
    await user.save();
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.log(error);
  }
};

export const GET = async (req, res) => {
  try {
    await connectToDb();
    return new Response("I am working");
  } catch (error) {
    console.log(error);
  }
};
