// src/pages/Dashboard.tsx
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchRates } from '../features/crypto/CryptoSlice';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CryptoCard from '../components/CryptoCard';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Box from '@mui/material/Box';
import MainLayout from '../layout/MainLayout';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { rates, loading, error } = useAppSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchRates());
  }, [dispatch]);

  const chartData = Object.entries(rates.bitcoin).map(([currency, value]) => ({
    currency: currency.toUpperCase(),
    value,
  }));

  return (
    <MainLayout>
      <Box sx={{ p: 4 }}>
        <Typography variant='h4' gutterBottom>
          نرخ لحظه‌ای بیت‌کوین
        </Typography>

        {loading ? (
          <Typography>در حال دریافت اطلاعات...</Typography>
        ) : error ? (
          <Typography color='error'>{error}</Typography>
        ) : (
          <>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {Object.entries(rates.bitcoin).map(([currency, value]) => (
                //@ts-ignore
                <Grid item xs={12} sm={6} md={3} key={currency}>
                  <CryptoCard currency={currency} value={value} />
                </Grid>
              ))}
            </Grid>

            <Typography variant='h6' gutterBottom>
              نمودار مقایسه‌ای
            </Typography>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={chartData}>
                <XAxis dataKey='currency' />
                <YAxis />
                <Tooltip />
                <Line
                  type='monotone'
                  dataKey='value'
                  stroke='#1976d2'
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </>
        )}
      </Box>
    </MainLayout>
  );
};

export default Dashboard;
