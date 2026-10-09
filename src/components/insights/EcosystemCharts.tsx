import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from 'recharts';
import { GlassCard } from '../common/GlassCard';

const GROWTH_DATA = [
  { month: 'Jan', users: 1200, businesses: 45 },
  { month: 'Feb', users: 2100, businesses: 82 },
  { month: 'Mar', users: 3400, businesses: 130 },
  { month: 'Apr', users: 5200, businesses: 195 },
  { month: 'May', users: 7800, businesses: 280 },
  { month: 'Jun', users: 10500, businesses: 345 },
];

const ENGAGEMENT_DATA = [
  { vertical: 'Beauty', orders: 4500, bookings: 3200 },
  { vertical: 'Real Estate', orders: 850, bookings: 1200 },
  { vertical: 'Food', orders: 6200, bookings: 0 },
  { vertical: 'Jobs', orders: 0, bookings: 2100 },
  { vertical: 'Commerce', orders: 3800, bookings: 1500 },
];

export const EcosystemCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {/* User & Business Growth Trend */}
      <GlassCard className="p-6 sm:p-8 border-white/[0.08]" glow="subtle">
        <div className="mb-6">
          <h3 className="text-xl font-heading font-semibold text-white mb-1">Ecosystem Expansion</h3>
          <p className="text-xs text-white/50 font-sans uppercase tracking-wider">User & Business Onboarding Trend (H1 2026)</p>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={GROWTH_DATA}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DAAF37" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#DAAF37" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorBiz" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F4D03F" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#F4D03F" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis 
                dataKey="month" 
                stroke="rgba(255,255,255,0.3)" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.3)" 
                fontSize={10} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(val) => `${val > 999 ? (val/1000).toFixed(1) + 'k' : val}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0A0A0A', 
                  border: '1px solid rgba(218,175,55,0.3)',
                  borderRadius: '12px',
                  fontSize: '12px'
                }} 
              />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              <Area 
                type="monotone" 
                dataKey="users" 
                name="Total Users"
                stroke="#DAAF37" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorUsers)" 
              />
              <Area 
                type="monotone" 
                dataKey="businesses" 
                name="Merchant Partners"
                stroke="#F4D03F" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorBiz)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      {/* Engagement by Vertical */}
      <GlassCard className="p-6 sm:p-8 border-white/[0.08]" glow="subtle">
        <div className="mb-6">
          <h3 className="text-xl font-heading font-semibold text-white mb-1">Vertical Engagement</h3>
          <p className="text-xs text-white/50 font-sans uppercase tracking-wider">Transaction vs Booking Volume by Sector</p>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ENGAGEMENT_DATA} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
              <XAxis type="number" hide />
              <YAxis 
                dataKey="vertical" 
                type="category" 
                stroke="rgba(255,255,255,0.5)" 
                fontSize={11} 
                tickLine={false} 
                axisLine={false}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ 
                  backgroundColor: '#0A0A0A', 
                  border: '1px solid rgba(218,175,55,0.3)',
                  borderRadius: '12px',
                  fontSize: '12px'
                }} 
              />
              <Legend verticalAlign="top" height={36} iconType="rect" />
              <Bar 
                dataKey="orders" 
                name="Orders/Sales"
                fill="#DAAF37" 
                radius={[0, 4, 4, 0]} 
                barSize={12}
              />
              <Bar 
                dataKey="bookings" 
                name="Bookings"
                fill="rgba(218,175,55,0.4)" 
                radius={[0, 4, 4, 0]} 
                barSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
    </div>
  );
};
