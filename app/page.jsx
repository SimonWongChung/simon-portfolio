import Image from "next/image";

export default function Home() {
  return (
    <main className="app-container px-6 py-15">
      <div className="text-hero font-medium tracking-extra-tight max-w-4xl">
        Simon designs authentic human experiences and brings clarity to complex problems. He strives to make our interactions with the world more thoughtful and beautiful.
      </div>
      <div className="text-subHero tracking-tight max-w-3xl mt-4 text-text-subHero">
        Previously designed @VCH. Currently studying design and entrepreneurship at SFU, and probably checking out a new café.
      </div>
    </main>
  );
}