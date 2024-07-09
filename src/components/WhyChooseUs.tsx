"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
      title: "The Evolution of Jazz",
      description: "Explore the rich history of jazz music, tracing its roots from the early 20th century African American communities in New Orleans to its spread across the globe. Learn about key figures like Louis Armstrong, Duke Ellington, and Miles Davis, and understand how jazz has influenced and been influenced by other genres, evolving into modern subgenres such as bebop, fusion, and smooth jazz."
    },
    {
      title: "Classical Composers: Masters of Melody",
      description: "A deep dive into the lives and works of famous classical composers like Johann Sebastian Bach, Wolfgang Amadeus Mozart, and Ludwig van Beethoven. Discover their contributions to the world of music, the historical contexts in which they composed, and how their masterpieces continue to influence contemporary music. Examine the evolution of classical music through different periods such as Baroque, Classical, Romantic, and Modern."
    },
    {
      title: "The Rise of Hip-Hop",
      description: "An examination of the origins of hip-hop in the 1970s Bronx, New York, its cultural significance, and the artists who shaped its evolution. Learn about the four pillars of hip-hop culture: DJing, MCing (rapping), breakdancing, and graffiti art. Discover influential artists like Grandmaster Flash, Tupac Shakur, and Kendrick Lamar, and explore how hip-hop has become a global phenomenon, addressing social issues and influencing various aspects of modern culture."
    },
    {
      title: "Electronic Music: From Synths to Software",
      description: "An overview of the development of electronic music, highlighting key instruments like the Moog synthesizer and drum machines, as well as pioneering artists such as Kraftwerk, Daft Punk, and Aphex Twin. Explore the evolution of electronic music from its early experimental beginnings to the rise of genres like techno, house, and EDM. Understand the role of software and digital technology in shaping the future of music production and performance."
    }
  ];
  
function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs