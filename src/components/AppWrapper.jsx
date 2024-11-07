import ContactUsButton from "./ContactUsButton";
import VeryPageBlock from "./VeryPageBlock";
import LessPageBlock from "./LessPageBlock";
import MostPageBlock from "./MostPageBlock";
import {
  Wrapper,
  Header,
  HeaderButton,
  ContentBox,
  Content,
  Footer,
  FooterText,
  HeaderText,
} from "./styles/AppWrapper.styles";
import { useState } from "react";
import ContactUsPage from "./ContactUsPage";

export default function AppWrapper() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <Wrapper>
      <Header>
        <HeaderText> Some Company</HeaderText>
        <HeaderButton>
          <ContactUsButton setOpenForm={setOpenForm}></ContactUsButton>
        </HeaderButton>
      </Header>
      <ContentBox>
        <Content>
          {openForm ? (
            <ContactUsPage></ContactUsPage>
          ) : (
            <>
              <MostPageBlock></MostPageBlock>
              <VeryPageBlock setOpenForm={setOpenForm}></VeryPageBlock>
              <LessPageBlock setOpenForm={setOpenForm}></LessPageBlock>
            </>
          )}
        </Content>
      </ContentBox>
      <Footer>
        <FooterText>Some Company 2024</FooterText>
      </Footer>
    </Wrapper>
  );
}
