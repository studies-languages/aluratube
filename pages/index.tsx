import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { Timeline } from '../components/Timeline'
import { config } from '../config'

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      // marginTop: '50px'
    }}>
      <Menu />
      <Header />
      <Timeline playlists={config.playlists}/>
    </div>
  )
}
