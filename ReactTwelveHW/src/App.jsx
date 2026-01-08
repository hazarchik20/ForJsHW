import { SettingProvider } from './context/SettingContext'
import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'
import "./style.scss"

function App() {
  return (
    <SettingProvider>
      <div className='app'>
          <Header />
          <Main />
          <Footer />
      </div>
    </SettingProvider>
  )
}

export default App
