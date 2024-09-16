"use client";
import Image from "next/image";
import { useQueryState } from "./useQueryState";
import { useDebounceValue } from "./useDebounceValue";
import { useRequiredApiKey } from "./useRequiredApiKey";
import { useMoveQuery } from "./useMoveQuery";

export default function Home() {
  const [search, setSearch] = useQueryState("s", "");
  const debounceSearch = useDebounceValue(search, 500);
  useRequiredApiKey();
  const { data, error, isLoading } = useMoveQuery(debounceSearch);

  return (
    <div className="flex flex-col gap-4 py-8 max-w-4xl m-auto px-4">
      <header>
        <h1 className="text-4xl font-bold text-center">MoveFinder</h1>
        <fieldset className="border border-neutral p-4 rounded-lg">
          <legend>Search</legend>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <p>Query :{debounceSearch}</p>
        </fieldset>
      </header>
      <main>
        {error ? <p>Error : {error.message}</p> : null}
        <div className="grid grid-cols-3 gap-8">
          {isLoading ? <p>....</p> : null}
          {data?.Search?.length > 0
            ? data.Search.map((movie) => (
                <div key={movie.imdbID} className="flex flex-col gap-4">
                  <img
                    src={movie.Poster}
                    alt={`${movie.title}'s poster`}
                    className="w-full h-full object-cover rounded-md shadow aspect-[2/3]"
                  />
                  <div>
                    <p className="text-sm font-medium">{movie.Title}</p>
                    <p className="text-xs text-neutral-content font-medium">
                      {movie.Year} | {movie.Type}
                    </p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </main>
    </div>
  );
}
