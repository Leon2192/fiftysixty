import './App.css'
import { useState } from "react"
import Hero from "./components/Hero/HeroPremium"
import Countdown from "./components/CountDown/CountDownPremium"
import InfoEvent from "./components/InfoEvent"
import Gallery from "./components/Gallery/GalleryPremium"
import Confirm from "./components/Confirm"
import EntryAudioModal from "./components/EntryAudioModal"
import FooterSignature from "./components/FooterSignature"

function App() {
  const [started, setStarted] = useState(false)
  const [musicEnabled, setMusicEnabled] = useState(false)

  const handleEntrySelection = (withMusic) => {
    setMusicEnabled(withMusic)
    setStarted(true)
  }

  return (
    <>
      <EntryAudioModal
        open={!started}
        onSelect={handleEntrySelection}
      />

      {started && (
        <>
          <Hero enableMusic={musicEnabled} />
          <Countdown />
          <InfoEvent />
          <Gallery />
          <Confirm />
          <FooterSignature />
        </>
      )}
    </>
  )
}

export default App
