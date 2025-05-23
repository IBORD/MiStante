"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import Snackbar from "@mui/material/Snackbar";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addFavorite,
  removeFavorite,
} from "@/features/favorites/favoritesSlice";

interface ImageCardProps {
  id: string;
  src: string;
  title: string;
}

export function ImageCard({ id, src, title }: ImageCardProps) {
  const dispatch = useAppDispatch();
  const favoriteIds = useAppSelector((state) => state.favorites.ids);
  const isFavorite = favoriteIds.includes(id);

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: `Confira: ${title}`,
      text: `Dê uma olhada neste item: ${title}`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setSnackbarMessage("Conteúdo compartilhado com sucesso!");
        setSnackbarOpen(true);
      } catch (error) {
        console.error("Erro ao compartilhar:", error);
        setSnackbarMessage("Erro ao compartilhar.");
        setSnackbarOpen(true);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setSnackbarMessage("Link copiado para a área de transferência!");
        setSnackbarOpen(true);
      } catch (err) {
        console.error("Falha ao copiar o link: ", err);
        setSnackbarMessage("Falha ao copiar o link.");
        setSnackbarOpen(true);
      }
    }
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          image={src}
          alt={title}
          sx={{ objectFit: "cover", height: 180 }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {title}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <IconButton aria-label="share" onClick={handleShare}>
            <ShareIcon />
          </IconButton>
          <IconButton
            aria-label="add to favorites"
            onClick={handleToggleFavorite}
            color={isFavorite ? "error" : "default"}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </CardActions>
      </Card>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </>
  );
}
