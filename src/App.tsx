import React, { useState } from 'react';
import SimpleLoadingScreen from './components/LoadingScreen/SimpleLoadingScreen';
import SimpleHeader from './components/Header/SimpleHeader';
import SimpleHero from './components/Hero/SimpleHero';
import SimpleAbout from './components/About/SimpleAbout';
import SimpleSkills from './components/Skills/SimpleSkills';
import SimpleExperience from './components/Experience/SimpleExperience';
import SimpleContact from './components/Contact/SimpleContact';
import SimpleFooter from './components/Footer/SimpleFooter';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading && <SimpleLoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <SimpleHeader />
          <main>
            <div id="home">
              <SimpleHero />
            </div>
            <SimpleAbout />
            <SimpleSkills />
            <SimpleExperience />
            <SimpleContact />
          </main>
          <SimpleFooter />
        </>
      )}
    </div>
  );
}

export default App;