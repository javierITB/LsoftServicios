import React, { useState, useEffect } from 'react';
import VariantSwitcher, { VARIANTS } from './components/VariantSwitcher';
import OriginalView from './components/variants/original/OriginalView';
import AiSmartView from './components/variants/ai_smart/AiSmartView';
import MinimalRoiView from './components/variants/minimal_roi/MinimalRoiView';
import DeepTechView from './components/variants/deep_tech/DeepTechView';

import './styles/switcher.css';
import './styles/variant-ai.css';
import './styles/variant-minimal.css';
import './styles/variant-deeptech.css';

function getVariantFromUrl() {
  if (typeof window === 'undefined') return 'original';
  const params = new URLSearchParams(window.location.search);
  const v = params.get('v');
  if (v && VARIANTS.some((item) => item.id === v)) {
    return v;
  }
  return 'original';
}

function App() {
  const [currentVariant, setCurrentVariant] = useState(getVariantFromUrl);

  const handleSelectVariant = (variantId) => {
    setCurrentVariant(variantId);
    const url = new URL(window.location.href);
    if (variantId === 'original') {
      url.searchParams.delete('v');
    } else {
      url.searchParams.set('v', variantId);
    }
    window.history.pushState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentVariant(getVariantFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="lsoft-app-root">
      {/* Floating interactive switcher to seamlessly compare all 4 options */}
      <VariantSwitcher
        currentVariant={currentVariant}
        onSelectVariant={handleSelectVariant}
      />

      {/* Render the selected variant */}
      {currentVariant === 'original' && <OriginalView />}
      {currentVariant === 'ai-smart' && <AiSmartView />}
      {currentVariant === 'minimal-roi' && <MinimalRoiView />}
      {currentVariant === 'deep-tech' && <DeepTechView />}
    </div>
  );
}

export default App;
