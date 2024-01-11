"use client";
import React from "react";

export default function Button() {
  return (
    <div>
      <div className="mt-5">
        <button
          onClick={() => console.log("click")}
          className="p-2 bg-green-500 text-black rounded-2xl"
        >
          {" "}
          button
        </button>
      </div>
    </div>
  );
}
