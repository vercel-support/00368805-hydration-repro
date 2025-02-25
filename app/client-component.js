"use client";

export function ClientComponent({ count }) {
  staticCount ??= count;

  console.log("client component staticCount", count);

  return count;
}
