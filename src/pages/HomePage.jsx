import { useEffect, useState } from 'react';
import AppShell from '@/components/AppShell.jsx';
import AccessibilitySection from '@/components/AccessibilitySection.jsx';
import FutureVisionSection from '@/components/FutureVisionSection.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import HowItWorksSection from '@/components/HowItWorksSection.jsx';
import LoadingScreen from '@/components/LoadingScreen.jsx';
import NavigationPreviewSection from '@/components/NavigationPreviewSection.jsx';
import RouteVisualizationSection from '@/components/RouteVisualizationSection.jsx';
import TopNav from '@/components/TopNav.jsx';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <AppShell>
      <LoadingScreen visible={isLoading} />
      <TopNav />
      <HeroSection />
      <HowItWorksSection />
      <NavigationPreviewSection />
      <RouteVisualizationSection />
      <AccessibilitySection />
      <FutureVisionSection />
    </AppShell>
  );
}
