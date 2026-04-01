
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 border-r border-slate-200/10 bg-slate-100/40 dark:bg-slate-950/40 backdrop-blur-md font-manrope font-medium text-sm p-4 gap-2 shrink-0">
      <div className="mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tighter">Brand Workspace</h2>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Select a brand to begin</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 flex flex-col gap-1">
        <NavLink to="/dashboard" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all scale-95 duration-200 ${isActive ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm opacity-100' : 'text-slate-500 dark:text-slate-400 opacity-60 hover:opacity-100 hover:translate-x-1'}`}>
          <span className="material-symbols-outlined">dashboard</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/create-post" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all scale-95 duration-200 ${isActive ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm opacity-100' : 'text-slate-500 dark:text-slate-400 opacity-60 hover:opacity-100 hover:translate-x-1'}`}>
          <span className="material-symbols-outlined">edit_note</span>
          <span>Create Post</span>
        </NavLink>
        <NavLink to="/campaigns" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all scale-95 duration-200 ${isActive ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm opacity-100' : 'text-slate-500 dark:text-slate-400 opacity-60 hover:opacity-100 hover:translate-x-1'}`}>
          <span className="material-symbols-outlined">auto_awesome</span>
          <span>Campaigns</span>
        </NavLink>
        <NavLink to="/identity" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all scale-95 duration-200 ${isActive ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm opacity-100' : 'text-slate-500 dark:text-slate-400 opacity-60 hover:opacity-100 hover:translate-x-1'}`}>
          <span className="material-symbols-outlined">fingerprint</span>
          <span>Brand Identity</span>
        </NavLink>
        <NavLink to="/calendar" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all scale-95 duration-200 ${isActive ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm opacity-100' : 'text-slate-500 dark:text-slate-400 opacity-60 hover:opacity-100 hover:translate-x-1'}`}>
          <span className="material-symbols-outlined">calendar_month</span>
          <span>Calendar</span>
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all scale-95 duration-200 ${isActive ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 shadow-sm opacity-100' : 'text-slate-500 dark:text-slate-400 opacity-60 hover:opacity-100 hover:translate-x-1'}`}>
          <span className="material-symbols-outlined">insights</span>
          <span>Analytics</span>
        </NavLink>
      </nav>

      <button className="mt-4 mb-4 w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary rounded-full py-3 font-semibold shadow-lg hover:shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-sm">add</span>
        New Campaign
      </button>

      <div className="mt-auto pt-4 border-t border-slate-200/10 space-y-1">
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 opacity-60 hover:opacity-100 hover:translate-x-1 transition-all">
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 opacity-60 hover:opacity-100 hover:translate-x-1 transition-all">
          <span className="material-symbols-outlined">help_outline</span>
          <span>Help</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;