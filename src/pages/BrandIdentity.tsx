

const BrandIdentity = () => {
  return (
    <div className="flex-1 p-8 lg:p-12 max-w-6xl mx-auto w-full">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/30 text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
          <span className="material-symbols-outlined text-xs" data-icon="air" style={{ fontVariationSettings: "'FILL' 1" }}>air</span>
          Core Identity
        </div>
        <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-on-surface tracking-tighter mb-4 leading-tight">Define Your Brand Soul.</h2>
        <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
          Set the foundational characteristics of your identity. This data is used to <span className="text-primary font-semibold italic">Tune the AI Winds</span>, ensuring every piece of content feels authentically yours.
        </p>
      </div>

      {/* Bento Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Vision & Identity */}
        <div className="lg:col-span-7 space-y-8">

          {/* Brand Mission Card */}
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm transition-all hover:translate-y-[-2px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary" data-icon="flag">flag</span>
              <h3 className="font-headline font-bold text-xl">Brand Mission</h3>
            </div>
            <textarea
              className="w-full bg-surface-container-low border-none rounded-xl p-4 min-h-[140px] focus:ring-1 focus:ring-primary/20 placeholder:text-outline resize-none transition-colors focus:bg-white outline-none"
              placeholder="What is the singular goal your brand aims to achieve?"
            ></textarea>
          </div>

          {/* Core Audience Card */}
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm transition-all hover:translate-y-[-2px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary" data-icon="groups">groups</span>
              <h3 className="font-headline font-bold text-xl">Core Audience</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-secondary-container px-3 py-1 rounded-full text-xs font-medium text-on-secondary-container">Gen Z Creators</span>
              <span className="bg-secondary-container px-3 py-1 rounded-full text-xs font-medium text-on-secondary-container">Tech Enthusiasts</span>
              <span className="bg-secondary-container px-3 py-1 rounded-full text-xs font-medium text-on-secondary-container">Minimalists</span>
            </div>
            <input
              type="text"
              className="w-full bg-surface-container-low border-none rounded-full px-5 py-3 text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-outline outline-none"
              placeholder="Describe who you are talking to..."
            />
          </div>

        </div>

        {/* Right Column: Tone & Visuals */}
        <div className="lg:col-span-5 space-y-8">

          {/* Tone of Voice Card */}
          <div className="bg-surface-container-low rounded-xl p-8 transition-all">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary" data-icon="volume_up">volume_up</span>
              <h3 className="font-headline font-bold text-xl">Tone of Voice</h3>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-outline">
                  <span>Formal</span>
                  <span>Casual</span>
                </div>
                <input type="range" className="w-full" defaultValue="50" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-outline">
                  <span>Serious</span>
                  <span>Humorous</span>
                </div>
                <input type="range" className="w-full" defaultValue="50" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-outline">
                  <span>Educational</span>
                  <span>Inspirational</span>
                </div>
                <input type="range" className="w-full" defaultValue="70" />
              </div>
            </div>
          </div>

          {/* Visual Assets Card */}
          <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary" data-icon="palette">palette</span>
              <h3 className="font-headline font-bold text-xl">Visual Assets</h3>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-xl bg-surface-container flex flex-col items-center justify-center border-2 border-dashed border-outline/30 cursor-pointer hover:border-primary/50 transition-colors group">
                <span className="material-symbols-outlined text-outline group-hover:text-primary" data-icon="upload">upload</span>
                <span className="text-[9px] font-bold uppercase mt-1 text-outline">Logo</span>
              </div>

              <div className="flex-1">
                <p className="text-xs font-medium mb-3">Brand Palette</p>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary ring-2 ring-offset-2 ring-primary/10"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary"></div>
                  <div className="w-8 h-8 rounded-full bg-tertiary"></div>
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined text-xs" data-icon="add">add</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-primary text-on-primary rounded-full font-headline font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-[0.98]">
              Save Identity Profile
              <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>

        </div>
      </div>

      {/* Footer Note */}
      <footer className="mt-16 text-center border-t border-outline-variant/10 pt-8 pb-8">
        <div className="flex items-center justify-center gap-2 text-outline text-sm">
          <span className="material-symbols-outlined text-lg" data-icon="auto_awesome" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <span>AI Tuning Active: <span className="text-primary font-medium">84% Precision Alignment</span></span>
        </div>
      </footer>
    </div>
  );
};

export default BrandIdentity;