import { Box, Paper, Typography } from "@mui/material";

function Header() {
  return (
    <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
        <Box sx={{ py: 1, bgcolor: '#171717' }}>
          <Typography component="h1" align="center">
            Vestaboard++
          </Typography>
        </Box>
    </Paper>
  )
};

export default Header;