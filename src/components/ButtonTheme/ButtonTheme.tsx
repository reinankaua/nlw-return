import { Moon, Sun } from 'phosphor-react'
import useDarkMode  from '../../hooks/useDarkMode'

export function ButtonTheme() {

  const [colorTheme, setTheme] = useDarkMode()
  
  return (
    <div className='flex flex-1 justify-end p-8'>
      <button 
      className=" dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-300 dark:hover:text-zinc-800 bg-zinc-300 text-zinc-900 p-2 m-4 rounded-full mr-0 mt-4 hover:bg-zinc-500 hover:text-zinc-200  transition-colors"
      onClick={() => setTheme(colorTheme)} 
  
      >
      {colorTheme === 'light' ?
        <Sun 
          weight='fill'
          height={24}    
          width={24}
        />
      :
      <Moon 
          weight='fill'
          height={24}    
          width={24}

        />
    }
    </button>
    </div>
  )
}