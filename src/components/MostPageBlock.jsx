import {
  ContentMost,
  ContentMostTexts,
  ContentMostTextTitle,
  ContentMostText,
  ContentMostVideo,
} from "./styles/MostPageBlock.styles";

export default function MostPageBlock() {
  return (
    <ContentMost>
      <ContentMostTexts>
        <ContentMostTextTitle>
          Most important title on the page
        </ContentMostTextTitle>
        <ContentMostText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </ContentMostText>
      </ContentMostTexts>
      <ContentMostVideo></ContentMostVideo>
    </ContentMost>
  );
}
