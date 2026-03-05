import { useState, useRef } from 'react';
import { User, FileText, Briefcase, Heart, Mail, LayoutGrid } from 'lucide-react';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

const TABS = [
  { id: 'about', label: 'About', icon: User },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'portfolio', label: 'Portfolio', icon: LayoutGrid },
  { id: 'hobby', label: 'Hobby', icon: Heart },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-stone-200 text-ink font-body">
      <div className="w-full max-w-5xl flex flex-col">
        {/* Tabs */}
        <div className="flex items-end overflow-x-auto gap-2 px-4 z-10 relative -mb-[1px] hide-scrollbar">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-5 py-3 rounded-t-xl border-t border-x whitespace-nowrap transition-all font-heading tracking-wide
                  ${isActive 
                    ? 'bg-white border-stone-300 text-accent border-b border-b-white z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]' 
                    : 'bg-stone-100 border-stone-200 text-stone-500 border-b-0 mb-[1px] hover:bg-stone-50 hover:text-ink z-10'}
                `}
              >
                <Icon size={18} className={isActive ? 'text-accent' : ''} />
                <span className="font-semibold text-sm uppercase">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Notebook Container */}
        <div className="bg-white rounded-xl rounded-tl-none border border-stone-300 shadow-xl h-[80vh] relative flex flex-col">
          {/* Single Page with Notebook Lines */}
          <div 
            className="w-full flex-1 px-8 md:px-12 pb-8 md:pb-12 pt-0 relative overflow-y-auto hide-scrollbar"
            style={{
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 32px)',
              backgroundSize: '100% 32px'
            }}
          >
            {/* Red vertical margin line typical of notebooks - now inside the scrollable content container */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[2px] bg-accent/30 z-0 h-full min-h-full"></div>

            <div className={`h-full w-full flex flex-col relative z-10 ${['resume', 'portfolio', 'contact'].includes(activeTab) ? 'pl-2 md:pl-4' : 'pl-6'} ${!['resume', 'portfolio', 'contact'].includes(activeTab) ? 'pt-8 md:pt-12' : ''}`}>
              {!['resume', 'portfolio', 'contact'].includes(activeTab) && (
                <h1 className="text-4xl font-bold mb-8 text-ink capitalize font-heading tracking-tight">
                  {activeTab}
                </h1>
              )}
              
              {activeTab === 'resume' ? (
                <Resume />
              ) : activeTab === 'portfolio' ? (
                <Portfolio />
              ) : activeTab === 'contact' ? (
                <Contact />
              ) : (
                <>
                  <p className="text-ink/80 mb-6 bg-white/90 px-3 py-1.5 rounded-md inline-block self-start shadow-sm border border-stone-100 leading-relaxed">
                    Content for the {activeTab} tab goes here. This text uses the highly readable Inter font for the body, while the headers use Outfit for a clean, structural folder-label look.
                  </p>
                  
                  <div className="flex-1 min-h-[300px] border-2 border-dashed border-stone-300 rounded-xl flex items-center justify-center bg-white/70 backdrop-blur-sm shadow-inner">
                    <span className="text-stone-400 font-medium text-lg font-heading">{activeTab} Content Area</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
