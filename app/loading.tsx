"use client";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <ClipLoader
      className="absolute inset-0 m-auto"
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
