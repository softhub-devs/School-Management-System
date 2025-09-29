"use client";

import { useEffect } from "react";

const CleanUrl = () => {
  useEffect(() => {
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, "", cleanUrl);
  }, []);

  return null; // Nothing renders
};

export default CleanUrl;
