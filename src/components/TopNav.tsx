
import { useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const TopNav = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const showSearch = location.pathname !== '/select-brand';

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-3 w-full bg-slate-50/60 dark:bg-slate-900/60 backdrop-blur-xl font-manrope tracking-tight">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">Atmospheric Editor</h1>
        {showSearch && (
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
            <input
              type="text"
              placeholder="Search..."
              className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors">
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors relative">
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <div className="h-8 w-8 rounded-full overflow-hidden ml-2 border border-slate-200 shadow-sm ring-2 ring-white">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZS93qqLHo5DJr2KvlM9_-YCUeXc8Q7gyPvfmpp0baKLBdUOQ5imtng7dQK4v869Wway_ziwp7bm85oIoVmx7YFjDCp1HalD23P9ZF204WUG3HaHiMf4cyS5HzZ-fCwc1142BJGekYxg5QylkxN72Cm1x5mktZDEYThkVGLUfpNuPECyRoquczuz6F4I7kISiNiXaCkr7blGKwz_hTS8Kmh3BUhSG9D6bB-zWlbPNQ60z-1DNOvuAIqNW4h4pKtj_cBH9a6eGRXMk"
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default TopNav;