"use client";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
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
