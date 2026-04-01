

const Campaigns = () => {
  return (
    <div className="flex-1 overflow-y-auto p-8 bg-surface">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold font-manrope tracking-tight text-on-surface mb-2">AI-Supervised Campaigns</h1>
          <p className="text-on-surface-variant font-body">Autonomous orchestration for your brand's digital presence.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            3 Campaigns Running
          </div>
        </div>
      </div>

      {/* Dashboard Bento Grid */}
      <div className="grid grid-cols-12 gap-8 mb-8">

        {/* Campaign Card 1 */}
        <div className="col-span-12 lg:col-span-8 group">
          <div className="bg-surface-container-lowest rounded-[2rem] p-8 custom-easing hover:shadow-2xl hover:shadow-slate-200/50 transition-all border border-transparent hover:border-primary/5 h-full">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-manrope mb-1">Q4 Product Launch Phase</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-emerald-600 font-semibold">Active</span>
                    <span className="text-outline">•</span>
                    <span className="text-on-surface-variant">8 posts scheduled</span>
                  </div>
                </div>
              </div>
              <button className="bg-surface-container-high hover:bg-surface-variant px-6 py-2 rounded-full text-sm font-semibold transition-colors">Edit Parameters</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Next Post Preview */}
              <div className="bg-surface-container-low rounded-2xl p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline block mb-4">Next Post Preview • Tomorrow 09:45</span>
                <div className="aspect-video rounded-xl overflow-hidden mb-4 relative group/img">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8_MU7Kftlcl0WY2nGtXgygRRm-K53QSZIcs8ZNve9dhiqXTVmQqRRwn2NOAIvANe1I9eFdDZwqyDkxrP8ZczhgdG9QXbUNtzho3Z0DEWvyJV13FViilTwqczAmZIAfx5hyuGy-yaaanVsUlit0WKftMR0I8NFcwo6NZJE12ezDhPj_cWh-FjttLsXsEKV-abzroBGxuZMfpcJ79GjoRszcQ2ivGOCC4pDOhRpbgcEyL_snIOkszmv_71l5pcgLAivcLecikw2FjA"
                    className="w-full h-full object-cover"
                    alt="Preview content"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                </div>
                <p className="text-sm font-medium line-clamp-2 italic text-on-surface-variant">"Unlocking the potential of modular design systems for modern brands. #FutureOfWeb #AtmosphericUI"</p>
              </div>

              {/* AI Logic Summary */}
              <div className="flex flex-col gap-4">
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">AI Logic Summary</span>
                  </div>
                  <ul className="space-y-3 text-sm text-on-surface-variant">
                    <li className="flex gap-2">
                      <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                      Optimization for Peak EU Engagement
                    </li>
                    <li className="flex gap-2">
                      <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                      Tone: Professional yet Airy
                    </li>
                    <li className="flex gap-2">
                      <span className="material-symbols-outlined text-[16px] text-emerald-500">check_circle</span>
                      Auto-A/B testing enabled for captions
                    </li>
                  </ul>
                </div>
                <div className="flex gap-2 mt-auto">
                  <div className="flex-1 bg-surface-container-low rounded-xl p-3 text-center">
                    <div className="text-xl font-bold font-manrope">84%</div>
                    <div className="text-[10px] uppercase tracking-tighter text-outline">Predicted ROI</div>
                  </div>
                  <div className="flex-1 bg-surface-container-low rounded-xl p-3 text-center">
                    <div className="text-xl font-bold font-manrope">12.4k</div>
                    <div className="text-[10px] uppercase tracking-tighter text-outline">Est. Reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Stats / Mini Chart */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          <div className="bg-surface-container-lowest rounded-[2rem] p-8 flex-1 border border-transparent">
            <h4 className="text-lg font-bold font-manrope mb-6">Efficiency Pulse</h4>
            <div className="h-48 flex items-end justify-between gap-2 mb-6">
              <div className="w-full bg-primary-container/30 rounded-t-lg h-[40%]"></div>
              <div className="w-full bg-primary-container/30 rounded-t-lg h-[65%]"></div>
              <div className="w-full bg-primary-container/30 rounded-t-lg h-[50%]"></div>
              <div className="w-full bg-primary-gradient rounded-t-lg h-[90%]"></div>
              <div className="w-full bg-primary-container/30 rounded-t-lg h-[75%]"></div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Time Saved this week</span>
                <span className="font-bold text-primary">18.5 hrs</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Auto-Replies Managed</span>
                <span className="font-bold text-primary">142</span>
              </div>
            </div>
          </div>

          <div className="bg-primary-gradient rounded-[2rem] p-8 text-on-primary relative overflow-hidden group">
            {/* Decorative element */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

            <h4 className="text-lg font-bold font-manrope mb-2 relative z-10">AI Supervision Status</h4>
            <p className="text-sm opacity-80 mb-6 relative z-10">System is currently operating at optimal temperature. No manual interventions required.</p>
            <div className="flex items-center gap-4 relative z-10">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span className="text-xs font-bold tracking-widest uppercase">Certified Secure</span>
            </div>
          </div>
        </div>

        {/* Secondary Campaign List */}
        <div className="col-span-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold font-manrope px-4">Secondary Focus Areas</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card Small 1 */}
            <div className="bg-surface-container-low/50 border border-outline-variant/10 rounded-[1.5rem] p-6 hover:bg-white transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">camera</span>
                </div>
                <span className="bg-surface-container-high text-[10px] font-bold px-3 py-1 rounded-full text-on-surface-variant">Draft</span>
              </div>
              <h5 className="font-bold mb-1">Behind the Scenes</h5>
              <p className="text-xs text-on-surface-variant mb-4">Focusing on team culture and office lifestyle.</p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-outline uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">schedule</span>
                Starts in 4 days
              </div>
            </div>

            {/* Card Small 2 */}
            <div className="bg-surface-container-low/50 border border-outline-variant/10 rounded-[1.5rem] p-6 hover:bg-white transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full">Live</span>
              </div>
              <h5 className="font-bold mb-1">Growth Retargeting</h5>
              <p className="text-xs text-on-surface-variant mb-4">Automated engagement with past lead interactions.</p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-outline uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">bolt</span>
                AI Managed
              </div>
            </div>

            {/* Card Small 3 */}
            <div className="bg-surface-container-low/50 border border-outline-variant/10 rounded-[1.5rem] p-6 hover:bg-white transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                  <span className="material-symbols-outlined">history</span>
                </div>
                <span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full">Paused</span>
              </div>
              <h5 className="font-bold mb-1">Flash Sale Autumn</h5>
              <p className="text-xs text-on-surface-variant mb-4">Seasonal promotional campaign for regional markets.</p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-outline uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">pause</span>
                Manual Action Needed
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;