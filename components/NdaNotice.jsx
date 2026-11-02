"use client";

// components/NdaNotice.jsx
import { useState, useRef, useEffect } from "react";

const NdaNotice = ({
  company,
  email = "simon_wong_chung@sfu.ca",
}) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context): fall back to opening mail client
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="mx-auto max-w-[488px] rounded-md bg-[#F0F5FD] px-6 py-8 text-center">
      <h4 className="text-mainLine tracking-tight">This project is under NDA</h4>
      <p className="mt-3 mb-4 tracking-tight text-foreground/70">
        I can't share more details about this work publicly. However, if you'd
        like to learn more about what I worked on at {company}, please reach out!
      </p>
      <button
        type="button"
        onClick={copyEmail}
        className="rounded-md bg-blue-600 px-4 py-2 text-white tracking-tight transition-colors hover:bg-blue-700 cursor-pointer"
      >
        {copied ? "Copied!" : "Copy email"}
      </button>
    </div>
  );
};

export default NdaNotice;
