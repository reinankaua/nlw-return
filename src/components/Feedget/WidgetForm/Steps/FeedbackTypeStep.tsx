import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeStepChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeStepChanged }: FeedbackTypeStepProps){
  return (
    <>
    <header>
        <span className="text-zinc-800 dark:text-zinc-200 text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
    </header>
    
    <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button 
          key={key}
          className="bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-1 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          onClick={() => onFeedbackTypeStepChanged(key as FeedbackType)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        )
        })}
      </div>
      </>
  )
}