"use client";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <ClipLoader
      color="#0ea5e9"
      className="absolute inset-0 m-auto"
      size={70}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
