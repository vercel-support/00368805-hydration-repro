"use client";

let staticCount;

export function ClientComponent({ count }) {
  staticCount ??= count;

  console.log("client component staticCount", staticCount);

  return staticCount;
}
