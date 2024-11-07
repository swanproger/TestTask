import { Button } from "@mui/material";

export default function ContactUsButton({ setOpenForm }) {
  return (
    <Button variant="contained" onClick={() => setOpenForm(true)}>
      Contact us
    </Button>
  );
}
