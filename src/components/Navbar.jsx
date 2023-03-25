import {
  Checkroom,
  Logout,
  Mail,
  NotificationsActive,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",

  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("tablet")]: {
    display: "flex",
  },
}));

const UserRoom = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("tablet")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      {/* <Toolbar>Navbar</Toolbar> */}
      <CustomToolbar>
        <Typography
          sx={{ display: { mobile: "none", tablet: "block" } }}
          variant="h6"
        >
          Dapper-D
        </Typography>
        <Checkroom sx={{ display: { mobile: "block", tablet: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsActive />
          </Badge>
          <Avatar
            sx={{ width: 40, height: 40 }}
            src="https://images.pexels.com/photos/14664626/pexels-photo-14664626.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserRoom onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 40, height: 40 }}
            src="https://images.pexels.com/photos/14664626/pexels-photo-14664626.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Typography variant="span">Dappy</Typography>
        </UserRoom>
      </CustomToolbar>
      <Menu
        id="account-menu"
        open={open}
        onClose={(e) => setOpen(false)}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
