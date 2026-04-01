
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Login = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/select-brand');
  };

  return (
    <main className="flex-1 flex items-center justify-center relative px-6 py-12 wind-gradient min-h-screen">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        className="absolute right-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container-lowest/80 px-4 py-2 text-sm font-semibold text-on-surface shadow-lg shadow-black/5 backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-surface-container-highest/70 focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <span className="material-symbols-outlined text-lg">
          {theme === 'dark' ? 'light_mode' : 'dark_mode'}
        </span>
        <span className="hidden sm:inline">
          Switch to {theme === 'dark' ? 'light' : 'dark'}
        </span>
      </button>

      {/* Abstract Wind Shapes (Background Decoration) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] rounded-full bg-secondary/10 blur-[150px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] rounded-full bg-tertiary-fixed/20 blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Brand Identity */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-surface-container-lowest shadow-sm mb-6 border border-white/20">
            <span className="material-symbols-outlined text-primary text-3xl" data-icon="air">air</span>
          </div>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-background mb-3">
            Atmospheric Editor
          </h1>
          <p className="text-on-surface-variant font-body text-lg max-w-[280px] mx-auto leading-relaxed">
            Where your creative vision finds its flow.
          </p>
        </div>

        {/* Login Container */}
        <div className="glass-card rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-primary/5 border border-white/40">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block font-label text-[11px] font-bold uppercase tracking-widest text-outline mb-2 ml-1">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 ml-1">
                <label htmlFor="password" className="block font-label text-[11px] font-bold uppercase tracking-widest text-outline">Password</label>
                <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-primary hover:text-primary-dim transition-colors">Forgot?</a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
              />
            </div>

            <button type="submit" className="w-full primary-gradient-btn text-on-primary font-headline font-bold py-4 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
              <span>Let's Begin</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/20"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.2em]">
              <span className="bg-transparent px-4 text-outline">or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button className="flex items-center justify-center gap-3 w-full bg-surface-container-lowest py-3.5 px-6 rounded-full border border-outline-variant/10 text-on-surface font-medium hover:bg-surface-bright transition-colors shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
              </svg>
              <span>Google Workspace</span>
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-on-surface-variant text-sm">
            New to the Editor? <a href="#" className="text-primary font-semibold hover:underline decoration-primary/30 underline-offset-4">Create workspace</a>
          </p>
          <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-outline">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Decorative Illustration Card */}
      <div className="hidden lg:block fixed right-12 top-1/2 -translate-y-1/2 w-[400px]">
        <div className="glass-card p-2 rounded-[2rem] shadow-2xl border border-white/20 rotate-3 hover:rotate-0 transition-transform duration-700">
          <div className="relative rounded-[1.8rem] overflow-hidden aspect-[4/5]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1olxvtc4I1-nogQm_ENzB2eMNprEM63OeztNWW0bgmwu7vUZyN4S9r99mnO9MLP3LKhtM6if3jBNifEZTaIoUA2rfpYrcdyWBZcl58zKyktSlOKTGVnjuSEh2Feoi3AS_Xl0cPN8EBp2d25beN_DseBrhHkz_Ge-aCsY5VO6YvdoWL_jeHh2WwSCw24SxsXrfZNyoCdz7H1Jx4uxoZJ2VSU0aWApRnDphMJZ90HBMKRg-IvEWiu35PijVWkf8_6aPUxaRzJJKerI"
              alt="Creative workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30">
                <p className="text-white text-sm font-medium leading-relaxed italic">
                  "The system isn't just a tool; it's a calm environment designed to reduce the cognitive load of digital clutter."
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs text-on-secondary-container" data-icon="check_circle">check_circle</span>
                  </div>
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-wider">Editorial Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
