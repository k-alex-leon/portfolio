import React from "react";

export default function Information({ content = '' }) {
  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-700 rounded-[90px]">
      <p className="w-full text-center text-6xl p-20 font-anton text-white leading-relaxed">
        {content}
      </p>
    </div>
  );
}
