import { useEffect, useState } from "react";

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);
  let origin = "";
  let pathname = "/";
  let hash = "";
  let fullPath = "";

  if (typeof window !== "undefined") {
    origin = window?.location?.origin ? window.location.origin : "";
    pathname = window?.location?.pathname ? window.location.pathname : "/";
    hash = window?.location?.hash ? window.location.hash : "";
  }

  fullPath = pathname + hash;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return { origin: "", pathname: "", hash: "", fullPath: "" };

  return { origin: origin, pathname: pathname, hash: hash, fullPath: fullPath };
};
