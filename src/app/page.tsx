import Slide from "@/components/Slide";
import SlideContainer from "@/components/SlideContainer";
import { slides } from "@/data/slides";

const slideRefs = slides.map(({ id, title }) => ({ id, title }));

export default function Home() {
  return (
    <SlideContainer slides={slideRefs}>
      {slides.map((slide, index) => (
        <Slide
          key={slide.id}
          slide={slide}
          index={index}
          total={slides.length}
        />
      ))}
    </SlideContainer>
  );
}
