import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

const Topbar = ({ showRightbar, setShowRightbar }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  function handleRightbar() {
    if (showRightbar) setShowRightbar(false);
    else setShowRightbar(true);
  }

  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
        </Box>

        {/* ICONS */}
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          {/* <IconButton>
            <TuneRoundedIcon />
          </IconButton> */}
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
          <IconButton>
            <ExitToAppRoundedIcon />
          </IconButton>
        </Box>
      </Box>
      {showRightbar ?
        ''
        :
        <Box display="flex" justifyContent="right" mr={'25px'} onClick={handleRightbar}>
          <Box textAlign="center">
            <Typography
              variant="h3"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
              backgroundColor={colors.primary[400]}
              borderRadius="3px"
              p={1}>
              Add daily activity
              <IconButton>
                <MenuOpenRoundedIcon />
              </IconButton> 
            </Typography>
          </Box>
        </Box>
      }
    </>
  );
};

export default Topbar;