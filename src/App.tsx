import { About } from './components/About';
import { Atmosphere } from './components/Atmosphere';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LiveFilm } from './components/LiveFilm';
import { Music } from './components/Music';
import { Navigation } from './components/Navigation';
import { Shows } from './components/Shows';
import { SignalTransition } from './components/SignalTransition';
import { useSectionReveal } from './hooks';
import './styles/global.css';

export default function App() {
  useSectionReveal();

  return (
    <div className="site-shell">
      <Atmosphere />
      <Navigation />
      <main>
        <Hero />
        <Music />
        <SignalTransition index="01" label="Pressure rising" />
        <LiveFilm />
        <SignalTransition index="02" label="Frequency shift" />
        <About />
        <SignalTransition index="03" label="Into the room" />
        <Shows />
      </main>
      <Footer />
    </div>
  );
}
