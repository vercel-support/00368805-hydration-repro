# Vercel Hydration Issue Repro

Minimal repro for a hydration issue on Vercel with Next.js. Static values in client components persist after on-demand revalidation, possibly due to edge caching

## Context

- **Next.js 15**: Static values stick after revalidation, showing outdated data
- **Next.js 14**: No issue remotely, suggesting different behavior
- **Suspect**: Edge cache or a Next.js 15 change

## Findings

- Only happens with client components, otherwise the value remains stale but in sync
- Rebuild fixes it, revalidation doesn’t
- Check browser vs. remote server logs (deployed) or browser vs. terminal server logs (local) — values differ post-revalidation
- Edge cache might be involved, given Next.js 14’s different remote behavior
