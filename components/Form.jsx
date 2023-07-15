"use client";
import { addData } from "@/lib/ServerAction";

const Form = () => {
  return (
    <form
      action={addData}
      className="h-screen w-full flex flex-col justify-center items-center gap-2"
    >
      <input type="text" name="name" className="border-2 rounded-lg " />
      <input type="email" name="email" className="border-2 rounded-lg " />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
