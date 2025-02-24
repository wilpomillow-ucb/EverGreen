"use client";
import { Leaf, Flag, Globe } from "lucide-react";

export function Banner() {
  return (
    <div className="w-full bg-green-600 py-3 flex justify-center">
      <div className="max-w-2xl w-full flex justify-between items-center px-4 gap-4">
        <div className="flex items-center gap-2 text-white text-xs font-medium">
          <Leaf size={18} className="text-white" />
          <span>Sustainable and Ethical</span>
        </div>
        <div className="flex items-center gap-2 text-white text-xs font-medium">
          <Flag size={18} className="text-white" />
          <span>AU Delivery Only</span>
        </div>
        <div className="flex items-center gap-2 text-white text-xs font-medium">
          <Globe size={18} className="text-white" />
          <span>Follow our blog</span>
        </div>
      </div>
    </div>
  );
}
