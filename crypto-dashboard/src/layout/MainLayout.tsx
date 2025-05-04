import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const drawerWidth = 240;

const MainLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { sm: `${drawerWidth}px` }, // فاصله از سایدبار در نسخه دسکتاپ
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
