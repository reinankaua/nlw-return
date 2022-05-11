import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTaken: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTaken
}: ScreenshotButtonProps) {

  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTaken(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
        <button
          type="button"
          className="p-1 w-10 h-10 rounded-lg border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => onScreenshotTaken(null)}
          style={{
            backgroundImage: `url(${screenshot})`,
          }}
        >
          <Trash weight="fill"/>
        </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg border-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-200 dark:focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      { isTakingScreenshot ? <Loading /> : <Camera className="h-6 w-6 "/>}
    </button>
    )
}