import React, { useState } from 'react';
import { FileText, Briefcase, Heart, Megaphone, Monitor, MessageSquare, GraduationCap, User, ChevronDown, ChevronRight } from 'lucide-react';
import { ALL_RESUME_DATA, ResumeSectionData, ResumeItemData } from '../data/resumeData';

export const RESUME_SECTIONS = [
  { id: 'work', label: 'Work', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'speaker', label: 'Speaker', icon: Megaphone },
  { id: 'volunteer', label: 'Volunteer', icon: Heart },
  { id: 'orgs', label: 'Organizations', icon: User },
  { id: 'committees', label: 'Committees', icon: FileText },
  { id: 'competitions', label: 'Competitions', icon: Monitor },
  { id: 'seminars', label: 'Seminars', icon: MessageSquare },
];

const ResumeItem: React.FC<ResumeItemData> = ({ title, subtitle, description, items }) => (
  <div className="group relative pl-4 transition-all hover:pl-5">
    <div className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-accent opacity-40 group-hover:opacity-100 transition-opacity"></div>
    <div className="flex flex-col">
      <span className="font-bold text-ink group-hover:text-accent transition-colors leading-none text-[13px]">{title}</span>
      {subtitle && <span className="text-[11px] text-stone-500 italic leading-tight mt-0.5">{subtitle}</span>}
      {description && <p className="text-[11px] text-stone-600 mt-0.5 leading-snug">{description}</p>}
      {items && (
        <ul className="mt-1 space-y-0.5">
          {items.map((item, i) => (
            <li key={i} className="text-[10.5px] text-stone-600 leading-tight flex gap-1.5">
              <span className="text-accent/30 mt-1.5 shrink-0 w-0.5 h-0.5 rounded-full bg-current"></span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const ResumeSection: React.FC<{ section: ResumeSectionData }> = ({ section }) => {
  const Icon = RESUME_SECTIONS.find(s => s.id === section.id)?.icon || FileText;
  const isCollapsible = ['orgs', 'committees', 'competitions', 'seminars'].includes(section.id);
  const [expandedGroups, setExpandedGroups] = useState<Record<number, boolean>>({});

  const toggleGroup = (idx: number) => {
    setExpandedGroups(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const colorClass = {
    work: 'bg-accent/10 text-accent',
    education: 'bg-blue-50 text-blue-600',
    speaker: 'bg-indigo-50 text-indigo-600',
    volunteer: 'bg-emerald-50 text-emerald-600',
    orgs: 'bg-amber-50 text-amber-600',
    committees: 'bg-rose-50 text-rose-600',
    competitions: 'bg-cyan-50 text-cyan-600',
    seminars: 'bg-violet-50 text-violet-600',
  }[section.id as keyof typeof colorClass] || 'bg-stone-50 text-stone-600';

  return (
    <section id={section.id} className="scroll-mt-16">
      <div className="flex items-center gap-2 mb-3">
        <div className={`p-1 rounded-lg ${colorClass}`}>
          <Icon size={16} />
        </div>
        <h2 className="text-lg font-bold text-ink font-heading tracking-tight">{section.title}</h2>
      </div>
      <div className="space-y-4 ml-1.5 border-l border-stone-100 pl-4">
        {section.groups ? (
          section.groups.map((group, idx) => {
            const isExpanded = !isCollapsible || expandedGroups[idx];
            return (
              <div key={idx} className="group/year">
                <button 
                  onClick={() => isCollapsible && toggleGroup(idx)}
                  disabled={!isCollapsible}
                  className={`flex items-center gap-2 mb-2 text-left w-full ${isCollapsible ? 'cursor-pointer hover:text-accent transition-colors' : 'cursor-default'}`}
                >
                  <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider group-hover/year:text-inherit">{group.year}</h3>
                  {isCollapsible && (
                    <div className="text-stone-300 group-hover/year:text-accent">
                      {isExpanded ? <ChevronDown size={10} /> : <ChevronRight size={10} />}
                    </div>
                  )}
                  {isCollapsible && !isExpanded && (
                    <span className="text-[9px] text-stone-300 font-medium lowercase italic">({group.items.length} items)</span>
                  )}
                </button>
                
                {isExpanded && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    {group.items.map((item, i) => (
                      <ResumeItem key={i} {...item} />
                    ))}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          section.items?.map((item, i) => (
            <ResumeItem key={i} {...item} />
          ))
        )}
      </div>
    </section>
  );
};

export const Resume = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-row gap-4 md:gap-8 pb-12 pt-8 md:pt-12">
      {/* Left Navigation Sidebar - Bookmark Style */}
      <aside className="w-10 md:w-48 shrink-0">
        <div className="sticky top-8 space-y-4">
          <div className="flex items-center gap-2 px-1 md:px-2 pb-2 border-b border-stone-200">
            <FileText size={20} className="text-accent shrink-0" />
            <span className="text-xl font-bold font-heading tracking-tight text-ink hidden md:inline">Resume</span>
          </div>
          
          <nav className="flex flex-col gap-1.5">
            {RESUME_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  title={section.label}
                  className="flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-2.5 rounded-l-xl bg-stone-100/50 text-stone-600 text-[11px] font-heading font-bold uppercase tracking-wider hover:bg-accent hover:text-white transition-all border-l-4 border-transparent hover:border-accent shadow-sm w-full group"
                >
                  <Icon size={14} className="shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="hidden md:inline">{section.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 min-w-0 pr-2 md:pr-8">
        <p className="text-lg font-heading italic text-stone-400 mb-8">This is how I live… and still counting.</p>

        <div className="space-y-12">
          {ALL_RESUME_DATA.map((section) => (
            <ResumeSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};
