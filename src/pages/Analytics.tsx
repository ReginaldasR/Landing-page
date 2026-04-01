

const Analytics = () => {
  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface mb-2">Atmospheric Insights</h2>
          <p className="text-on-surface-variant font-body max-w-lg">Your brand's digital presence is currently expanding like a steady breeze. Engagement is peaking during dusk hours.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-semibold text-sm hover:bg-surface-container-highest transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">calendar_today</span>
            Last 30 Days
          </button>
          <button className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">file_download</span>
            Export PDF
          </button>
        </div>
      </div>

      {/* Bento Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Metric 1 */}
        <div className="md:col-span-1 p-6 rounded-[1.5rem] bg-surface-container-lowest border border-outline-variant/10 group hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12.4%</span>
          </div>
          <p className="text-sm text-on-surface-variant font-medium mb-1">Total Impressions</p>
          <h3 className="text-3xl font-headline font-bold text-on-surface">1.2M</h3>
        </div>

        {/* Metric 2 */}
        <div className="md:col-span-1 p-6 rounded-[1.5rem] bg-surface-container-lowest border border-outline-variant/10 group hover:translate-y-[-4px] transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+4.2%</span>
          </div>
          <p className="text-sm text-on-surface-variant font-medium mb-1">Engagement Rate</p>
          <h3 className="text-3xl font-headline font-bold text-on-surface">5.82%</h3>
        </div>

        {/* Metric 3 (Bento Wide) */}
        <div className="md:col-span-2 p-6 rounded-[1.5rem] bg-primary text-on-primary relative overflow-hidden group">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <p className="text-sm font-medium text-on-primary/70 mb-1">Top Performing Post</p>
              <h3 className="text-2xl font-headline font-bold leading-tight mb-4">"The Weightless Era" Collection</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-primary overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU8ET7NHShZE-lukG4Gl156F3-CHIMNYxXcfiBODsVgt4c0X7MHDbxb6oJ9j1Zy5p5UI74i75l0LsKicBTmDuCApFlHq2F0brqOdZ8nJGuh31F1KtTER1UFwAZMpSUY9kr4d0j2vIeakH49SBgUEljBqaPGyCHxEJ_-rFNpF6Cjm4I1U20827wZ9w2lYn--bOaxJYY3qDNBxl8khsn7OIcDSwGsWgJWiFMcz6Lmz-fdIZ_S6Ydm3PcGhd-4L4UCeSyauerSZCC2H4"
                    alt="Audience 1"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-primary overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA01YnPcHObQyGdPFtycEJBFoEB7ScJ2EpRimrVw6cr7yQq5nq5ZO4ceKW6LisilKSIfZWKThA51-n5Y4wC8IIX4KzvCJLprOe3IYRJGXB8dlm3ivVJz3ZnPwUuG7pvKweZ_ObHZ4o9TqJbWzH6DvMvT6k1BJFxxBgmAPrDzQxlGNgwvMEQqKLjt7kktvGbi9g2gcQhRCe0KzP73-pHpQx1nSOdJ6YrP34BkNNOabVjh3frYw_qbn9FWq8_-yMhfksWxwcGuJe-2Vc"
                    alt="Audience 2"
                  />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-primary bg-primary-dim flex items-center justify-center text-[10px] font-bold">+8k</div>
              </div>
              <span className="text-sm font-medium">shared by your core audience</span>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-white/5 rotate-12">trending_up</span>
        </div>
      </div>

      {/* Visualization Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

        {/* Main Chart (Line) */}
        <div className="lg:col-span-2 p-8 rounded-[1.5rem] bg-surface-container-lowest border border-outline-variant/10">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-lg font-headline font-bold text-on-surface">Engagement Over Time</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-medium text-on-surface-variant">Views</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="text-xs font-medium text-on-surface-variant">Likes</span>
              </div>
            </div>
          </div>

          {/* Mock Line Chart */}
          <div className="h-64 relative flex items-end gap-1">
            {/* Horizontal Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div className="w-full border-t border-slate-100"></div>
              <div className="w-full border-t border-slate-100"></div>
              <div className="w-full border-t border-slate-100"></div>
              <div className="w-full border-t border-slate-100"></div>
            </div>
            {/* SVG for Chart Line */}
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0,80 Q10,40 25,60 T50,30 T75,50 T100,20" fill="none" stroke="var(--primary, #37628a)" strokeWidth="2" className="opacity-80"></path>
              <path d="M0,90 Q15,70 30,85 T60,55 T85,75 T100,45" fill="none" stroke="var(--tertiary, #675882)" strokeWidth="2" className="opacity-60"></path>
            </svg>
            <div className="w-full flex justify-between mt-4 absolute -bottom-8">
              <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Mon</span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Wed</span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Fri</span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Sun</span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Tue</span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Thu</span>
            </div>
          </div>
        </div>

        {/* Platform Reach (Bar) */}
        <div className="lg:col-span-1 p-8 rounded-[1.5rem] bg-surface-container-low border border-outline-variant/5">
          <h4 className="text-lg font-headline font-bold text-on-surface mb-8">Reach per Platform</h4>
          <div className="space-y-6">

            {/* Instagram */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-on-surface-variant">Instagram</span>
                <span className="text-sm font-bold">482k</span>
              </div>
              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] w-[85%] rounded-full"></div>
              </div>
            </div>

            {/* TikTok */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-on-surface-variant">TikTok</span>
                <span className="text-sm font-bold">310k</span>
              </div>
              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-[#000000] w-[60%] rounded-full"></div>
              </div>
            </div>

            {/* LinkedIn */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-on-surface-variant">LinkedIn</span>
                <span className="text-sm font-bold">124k</span>
              </div>
              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-[#0077b5] w-[35%] rounded-full"></div>
              </div>
            </div>

            {/* Pinterest */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-on-surface-variant">Pinterest</span>
                <span className="text-sm font-bold">94k</span>
              </div>
              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-[#bd081c] w-[25%] rounded-full"></div>
              </div>
            </div>

          </div>

          <div className="mt-10 p-4 rounded-xl bg-surface-container-highest/50 border border-outline-variant/10 text-xs text-on-surface-variant leading-relaxed">
            <span className="font-bold text-primary">Pro Tip:</span> Your visual content is performing 40% better on Instagram than the platform average. Keep using high-contrast thumbnails.
          </div>
        </div>
      </div>

      {/* AI Insights Section */}
      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-tertiary-fixed to-surface-container relative overflow-hidden mt-8">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          <div className="lg:col-span-1">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-tertiary mb-4">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <h4 className="text-2xl font-headline font-bold text-on-tertiary-fixed">AI Insights</h4>
            <p className="text-sm text-on-tertiary-fixed-variant font-medium">Performance summary generated seconds ago.</p>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/40 backdrop-blur-md p-5 rounded-2xl border border-white/40">
              <p className="text-sm leading-relaxed text-on-tertiary-fixed">
                <span className="font-bold text-tertiary">Trend Shift:</span> We've detected a significant increase in video completion rates between 7 PM and 9 PM. Your audience is shifting toward long-form editorial content.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-5 rounded-2xl border border-white/40">
              <p className="text-sm leading-relaxed text-on-tertiary-fixed">
                <span className="font-bold text-tertiary">Prediction:</span> Current growth velocity suggests you will reach 1.5M impressions by the end of next week if the "Editorial Minimal" aesthetic is maintained.
              </p>
            </div>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-tertiary/10 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Analytics;