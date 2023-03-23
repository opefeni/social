import React from "react";
import {
    ManageAccountsOutlined,
    EventAvailableOutlined,
  } from "@mui/icons-material";
  import { Box, Typography, Divider, useTheme } from "@mui/material";
  import UserImage from "../../components/UserImage";
  import FlexBetween from "../../components/FlexBetween";
  import WidgetWrapper from "../../components/WidgetWrapper";
  import { useNavigate } from "react-router-dom";
  
  const UserWidget = ({ userId, picturePath }) => {
    const { palette } = useTheme();
    const navigate = useNavigate();
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

  
    return (
      <WidgetWrapper>
        {/* FIRST ROW */}
        <FlexBetween
          gap="0.5rem"
          pb="1.1rem"
          onClick={() => navigate(`/profile/1`)}
        >
          <FlexBetween gap="1rem">
            <UserImage image={picturePath} />
            <Box>
              <Typography
                variant="h4"
                color={dark}
                fontWeight="500"
                sx={{
                  "&:hover": {
                    color: palette.primary.light,
                    cursor: "pointer",
                  },
                }}
              >
                Gbeminiyi Ajayi
              </Typography>
              <Typography color={medium}>20 friends</Typography>
            </Box>
          </FlexBetween>
          <ManageAccountsOutlined />
        </FlexBetween>
  
        <Divider />
  
        {/* SECOND ROW */}
        <Box p="1rem 0">
          <FlexBetween mb="0.5rem">
            <Typography color={medium}>Your Community Group</Typography>
            <Typography color={main} fontWeight="500">
              2
            </Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography color={medium}>RaiseMe Group Joined</Typography>
            <Typography color={main} fontWeight="500">
              10
            </Typography>
          </FlexBetween>
        </Box>
  
        <Divider />
  
        {/* THIRD ROW */}
        <Box p="1rem 0">
          <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
            Upcoming Community Events
          </Typography>
  
          <FlexBetween gap="1rem" mb="0.5rem">
            <FlexBetween gap="1rem">
            <EventAvailableOutlined fontSize="large" sx={{ color: main }} />
              <Box>
                <Typography color={main} fontWeight="500">
                  2023 Mahogany Town Meeting
                </Typography>
                <Typography color={medium}>30-Mar-2023</Typography>
              </Box>
            </FlexBetween>
          </FlexBetween>

          <FlexBetween gap="1rem" mb="0.5rem">
            <FlexBetween gap="1rem">
            <EventAvailableOutlined fontSize="large" sx={{ color: main }} />
              <Box>
                <Typography color={main} fontWeight="500">
                  2023 Spring Canival
                </Typography>
                <Typography color={medium}>01-Apr-2023</Typography>
              </Box>
            </FlexBetween>
          </FlexBetween> 
        </Box>
      </WidgetWrapper>
    );
  };
  
  export default UserWidget;