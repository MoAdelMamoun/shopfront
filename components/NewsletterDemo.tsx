'use client';

import { useState } from 'react';

export default function NewsletterDemo() {
  const [done, setDone] = useState(false);
  return (
    <div className="rounded-3xl bg-brand-700 px-6 py-12 text-center text-cream">
      <h2 className="text-2xl font-semibold">Join the (pretend) list</h2>
      <p className="mx-auto mt-2 max-w-md text-cream/80">
        This newsletter form is a demo — it doesn’t send anything or store your address.
      </p>
      {done ? (
        <p className="mx-auto mt-6 max-w-md rounded-full bg-cream/15 px-5 py-3 text-sm">
          Thanks! (Demo only — nothing was actually sent.)
        </p>
      ) : (
        <form
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          aria-label="Demo newsletter signup"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-full px-5 py-3 text-sm text-ink outline-none"
            aria-label="Email address (demo)"
          />
          <button type="submit" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream">
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
