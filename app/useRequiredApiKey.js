import { useEffect } from "react";

export const useRequiredApiKey = () => {
  useEffect(() => {
    const localStorageApiKey = localStorage.getItem("omdbApiKey");

    if (!localStorageApiKey) {
      while (!localStorage.getItem("omdbApiKey")) {
        const apiKey = prompt("Quel est votre OMBD API KEY ?");
        if (apiKey) {
          localStorage.setItem("ombdApiKey", apiKey);
        }
      }
    }
  }, []);
};
