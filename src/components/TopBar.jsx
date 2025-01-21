import { Link } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  CalendarIcon,
  CogIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

function TopBar() {
  const menuItems = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'Leads', icon: UserGroupIcon, path: '/leads' },
    { name: 'Contacts', icon: UserGroupIcon, path: '/contacts' },
    { name: 'Tasks', icon: ClipboardDocumentListIcon, path: '/tasks' },
    { name: 'Reports', icon: ChartBarIcon, path: '/reports' },
    { name: 'Calendar', icon: CalendarIcon, path: '/calendar' },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-[#032D60]">Sales Cloud</h1>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center text-gray-600 hover:text-[#032D60] px-3 py-2 text-sm font-medium"
              >
                <item.icon className="w-5 h-5 mr-1" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[#032D60]">
              <BellIcon className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-[#032D60]">
              <CogIcon className="w-6 h-6" />
            </button>
            <div className="h-8 w-8 rounded-full bg-[#032D60] text-white flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;