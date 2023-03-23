import { Posts } from "../../dummyData";
import FlexBetween from "../../components/FlexBetween";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";

const PostsWidget = () => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  return (
      Posts.map((post)=>{
        console.log(post[0]);
        
      })   
  );
};

export default PostsWidget;