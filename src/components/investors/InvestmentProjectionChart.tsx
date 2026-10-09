import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from 'recharts';

const ANNUAL_PROJECTION_DATA = [
  {
    name: 'Revenue',
    value: 37200000,
    formatted: '₹3,72,00,000',
    fill: '#F4D03F',
  },
  {
    name: 'Cost',
    value: 17612500,
    formatted: '₹1,76,12,500',
    fill: '#DAAF37',
  },
];

interface ProjectionTooltipProps {
  active?: boolean;
  payload?: Array<{
    name?: string;
    value?: number;
    payload?: { name: string; value: number; formatted?: string };
    dataKey?: string;
  }>;
}

const ProjectionTooltip: React.FC<ProjectionTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    const rawName = data.payload?.name || data.name || data.dataKey || '';
    const isRevenue = rawName.toLowerCase().includes('revenue');
    const isCost = rawName.toLowerCase().includes('cost');
    const title = isRevenue ? 'Revenue' : isCost ? 'Cost' : rawName;
    const formatted = isRevenue
      ? '₹3,72,00,000'
      : isCost
      ? '₹1,76,12,500'
      : `₹${Number(data.value).toLocaleString('en-IN')}`;

    return (
      <div className="rounded-xl bg-[#0D0D0D]/95 border border-[#DAAF37]/50 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.9)] text-left backdrop-blur-md pointer-events-none transition-all duration-150">
        <div className="text-xs font-heading font-semibold text-white/70 uppercase tracking-wider mb-0.5">
          {title}
        </div>
        <div className="text-sm sm:text-base font-heading font-bold text-[#F4D03F]">
          {formatted}
        </div>
      </div>
    );
  }
  return null;
};

export const InvestmentProjectionChart: React.FC = () => {
  return (
    <div className="h-64 sm:h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ANNUAL_PROJECTION_DATA}
          margin={{ top: 20, right: 24, left: 16, bottom: 12 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.06)"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="rgba(255,255,255,0.7)"
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: 'rgba(255,255,255,0.15)' }}
          />
          <YAxis
            stroke="rgba(255,255,255,0.4)"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            tickFormatter={(val) => `₹${(val / 10000000).toFixed(1)}Cr`}
          />
          <RechartsTooltip
            cursor={{ fill: 'rgba(218, 175, 55, 0.08)' }}
            content={<ProjectionTooltip />}
            animationDuration={150}
          />
          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
            animationDuration={1000}
            maxBarSize={80}
          >
            {ANNUAL_PROJECTION_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvestmentProjectionChart;
