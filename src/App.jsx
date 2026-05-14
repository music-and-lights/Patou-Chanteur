import { useEffect } from 'react'
import siteMarkup from './siteMarkup.html?raw'
import './siteStyles.css'

function App() {
  useEffect(() => {
    const nav = document.getElementById('navbar')

    if (!nav) {
      return
    }

    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: siteMarkup }} />
}

export default App
