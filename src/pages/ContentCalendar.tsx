

const ContentCalendar = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto scroll-smooth">
      {/* Calendar Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="label-sm uppercase tracking-widest text-on-surface-variant font-label text-[10px] font-bold">Content Schedule</span>
          <h2 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface flex items-center gap-4">
            September 2024
            <div className="flex gap-1 ml-4">
              <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-secondary">
                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              </button>
              <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-secondary">
                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </h2>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex p-1 bg-surface-container-low rounded-full">
            <button className="px-6 py-2 rounded-full text-sm font-semibold bg-white shadow-sm text-primary">Month</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors">Week</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors">Feed</button>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary-container text-on-secondary-container font-semibold hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-lg" data-icon="bolt">bolt</span>
            Fast Draft
          </button>
        </div>
      </div>

      {/* Calendar Grid Container */}
      <div className="bg-surface-container-low rounded-[2rem] p-4 shadow-sm relative overflow-hidden">

        {/* Days labels */}
        <div className="calendar-grid mb-4">
          <div className="text-center py-2 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/60 font-label">Sun</div>
          <div className="text-center py-2 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/60 font-label">Mon</div>
          <div className="text-center py-2 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/60 font-label">Tue</div>
          <div className="text-center py-2 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/60 font-label">Wed</div>
          <div className="text-center py-2 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/60 font-label">Thu</div>
          <div className="text-center py-2 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/60 font-label">Fri</div>
          <div className="text-center py-2 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/60 font-label">Sat</div>
        </div>

        {/* Calendar Days */}
        <div className="calendar-grid gap-3">
          {/* Day 1 (Sun, Previous Month) */}
          <div className="aspect-[4/5] bg-surface-container/50 rounded-2xl p-3 opacity-30 flex flex-col">
            <span className="text-xs font-bold mb-2">25</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container/50 rounded-2xl p-3 opacity-30 flex flex-col">
            <span className="text-xs font-bold mb-2">26</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container/50 rounded-2xl p-3 opacity-30 flex flex-col">
            <span className="text-xs font-bold mb-2">27</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container/50 rounded-2xl p-3 opacity-30 flex flex-col">
            <span className="text-xs font-bold mb-2">28</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container/50 rounded-2xl p-3 opacity-30 flex flex-col">
            <span className="text-xs font-bold mb-2">29</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container/50 rounded-2xl p-3 opacity-30 flex flex-col">
            <span className="text-xs font-bold mb-2">30</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container/50 rounded-2xl p-3 opacity-30 flex flex-col">
            <span className="text-xs font-bold mb-2">31</span>
          </div>

          {/* Row 1: Actual Month Start */}
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-bold text-on-surface">01</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surface-container rounded-full">
                <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
              </button>
            </div>
            <div className="space-y-1 overflow-hidden">
              <div className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-semibold border border-blue-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Instagram Reel
              </div>
            </div>
          </div>

          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-bold text-on-surface">02</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surface-container rounded-full">
                <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
              </button>
            </div>
          </div>

          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-bold text-on-surface">03</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surface-container rounded-full">
                <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
              </button>
            </div>
            <div className="space-y-1">
              <div className="relative group/item">
                <div className="px-2 py-1 bg-sky-50 text-sky-700 rounded-lg text-[10px] font-semibold border border-sky-100 flex items-center gap-1 cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span> Twitter Thread
                </div>
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-sky-600/90 rounded-lg opacity-0 group-hover/item:opacity-100 flex items-center justify-center gap-2 transition-opacity">
                  <span className="material-symbols-outlined text-white text-[14px] cursor-pointer" data-icon="edit">edit</span>
                  <span className="material-symbols-outlined text-white text-[14px] cursor-pointer" data-icon="delete">delete</span>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ring-2 ring-primary/20">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-bold text-primary">04</span>
              <span className="text-[9px] font-bold text-primary uppercase bg-primary-container px-1.5 py-0.5 rounded">Today</span>
            </div>
            <div className="space-y-1">
              <div className="px-2 py-1 bg-purple-50 text-purple-700 rounded-lg text-[10px] font-semibold border border-purple-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> LinkedIn Article
              </div>
              <div className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-[10px] font-semibold border border-emerald-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> TikTok Video
              </div>
            </div>
          </div>

          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">05</span>
          </div>

          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">06</span>
            <div className="px-2 py-1 bg-orange-50 text-orange-700 rounded-lg text-[10px] font-semibold border border-orange-100 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> YouTube Shorts
            </div>
          </div>

          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">07</span>
          </div>

          {/* Row 2 */}
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">08</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">09</span>
            <div className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-semibold border border-blue-100 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> FB Image Post
            </div>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">10</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">11</span>
            <div className="px-2 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-semibold border border-slate-200 flex items-center gap-1 italic">
              <span className="material-symbols-outlined text-[12px]" data-icon="pending">pending</span> Draft placeholder
            </div>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">12</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">13</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">14</span>
          </div>

          {/* Row 3 (Focus on Layout Variety) */}
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">15</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">16</span>
            <div className="rounded-xl overflow-hidden mb-1 relative h-16">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy6Pp_MHeJLViQBOxqtePBhHl2-VEFxxIgKM7wqQQpPhgcDigNUtt_YLl0X-dXlbejKURODwM7ldCNbVkfVeCN8Em51dVEW0mqqvejugt0Xpy7zmAOdeKXeT2GSv6CTidyIMDGuCX919qsdsc_fzeZE7co5ToZg5NkT5KPcm8s_ITnK35TCjc0ZtJL9TNpwDwom2NcB6KqaXWtZWJ_ynwiYscmhGTY9g-T9m-Ry1ePnrjbHlZ53imSz1X8UopuR9voiPaHX7M2zLI"
                alt="post thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1 right-1 bg-white/80 backdrop-blur-sm p-0.5 rounded">
                <span className="material-symbols-outlined text-[10px] text-blue-600" data-icon="camera">camera</span>
              </div>
            </div>
            <div className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-semibold border border-blue-100 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> IG Post
            </div>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">17</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">18</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">19</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">20</span>
          </div>
          <div className="aspect-[4/5] bg-surface-container-lowest rounded-2xl p-3 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="text-sm font-bold text-on-surface mb-2">21</span>
          </div>
        </div>
      </div>

      {/* Contextual Floating Panel (Drafting) */}
      <div className="mt-8 grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-headline font-bold">Upcoming Milestones</h3>
              <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
                View All <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-surface-container rounded-2xl">
                <span className="material-symbols-outlined text-tertiary mb-3" data-icon="celebration">celebration</span>
                <h4 className="font-bold text-sm mb-1">Brand Anniversary</h4>
                <p className="text-xs text-on-surface-variant">Sept 14, 2024</p>
              </div>
              <div className="p-4 bg-surface-container rounded-2xl">
                <span className="material-symbols-outlined text-primary mb-3" data-icon="local_fire_department">local_fire_department</span>
                <h4 className="font-bold text-sm mb-1">Product Launch</h4>
                <p className="text-xs text-on-surface-variant">Sept 22, 2024</p>
              </div>
              <div className="p-4 bg-surface-container rounded-2xl">
                <span className="material-symbols-outlined text-secondary mb-3" data-icon="event_repeat">event_repeat</span>
                <h4 className="font-bold text-sm mb-1">Weekly Recap</h4>
                <p className="text-xs text-on-surface-variant">Every Friday</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="bg-surface-container-highest p-8 rounded-[2rem] flex flex-col h-full">
            <h3 className="text-xl font-headline font-bold mb-4">Quick Insights</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-on-surface-variant">Posts scheduled</span>
                <span className="text-sm font-bold">12 / 30</span>
              </div>
              <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '40%' }}></div>
              </div>

              <div className="pt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary">#growth</span>
                <span className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary">#summer24</span>
                <span className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary">#tech_tips</span>
              </div>

              <div className="mt-auto pt-6">
                <div className="p-4 glass-panel rounded-2xl border border-white/20">
                  <p className="text-xs font-medium text-on-surface italic">"Your highest engagement usually happens on Tuesdays at 10 AM. You have 2 slots open then."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCalendar;