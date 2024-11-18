import { useCallback, useEffect, useState, useRef } from "react";

import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const passwordRef = useRef();

  const handleCopy = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    alert("Password echo "# passwordGenerator" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nehalgulatiehub/passwordGenerator.git
git push -u origin mainCopied");
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            placeholder="password"
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={handleCopy}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              className="cursor-pointer"
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="Numbers"
              id=""
              onChange={(e) => setnumberAllowed((prev) => !prev)}
            />
          </div>

          <label>Numbers</label>
          <input
            type="checkbox"
            name="Char"
            id=""
            onChange={(e) => setcharAllowed((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
