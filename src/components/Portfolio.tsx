import React, { useState } from 'react';
import { LayoutGrid, Palette, Printer, Code, Search, ExternalLink, X } from 'lucide-react';
import { PORTFOLIO_FILTERS, PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';

const FILTER_ICONS: Record<string, any> = {
  ui: LayoutGrid,
  creative: Palette,
  print: Printer,
  dev: Code,
  ux: Search,
};

const PLURAL_LABELS: Record<string, string> = {
  'UI Design': 'UI Designs',
  'Creative Design': 'Creative Designs',
  'Print Design': 'Print Designs',
  'Dev Project': 'Dev Projects',
  'UX Case Study': 'UX Case Studies',
};

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeFilter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => {
        const filterLabel = PORTFOLIO_FILTERS.find(f => f.id === activeFilter)?.label;
        return filterLabel ? item.tags.includes(filterLabel) : true;
      });

  const activeFilterLabel = PORTFOLIO_FILTERS.find(f => f.id === activeFilter)?.label;
  const headerTitle = activeFilter === 'all' 
    ? 'All Projects' 
    : (activeFilterLabel ? PLURAL_LABELS[activeFilterLabel] || activeFilterLabel : 'Projects');

  return (
    <div className="flex flex-row gap-4 md:gap-8 pb-12 pt-8 md:pt-12">
      {/* Left Navigation Sidebar - Filter Style */}
      <aside className="w-10 md:w-48 shrink-0">
        <div className="sticky top-8 space-y-4">
          <div className="flex items-center gap-2 px-1 md:px-2 pb-2 border-b border-stone-200">
            <LayoutGrid size={20} className="text-accent shrink-0" />
            <span className="text-xl font-bold font-heading tracking-tight text-ink hidden md:inline">Portfolio</span>
          </div>
          
          <nav className="flex flex-col gap-1.5">
            <button
              onClick={() => setActiveFilter('all')}
              className={`flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-2.5 rounded-l-xl text-[11px] font-heading font-bold uppercase tracking-wider transition-all border-l-4 shadow-sm w-full group ${
                activeFilter === 'all' 
                ? 'bg-accent text-white border-accent' 
                : 'bg-stone-100/50 text-stone-600 border-transparent hover:border-accent hover:bg-stone-100'
              }`}
            >
              <LayoutGrid size={14} className="shrink-0" />
              <span className="hidden md:inline">All Projects</span>
            </button>

            {PORTFOLIO_FILTERS.map((filter) => {
              const Icon = FILTER_ICONS[filter.id] || LayoutGrid;
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  title={filter.label}
                  className={`flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-2.5 rounded-l-xl text-[11px] font-heading font-bold uppercase tracking-wider transition-all border-l-4 shadow-sm w-full group ${
                    isActive 
                    ? 'bg-accent text-white border-accent' 
                    : 'bg-stone-100/50 text-stone-600 border-transparent hover:border-accent hover:bg-stone-100'
                  }`}
                >
                  <Icon size={14} className="shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="hidden md:inline">{filter.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Content Area - Gallery View */}
      <div className="flex-1 min-w-0 pr-2 md:pr-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-ink font-heading tracking-tight mb-2">
            {headerTitle}
          </h2>
          <p className="text-stone-400 font-heading italic">A collection of my works across different disciplines.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden bg-stone-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white text-ink p-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 bg-stone-100 text-stone-500 text-[9px] font-bold uppercase tracking-wider rounded-md border border-stone-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-ink text-sm mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-stone-400 font-heading italic">No projects found in this category yet.</p>
          </div>
        )}
      </div>

      {/* Modal Popup */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(null);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100/80 text-stone-500 hover:bg-accent hover:text-white transition-all z-20 shadow-sm"
            >
              <X size={20} />
            </button>

            <div className="p-0">
              <img 
                src={selectedItem.imageUrl} 
                alt={selectedItem.title}
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedItem.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-3xl font-bold text-ink font-heading tracking-tight mb-4">{selectedItem.title}</h2>
              
              <div className="prose prose-stone max-w-none">
                <p className="text-stone-600 leading-relaxed mb-6">
                  {selectedItem.description} This project represents a significant milestone in exploring {selectedItem.tags.join(' and ')} techniques. 
                  The goal was to create a seamless user experience while maintaining a strong visual identity that resonates with the target audience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-ink uppercase text-xs tracking-widest border-b border-stone-100 pb-2">The Challenge</h4>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      Addressing complex user requirements while ensuring the interface remains intuitive and accessible. 
                      We focused on reducing cognitive load through clear hierarchy and consistent design patterns.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-ink uppercase text-xs tracking-widest border-b border-stone-100 pb-2">The Solution</h4>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      Implementing a modular design system that allows for scalability and flexibility. 
                      Extensive user testing helped refine the core interactions and visual language.
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-stone-100 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h4 className="font-bold text-ink uppercase text-xs tracking-widest mb-4">Process Gallery</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <img src={`https://picsum.photos/seed/${selectedItem.id}a/400/300`} className="rounded-lg" referrerPolicy="no-referrer" />
                      <img src={`https://picsum.photos/seed/${selectedItem.id}b/400/300`} className="rounded-lg" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div className="md:w-48">
                    <h4 className="font-bold text-ink uppercase text-xs tracking-widest mb-4">Project Details</h4>
                    <ul className="text-xs space-y-2 text-stone-500">
                      <li><span className="font-bold text-stone-700">Client:</span> Internal Project</li>
                      <li><span className="font-bold text-stone-700">Date:</span> March 2026</li>
                      <li><span className="font-bold text-stone-700">Role:</span> Lead Designer</li>
                      <li><span className="font-bold text-stone-700">Tools:</span> Figma, React, Tailwind</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
