import Navbar from './components/Navbar'; // We'll create this soon
import Footer from './components/Footer'; // We'll create this soon
import HomePage from './pages/HomePage';   // We'll create this soon

function App() {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Future: Routing will go here if we expand to multiple pages */}
        {/* For now, rendering HomePage directly for a single-page portfolio */}
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
