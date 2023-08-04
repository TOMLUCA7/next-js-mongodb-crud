"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input 
        className='border border-slate-500 px-8 py-2' 
        type="text" 
        placeholder='Topic title Name'
        value={title}
        onChange={(text) => setTitle(text.target.value)}
      />

      <input 
        className='border border-slate-500 px-8 py-2' 
        type="text" 
        placeholder='Topic Description'
        value={description}
        onChange={(text) => setDescription(text.target.value)}
      />

      <button type="submit" className='bg-green-600 font-bold text-white py-3 px-6'>
        Add Topic
      </button>
    </form>
  )
}

export default AddTopic