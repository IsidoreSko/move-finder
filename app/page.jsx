"use client";
import Image from "next/image";
import { useQueryState } from "./useQueryState";
import { useDebounceValue } from "./useDebounceValue";
import { useRequiredApiKey } from "./useRequiredApiKey";

export default function Home() {
  const [query, setQuery] = useQueryState("s", "");
  const debounceQuery = useDebounceValue(query, 500);
  useRequiredApiKey();
  return (
    <div className="flex flex-col gap-4 py-8 max-w-4xl m-auto px-4">
      <header>
        <h1 className="text-4xl font-bold text-center">MoveFinder</h1>
        <fieldset className="border border-neutral p-4 rounded-lg">
          <legend>Search</legend>
          <label class="input input-bordered flex items-center gap-2">
            <input
              type="text"
              class="grow"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
          <p>Query :{debounceQuery}</p>
        </fieldset>
      </header>
      <main></main>
    </div>
  );
}
