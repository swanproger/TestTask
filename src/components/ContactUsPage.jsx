import { ContactBox, FormBox, FormItems } from "./styles/ContactUsPage.styled";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setHumanData } from "../store/contactSlice";
import { useState } from "react";

export default function ContactUsPage() {
  const store = useSelector((store) => store.contacts);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(setHumanData({ name, value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      store.humanData.name === "" ||
      store.humanData.message === "" ||
      store.humanData.email === ""
    ) {
      setError(true);

      return;
    }
  }
  return (
    <ContactBox>
      <FormBox>
        <FormItems onSubmit={handleSubmit}>
          <p>Имя</p>
          <TextField
            error={error && !store.humanData.name ? true : false}
            name="name"
            variant="outlined"
            label="Введите имя"
            onChange={handleChange}
            defaultValue={store.humanData.name}
          ></TextField>
          <p>Email</p>
          <TextField
            error={error && !store.humanData.email ? true : false}
            name="email"
            variant="outlined"
            label="Введите email"
            onChange={handleChange}
            defaultValue={store.humanData.email}
          ></TextField>
          <p>Сообщение</p>
          <TextField
            error={error && !store.humanData.message ? true : false}
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
