'use client';

import { useState } from 'react';
import { site } from '@/data/site';
import Icon from '@/components/Icon';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-content px-4 py-12">
      <h1 className="text-3xl font-semibold text-ink">Contact us</h1>
      <p className="mt-2 max-w-xl text-stone-500">
        Questions about an order or a service? Send a note below. This form doesn’t actually send
        anything or store your message.
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="space-y-3 text-sm text-stone-600 lg:col-span-1">
          <p className="font-semibold text-ink">{site.name}</p>
          <p>{site.address}</p>
          <p>{site.hours}</p>
          <p className="pt-2">
            <span className="text-stone-400">Email</span>
            <br />
            {site.email}
          </p>
          <p>
            <span className="text-stone-400">Phone</span>
            <br />
            {site.phone}
          </p>
        </div>

        <div className="lg:col-span-2">
          {sent ? (
            <div className="rounded-2xl border border-sage-300 bg-sage-100 p-8 text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-sage-700">
                <Icon name="check" className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-ink">Thanks for reaching out</h2>
              <p className="mt-2 text-sm text-stone-600">
                Your message wasn’t actually sent or stored anywhere.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-4 rounded-full border border-stone-300 px-5 py-2 text-sm text-ink hover:border-brand-500"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-stone-200 bg-white p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="text-stone-600">Name</span>
                  <input
                    required
                    autoComplete="name"
                    className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-brand-500"
                  />
                </label>
                <label className="block text-sm">
                  <span className="text-stone-600">Email</span>
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-brand-500"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm">
                <span className="text-stone-600">Message</span>
                <textarea
                  required
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-brand-500"
                />
              </label>
              <button
                type="submit"
                className="mt-5 rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-cream hover:bg-brand-700"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
