import { Hero } from '@/components/Hero';
import { TechStrip } from '@/components/TechStrip';
import { EngineeringDesign } from '@/components/EngineeringDesign';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Reveal } from '@/components/Reveal';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <Reveal><EngineeringDesign /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Resume /></Reveal>
      <Reveal><Contact /></Reveal>
    </>
  );
}
