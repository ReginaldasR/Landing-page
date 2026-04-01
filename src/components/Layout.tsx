
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-surface text-on-surface font-body">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <TopNav />
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-surface relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;