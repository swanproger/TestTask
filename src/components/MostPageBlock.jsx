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
      <ContentMostVideo>
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=uIVRoofYckumZZ8k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </ContentMostVideo>
    </ContentMost>
  );
}
