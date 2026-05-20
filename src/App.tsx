import Main from '@/pages/index'
import './App.css'
import Navbar from '@/components/navbar'

function App() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <Main />
    </main>
  )
}

export default App
