import { useState } from "react";
import Passcode from "./Components/Passcode";
import Scrapbook from "./Components/Scrapbook";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return unlocked ? (
    <Scrapbook />
  ) : (
    <Passcode onUnlock={() => setUnlocked(true)} />
  );
}