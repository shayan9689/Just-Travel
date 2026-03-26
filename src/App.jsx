import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow pt-32 text-center text-slate-800">
            <h1 className="text-4xl font-black">NAVBAR TEST</h1>
            <p className="mt-4 font-medium">If you see this, the Navbar and Context are working.</p>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
