import { useState } from "react";

export default function Home() {
  const [names, setNames] = useState({ name1: "", name2: "", name3: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setNames({ ...names, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/.netlify/functions/prayer-names", {
      method: "POST",
      body: JSON.stringify({ names }),
    });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-5xl font-bold mb-6">1-3-1 Initiative</h1>
      <p className="max-w-xl text-center mb-8">
        1 act of discipleship a day. 3 people to pray for who are far from God. 1 invite to church a week.
      </p>

      {submitted ? (
        <p className="bg-green-700 p-4 rounded-lg">Thank you! Your 3 names were submitted.</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl shadow-lg w-80 space-y-4">
          <h2 className="text-xl font-semibold">Your 3 Names</h2>
          <input type="text" name="name1" placeholder="Name 1" value={names.name1} onChange={handleChange} className="w-full p-2 rounded text-black" />
          <input type="text" name="name2" placeholder="Name 2" value={names.name2} onChange={handleChange} className="w-full p-2 rounded text-black" />
          <input type="text" name="name3" placeholder="Name 3" value={names.name3} onChange={handleChange} className="w-full p-2 rounded text-black" />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
            Submit
          </button>
        </form>
      )}
    </main>
  );
}