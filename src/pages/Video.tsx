import React from "react";

export default function Video() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-4xl">
        {/* Placeholder Box */}
        <div
          className="bg-gray-200 rounded-xl shadow-md w-full h-[500px] flex items-center justify-center"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="text-gray-500 text-lg">Video Walkthrough Placeholder</span>
        </div>
      </div>
    </div>
  );
}
