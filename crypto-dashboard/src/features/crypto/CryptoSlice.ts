import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRates = createAsyncThunk(
  'crypto/fetchRates',
  async (symbol: string) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd,eur,jpy,gbp`,
    );
    return res.data;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    rates: {},
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.loading = false;
        state.rates = action.payload;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'خطا در گرفتن داده‌ها';
      });
  },
});

export default cryptoSlice.reducer;
