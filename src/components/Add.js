import {
  Delete,
  DeleteForever,
  EmojiEmotions,
  Image,
  PersonAdd,
  StackedBarChart,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
  alignItems: "center",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { mobile: "calc(50% - 25px)", laptop: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width="40%" height="40%" p={3} borderRadius={5} bgcolor="white">
          <Typography variant="h6" color={"grey"} textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://material-ui.com/static/images/avatar/5.jpg"
            />
            <Typography fontWeight={500} variant="span">
              Trevor Henderson
            </Typography>
          </UserBox>
          <TextField
            sx={{
              width: "100%",
            }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="Lets Have a Look Into Your Mind... "
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mb={2} mt={2}>
            <EmojiEmotions color="primary" cursor="pointer" />
            <Image color="secondary" cursor="pointer" />
            <VideoCameraBack color="success" cursor="pointer" />
            <PersonAdd color="error" cursor="pointer" />
          </Stack>
          <ButtonGroup
            fullWidth="true"
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button
              sx={{
                width: "100px",
              }}
            >
              <Tooltip title="Discard">
                <IconButton>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
