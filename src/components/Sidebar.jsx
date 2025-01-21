import { Link } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  CalendarIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

function Sidebar() {
  const menuItems = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'Leads', icon: UserGroupIcon, path: '/leads' },
    { name: 'Accounts', icon: UserGroupIcon, path: '/accounts' },
    { name: 'Contacts', icon: UserGroupIcon, path: '/contacts' },
    { name: 'Opportunities', icon: CurrencyDollarIcon, path: '/opportunities' },
    { name: 'Tasks', icon: ClipboardDocumentListIcon, path: '/tasks' },
    { name: 'Reports', icon: ChartBarIcon, path: '/reports' },
    { name: 'Calendar', icon: CalendarIcon, path: '/calendar' },
    { name: 'Settings', icon: CogIcon, path: '/settings' },
  ];

  return (
    <div className="w-64 bg-[#032D60] min-h-screen text-white">
      <div className="p-4 border-b border-[#1B96FF]/20">
        <h1 className="text-2xl font-bold">Sales Cloud</h1>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center px-4 py-3 text-white/90 hover:bg-[#1B96FF]/20"
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;