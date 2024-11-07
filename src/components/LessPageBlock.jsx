import { ContentLess, ContentLessText } from "./styles/LessPageBlock.styles";
import ContactUsButton from "./ContactUsButton";

export default function LessPageBlock({ setOpenForm }) {
  return (
    <ContentLess>
      <ContentLessText>Less important title</ContentLessText>
      <ContactUsButton setOpenForm={setOpenForm}></ContactUsButton>
    </ContentLess>
  );
}
