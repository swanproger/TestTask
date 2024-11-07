import ContactUsButton from "./ContactUsButton";
import {
  ContentVery,
  ContentVeryText,
  VeryPageBlockItemTitle,
  VeryPageBlockItemText,
  VaryPageBlockList,
  ItemBlock,
} from "./styles/VeryPageBlock.styles";

export default function VeryPageBlock({ setOpenForm }) {
  function VeryPageBlockItem() {
    return (
      <ItemBlock>
        <VeryPageBlockItemTitle>Title</VeryPageBlockItemTitle>
        <VeryPageBlockItemText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentut
        </VeryPageBlockItemText>
      </ItemBlock>
    );
  }
  return (
    <ContentVery>
      <ContentVeryText>Also very important title</ContentVeryText>

      <VaryPageBlockList>
        <VeryPageBlockItem></VeryPageBlockItem>
        <VeryPageBlockItem></VeryPageBlockItem>
        <VeryPageBlockItem></VeryPageBlockItem>
        <VeryPageBlockItem></VeryPageBlockItem>
        <VeryPageBlockItem></VeryPageBlockItem>
        <VeryPageBlockItem></VeryPageBlockItem>
      </VaryPageBlockList>

      <ContactUsButton setOpenForm={setOpenForm}></ContactUsButton>
    </ContentVery>
  );
}
