"use client";

export function ClientComponent({ count }) {
  const staticCount = count;

  console.log("client component staticCount", count, staticCount);

  return count;
}
