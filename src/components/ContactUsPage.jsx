import { ContactBox, FormBox, FormItems } from "./styles/ContactUsPage.styled";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setHumanData } from "../store/contactSlice";
export default function ContactUsPage() {
  const store = useSelector((store) => store.contacts);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(setHumanData({ name, value }));
  }
  console.log(store);
  return (
    <ContactBox>
      <FormBox>
        <FormItems>
          <p>Имя</p>
          <TextField
            name="name"
            variant="outlined"
            label="Введите имя"
            onChange={handleChange}
            defaultValue={store.humanData.name}
          ></TextField>
          <p>Email</p>
          <TextField
            name="email"
            variant="outlined"
            label="Введите email"
            onChange={handleChange}
            defaultValue={store.humanData.email}
          ></TextField>
          <p>Сообщение</p>
          <TextField
            name="message"
            variant="outlined"
            label="Введите сообщение"
            onChange={handleChange}
            defaultValue={store.humanData.message}
            multiline
            rows={4}
          ></TextField>
          <Button variant="contained" type="sibmit">
            Submit
          </Button>
        </FormItems>
      </FormBox>
    </ContactBox>
  );
}
