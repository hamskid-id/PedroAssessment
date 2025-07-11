import {
  AnalysisIcon,
  DashboardIcon,
  NewsIcon,
  ReportIcon,
  SettingsIcon,
  WatchlistIcon,
} from '@/public/svg'

export const navItems = [
  {
    title: 'Dashboard',
    url: '',
    icon: DashboardIcon,
  },
  {
    title: 'Analysis',
    url: '/analysis',
    icon: AnalysisIcon,
  },
  {
    title: 'News & Report',
    url: '/news',
    icon: NewsIcon,
    count: 4,
  },
  {
    title: 'Exclusive Report',
    url: '/exclusive-report',
    icon: ReportIcon,
  },
  {
    title: 'Watchlist',
    url: 'watchlist',
    icon: WatchlistIcon,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: SettingsIcon,
  },
]
