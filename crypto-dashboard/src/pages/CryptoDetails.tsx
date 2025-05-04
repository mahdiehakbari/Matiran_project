import { Typography, Card, CardContent, Grid } from '@mui/material';
import MainLayout from '../layout/MainLayout';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { time: '09:00', price: 50000 },
  { time: '10:00', price: 50500 },
  { time: '11:00', price: 50200 },
  { time: '12:00', price: 50800 },
  { time: '13:00', price: 51000 },
];

const CryptoDetails = () => {
  return (
    <MainLayout>
      <Typography variant='h4' gutterBottom>
        جزئیات ارز دیجیتال: بیت‌کوین
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid>
          <Card>
            <CardContent>
              <Typography variant='h6'>قیمت فعلی</Typography>
              <Typography variant='h4' color='primary'>
                $51,000
              </Typography>
              <Typography variant='body2' color='green'>
                +1.2% نسبت به یک ساعت گذشته
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid>
          <Card>
            <CardContent>
              <Typography variant='h6'>نمودار قیمت در ۵ ساعت گذشته</Typography>
              <ResponsiveContainer width='100%' height={200}>
                <LineChart data={data}>
                  <XAxis dataKey='time' />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type='monotone'
                    dataKey='price'
                    stroke='#8884d8'
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid>
          <Card>
            <CardContent>
              <Typography variant='h6'>درباره بیت‌کوین</Typography>
              <Typography variant='body1'>
                بیت‌کوین یک ارز دیجیتال غیرمتمرکز است که در سال ۲۰۰۹ معرفی شد
                و...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default CryptoDetails;
