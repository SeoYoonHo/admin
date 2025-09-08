import NavigationHeader from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <NavigationHeader />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      {/* Floating Penguins */}
      <div className="fixed top-20 left-10 animate-bounce opacity-20 pointer-events-none">
        <div className="text-4xl">🐧</div>
      </div>
      <div className="fixed top-40 right-20 animate-bounce delay-1000 opacity-20 pointer-events-none">
        <div className="text-3xl">🐧</div>
      </div>
      <div className="fixed bottom-20 left-1/4 animate-bounce delay-500 opacity-20 pointer-events-none">
        <div className="text-5xl">🐧</div>
      </div>
    </div>
  );
}
