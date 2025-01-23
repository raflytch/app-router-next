"use client";

// import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  // const [count, setCount] = useState(0);
  return (
    <div>
      {/* <h1>Template {count}</h1> */}
      {/* <button
        className="bg-blue-500"
        onClick={() => setCount(count + 1)}
      >{`Count: ${count}`}</button> */}
      {children}
    </div>
  );
}
