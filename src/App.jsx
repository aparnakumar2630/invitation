import { useState } from "react";
import Passcode from "./components/Passcode";
import Scrapbook from "./components/Scrapbook";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return unlocked ? (
    <Scrapbook />
  ) : (
    <Passcode onUnlock={() => setUnlocked(true)} />
  );
}