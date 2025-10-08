"use client";

import { useDarkStore } from "@/store";
import { useEffect, useState } from "react";

const DarkmodeSwitch = () => {
  const {darkmode, setDarkmode} = useDarkStore();
  function handleSwitch() {
    darkmode ? setDarkmode(false) : setDarkmode(true);
  }
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    darkmode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkmode]);

  return <button onClick={handleSwitch}>{darkmode ? "🌙" : "🔆"}</button>;
};

export default DarkmodeSwitch;
