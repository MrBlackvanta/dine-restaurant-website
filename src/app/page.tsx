import { Hero, MenuPanel, StoryPanels } from "@/views/home";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip">
      <Hero />
      <StoryPanels />
      <MenuPanel />
    </main>
  );
}
