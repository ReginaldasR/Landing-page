
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const BrandSelection = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleBrandSelect = () => {
    navigate('/create-post');
  };

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar bg-surface-container-low p-12 lg:p-20 relative h-screen">

      {/* Top Navigation specific to BrandSelection as per design reference */}
      <header className="bg-slate-50/60 backdrop-blur-xl flex justify-between items-center px-8 py-3 w-full absolute top-0 left-0 right-0 z-50 font-manrope tracking-tight">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-slate-800 dark:text-slate-100">Atmospheric Editor</span>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={toggleTheme} className="material-symbols-outlined text-slate-500 hover:bg-slate-200/50 p-2 rounded-full transition-colors">
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </button>
          <button className="material-symbols-outlined text-slate-500 hover:bg-slate-200/50 p-2 rounded-full transition-colors" data-icon="notifications">notifications</button>
          <div className="h-10 w-10 rounded-full bg-surface-container-high flex items-center justify-center border-2 border-surface-container-lowest overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvvGL3PCYe3txw-L8Fh8NfUgAEz6lb88dWumUeci3wWh1xzvA_9T3i2YPYuglgrhxLR6i0F9DeWCL4GRM-5HmhSRrjtC1Nmv-ifF5jqiyHGnDE22YiQ_6lPaH51jZLifq5s5Sy_cKCEABmYEhcmdvaBJFqNCNRifPDwzsdlj2pflePg2XKSzx1IV2B1D6Oo_US0tPpN7sB34UC3ZK_6uxy3VGK-KUejnVC8Q6vs_t4Tom6WwVJNanNpV-QzZz9BONjNg6Q2vqVSB8"
              alt="User profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto pt-16">
        <header className="mb-16">
          <h1 className="text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-4">Choose your workspace</h1>
          <p className="text-lg font-body text-secondary max-w-xl">Welcome back. Select the brand environment you'd like to work in today or start something new.</p>
        </header>

        {/* Bento Grid of Brands */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10">

          {/* Brand Card 1 */}
          <div className="group bg-surface-container-lowest rounded-xl p-8 transition-all hover:translate-y-[-4px] border border-transparent hover:border-primary/10 flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="h-16 w-16 bg-surface-container-high rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhyjXjS9JoC8nhkx_Zj4Rpn6RF2j3LqLIoUIuOzBXf0dNlYLaG4njhGxQFW301jKKVPRZM4DiiEgDf_QTgB0b7MHwEUbK7RantWuZawERPXbTD1cmC21vUPT-iLBFS28EhfOCof3jqw1trelkOm7xILTlV0UGuqGhMG1KHx3Y8Bc-bZKz16Hh3EghfDdpCnEFXdzCE82AwyWAx5lIkTpw7XmfwzO3QxGbkCvHXRH6-LOYuUUISP6l8I77i_qqFqzdJTOXcnQdSiUo" alt="Zenith Coffee Logo" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Zenith Coffee</h3>
              <p className="text-secondary font-body text-sm leading-relaxed">Artisanal roasting and sustainable sourcing. 14 scheduled posts for this week.</p>
            </div>
            <div className="mt-8">
              <button onClick={handleBrandSelect} className="w-full py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-full font-headline font-semibold text-sm transition-all shadow-md group-hover:shadow-primary/20">
                Manage This Brand
              </button>
            </div>
          </div>

          {/* Brand Card 2 */}
          <div className="group bg-surface-container-lowest rounded-xl p-8 transition-all hover:translate-y-[-4px] border border-transparent hover:border-primary/10 flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="h-16 w-16 bg-surface-container-high rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Trsm0kI1U4ef9NlrgWUbHoba7XRkVmYbjw7pKX1V8odObELdP1V202j_6oZTxz3JQyGIIT41P7orolcOU0Tq9KP_HTz8NiV8zSn8uPlM4OGcCr0MFSAHYrnERO6GL8LKdNTtYaM17h-s93aBSAMLVFm-77kCBHC7FDtw7HtlzWaIdsuCpSG42J8wYt8OpRu19J-07lGG7Y6ZSgqa7FlJUVkHRgd_rhfqaAv2SPJusur65vALXhqpn0K1p7v6clHv3LT-Frm2FMk" alt="Lumina Tech Logo" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Lumina Tech</h3>
              <p className="text-secondary font-body text-sm leading-relaxed">Next-generation cloud solutions. Analytics indicate 12% growth in engagement.</p>
            </div>
            <div className="mt-8">
              <button onClick={handleBrandSelect} className="w-full py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-full font-headline font-semibold text-sm transition-all shadow-md group-hover:shadow-primary/20">
                Manage This Brand
              </button>
            </div>
          </div>

          {/* Brand Card 3 */}
          <div className="group bg-surface-container-lowest rounded-xl p-8 transition-all hover:translate-y-[-4px] border border-transparent hover:border-primary/10 flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="h-16 w-16 bg-surface-container-high rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJlpTIbVeXxu2GoxY5vEOmVsNYoud0IpYiCVMXtbqx66clTs4tsOmnoUYFnewOWGQ_56uEQh8jdzV7neTw0Dv3BkdzTPgjKSBzUxpkh8k0sDjD7lsdn5nr12gOPCqlXFmcq1dOpSosdqQSUulwXQOJXDukeggAEVRJiv1_cGFiInCpGEQlYFMKpWdiYB7tZq0sTLcaWBLEbTy5UquroBuX-Zuz0EDy390KdY9Lt70qNpFMzzVVYlfe8FdOEwC70mJ30hX2PZdAW2w" alt="Aura Wellness Logo" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Aura Wellness</h3>
              <p className="text-secondary font-body text-sm leading-relaxed">Mindful living and holistic health products. New campaign launching tomorrow.</p>
            </div>
            <div className="mt-8">
              <button onClick={handleBrandSelect} className="w-full py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-full font-headline font-semibold text-sm transition-all shadow-md group-hover:shadow-primary/20">
                Manage This Brand
              </button>
            </div>
          </div>

          {/* Add New Brand Card */}
          <div className="group bg-transparent border-2 border-dashed border-outline-variant/30 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all hover:bg-surface-container-highest/50 cursor-pointer min-h-[340px]">
            <div className="h-16 w-16 bg-secondary-container rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-on-secondary-container text-3xl" data-icon="add">add</span>
            </div>
            <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Add New Brand</h3>
            <p className="text-secondary font-body text-sm max-w-[200px]">Create a new digital identity for your business.</p>
          </div>

        </div>

        {/* Subtle Background Decoration */}
        <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] opacity-10 pointer-events-none z-0">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.1,-69.1,69.5,-57.1,77.8,-43.3C86.1,-29.4,91.3,-13.7,90.4,1.8C89.5,17.3,82.4,32.6,73.1,46C63.8,59.4,52.2,71,38.4,78.2C24.6,85.5,8.5,88.4,-7.8,87C-24,85.6,-40.4,79.9,-54.3,71C-68.2,62.1,-79.6,49.9,-85.7,35.7C-91.8,21.5,-92.5,5.3,-88.9,-9.8C-85.3,-24.9,-77.3,-38.9,-66.6,-49.4C-55.9,-59.9,-42.4,-67,-29.1,-74.3C-15.8,-81.6,-2.7,-89.1,10.6,-90.9C24,-92.7,31.3,-83.8,44.7,-76.4Z" fill="#37628a" transform="translate(250 250)"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BrandSelection;