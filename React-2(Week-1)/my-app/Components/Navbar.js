"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/navigation";

const pages = [
  { title: "Home", path: "/home" },
  { title: "About", path: "/About" },
  { title: "Contact", path: "/contact" },
];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigate = (path) => {
    setDrawerOpen(false);
    router.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <List sx={{ width: 250 }}>
                {pages.map((page) => (
                  // Remove component={Link} and href
                  <ListItemButton
                    key={page.title}
                    onClick={() => handleNavigate(page.path)} // updated here
                  >
                    <ListItemText primary={page.title} />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {pages.map((page) => (
              // Remove component={Link} and href
              <Button
                key={page.title}
                onClick={() => handleNavigate(page.path)} // updated here
                sx={{ color: "white", textTransform: "none" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
