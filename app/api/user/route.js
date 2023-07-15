import User from "@/models/userModel";
import connectToDb from "@/utils/connectToDb";

// const Post = async (req, res) => {
//   try {
//     await connectToDb();
//     const { name, email } = await req.json();

//     const userCreate = new User({ name, email });
//     await userCreate.save();

//     return new Response(JSON.stringify(userCreate), { status: 201 });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export { Post as POST };

export const GET = async () => {
  try {
    await connectToDb();
    const response = await User.find({});
    return new Response(JSON.stringify(response[0].name));
  } catch (error) {}
};
