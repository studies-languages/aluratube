import { useState } from 'react'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { Timeline } from '../components/Timeline'
import { config } from '../config'

export default function Home() {
  const [search, setSearch] = useState('')
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      // marginTop: '50px'
    }}>
      <Menu search={search} setSearch={setSearch} />
      <Header />
      <Timeline search={search}  playlists={config.playlists}/>
    </div>
  )
}
