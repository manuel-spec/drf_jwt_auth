import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="flex m-5 justify-center items-center">
      <div className="flex flex-col border rounded-xl px-10 py-20">
        <div>
          <h1 className="text-3xl border-b w-full text-center mb-3 p-2">
            Login
          </h1>
        </div>
        <form
          action=""
          className="flex flex-col"
          onSubmit={() => handleLogin(event)}
        >
          <input
            type="text"
            className="border py-2 px-10 rounded-lg mb-2 text-center"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border py-2 px-10 rounded-lg mb-2 text-center"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="border p-1 rounded-lg bg-[#496989] text-white hover:bg-[#58A399]"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
