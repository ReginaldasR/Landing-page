

const CreatePost = () => {
  return (
    <div className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto w-full">
      {/* Left Pane: Input */}
      <div className="lg:col-span-7 flex flex-col gap-8">
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-background">Create New Post</h2>
            <span className="text-xs font-label uppercase tracking-widest text-outline">Draft Saved 2m ago</span>
          </div>

          {/* Platform Selector */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-primary font-medium border border-primary/10">
              <span className="material-symbols-outlined text-lg">photo_camera</span> Instagram
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-container hover:bg-surface-container-high rounded-full text-on-surface-variant font-medium transition-colors">
              <span className="material-symbols-outlined text-lg">chat</span> X / Twitter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-container hover:bg-surface-container-high rounded-full text-on-surface-variant font-medium transition-colors">
              <span className="material-symbols-outlined text-lg">work</span> LinkedIn
            </button>
          </div>

          {/* Editor Area */}
          <div className="bg-surface-container-low rounded-3xl p-6 space-y-4">
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 text-lg leading-relaxed placeholder:text-outline-variant min-h-[180px] resize-none outline-none"
              placeholder="What's in the air today? Write your message here..."
            ></textarea>
            <div className="flex flex-wrap gap-4">
              {/* Image Upload Placeholder */}
              <div className="relative w-32 h-32 rounded-2xl bg-surface-container-highest flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/30 text-outline cursor-pointer hover:border-primary/40 hover:bg-white transition-all group">
                <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">add_a_photo</span>
                <span className="text-[10px] font-label mt-2">ADD MEDIA</span>
              </div>
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvBgLK8diCzpw-v9YCbyTIjQnNc0kvLZ7M0UNsIZF2eJqCZxrfpD4JMvnwUyBNGpgtjJarogaoroQDi7r-OazueU2SP-8wkQHd0FuyN2B2K4xIR2j1xR-Syk0ZRkbGY50lQoCN8f_1FI7-FNXqxNXyXrx9R-ZpkY3Lt7wVMTOGOYDLiORThCGyQzXbOGPsKYi68pvBDDJMcGATv0qiKKSbeKMLfIDK04X8j1I8ylWRnJX6HrXlwNKeNPwhMF_5c36WDtEH2uPKql4"
                  className="w-full h-full object-cover"
                  alt="Post media"
                />
                <button className="absolute top-1 right-1 bg-black/40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
            </div>
          </div>

          {/* Post Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button className="p-2 text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined">sentiment_satisfied</span>
              </button>
              <button className="p-2 text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined">alternate_email</span>
              </button>
              <button className="p-2 text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined">tag</span>
              </button>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2.5 rounded-full text-primary font-semibold hover:bg-primary-container/30 transition-colors">Schedule</button>
              <button className="px-8 py-2.5 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">Publish Now</button>
            </div>
          </div>
        </section>

        {/* Preview Component */}
        <section className="mt-4 pb-8">
          <h3 className="text-xs font-label uppercase tracking-widest text-outline mb-4">Post Preview</h3>
          <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 overflow-hidden max-w-md border border-slate-100">
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnN6RQ3Dts21LFeND7W423m46AKpZ_K1GNMbA0DXBlbZ9bNZhu_9ogeEdxLrSP55hvOK3pwHl312ZdMrZ-gW-LbbnpDHdm7KmIU2bsPs6wFxcPyjSLgNImRzGTIdiaCYu1P3gSjc9xwHvKRedcYOFijYYyI1pTL32suy7p74oEQjvyS4t16NINlKmrRk58CmGqDIO6Xf0MTYyhHdS2Ql2JACkggorOLLLHkIXLCYcHf14Q7ooUYmtV0WtOBip7BYIUoT6gNIHL5Lc"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">Atmospheric Design Co.</p>
                <p className="text-[10px] text-outline">Instagram • Just now</p>
              </div>
              <span className="material-symbols-outlined text-slate-400">more_horiz</span>
            </div>
            <div className="aspect-square bg-slate-50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoTfECDYcbZNY1N6Ac7Rd4LsY94iY78jQIyeoEWkXCnDxtf9AbosBLnfv5FkGU01GEqbBtcFer8DnN4omyRPgf78WVX5AKnM1dGL8qpiwWacGdUOK70mNeYW-9Lq7qoyc1IfK54o0fiVT_O3A7ub3-1LPHox2R-yl-7swuLVA2OHjRkInovMRRKf4Hl8Ayt8RoAj4i3z0C4dhg5euehzH1QUg6_mYyQ65JJs4zts4AIi8ndCd5SgulZ91rCpOZTBwsB1rTaQTAUPM"
                className="w-full h-full object-cover"
                alt="Post Preview Content"
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex gap-4 mb-2">
                <span className="material-symbols-outlined">favorite</span>
                <span className="material-symbols-outlined">chat_bubble</span>
                <span className="material-symbols-outlined">send</span>
              </div>
              <p className="text-sm leading-snug">
                <span className="font-bold">atmospheric_design</span> Finding peace in the digital noise. Let your brand breathe. 🌬️ #Minimalism #DesignSystems
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Right Pane: AI Architect */}
      <div className="lg:col-span-5">
        <div className="sticky top-24 bg-gradient-to-b from-surface-container-low to-white rounded-[2.5rem] p-8 border border-white/50 shadow-sm min-h-[600px] flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div>
              <h3 className="text-xl font-headline font-bold">AI Post Architect</h3>
              <p className="text-xs text-on-surface-variant font-medium">Fine-tune your brand's voice</p>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold px-1">Styling Instructions</label>
              <div className="relative">
                <textarea
                  className="w-full bg-surface-container-lowest rounded-2xl border-none p-4 text-sm focus:ring-2 focus:ring-primary/10 min-h-[140px] shadow-inner placeholder:italic outline-none resize-none"
                  placeholder="e.g., make it sound like a friendly breeze, focus on serenity and professional clarity..."
                ></textarea>
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button className="px-2 py-1 bg-surface-container text-[10px] rounded-md font-label uppercase hover:bg-primary-container transition-colors">Breezy</button>
                  <button className="px-2 py-1 bg-surface-container text-[10px] rounded-md font-label uppercase hover:bg-primary-container transition-colors">Bold</button>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-on-background text-surface rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors shadow-xl active:scale-[0.98]">
              <span className="material-symbols-outlined">temp_preferences_custom</span>
              Generate Post Variations
            </button>

            <div className="pt-6 space-y-4">
              <h4 className="text-xs font-label uppercase tracking-widest text-outline px-1">Suggested Variations</h4>

              {/* Variation Cards */}
              <div className="group p-4 bg-white/60 rounded-2xl border border-white hover:border-primary/20 hover:bg-white transition-all cursor-pointer relative">
                <p className="text-sm leading-relaxed mb-3">"Embrace the open air. Our latest design philosophy focuses on the spaces between the elements. 🕊️"</p>
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-label text-primary uppercase">MILDLY POETIC</span>
                  <button className="text-primary text-xs font-bold">Apply Draft</button>
                </div>
              </div>

              <div className="group p-4 bg-white/60 rounded-2xl border border-white hover:border-primary/20 hover:bg-white transition-all cursor-pointer relative">
                <p className="text-sm leading-relaxed mb-3">"Less clutter, more clarity. Discover how we're redefining the SaaS landscape through atmospheric depth."</p>
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-label text-primary uppercase">PROFESSIONAL</span>
                  <button className="text-primary text-xs font-bold">Apply Draft</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <div className="flex items-center gap-2 text-xs text-outline justify-center">
              <span className="material-symbols-outlined text-sm">bolt</span>
              Powered by Atmospheric AI v2.4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;