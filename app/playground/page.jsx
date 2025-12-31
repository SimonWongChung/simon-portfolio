import PlaygroundSection from "@/components/PlaygroundSection";

const travelItems = [
  {
    title: "Tokyo",
    src: "/assets/playground/travels/Tokyo.png",
    href: "https://maps.app.goo.gl/TRWAAMohu4g7iY1h7",
  },
  {
    title: "Senso-ji Temple",
    src: "/assets/playground/travels/Senso-ji Temple.png",
    href: "https://maps.app.goo.gl/RiwZ1vZwaJ9CaDhX7",
  },
  {
    title: "Tokyo Tower",
    src: "/assets/playground/travels/Tokyo Tower.png",
    href: "https://maps.app.goo.gl/j9e7DCj35NdaGSKX9",
  },
  {
    title: "Ginza",
    src: "/assets/playground/travels/Ginza.png",
    href: "https://maps.app.goo.gl/r44sf8uac1cajHVu9",
  },
  {
    title: "Fushimi Inari Taisha",
    src: "/assets/playground/travels/Fushimi Inari.png",
    href: "https://maps.app.goo.gl/MCPw4LsD5pkub8Vq9",
  },
  {
    title: "Osaka",
    src: "/assets/playground/travels/Osaka.png",
    href: "https://maps.app.goo.gl/JiXWGHsYEAe8DATz9",
  },
  {
    title: "Myeongdong Night Market",
    src: "/assets/playground/travels/Myeongdong.png",
    href: "https://maps.app.goo.gl/7Qs9hwW2TVQGgW1Y8",
  },
  {
    title: "Busan Sky Capsule",
    src: "/assets/playground/travels/Sky Capsule.png",
    href: "https://maps.app.goo.gl/fnGxs7rBFEy3Qm6F7",
  },
  {
    title: "Haewol Observatory",
    src: "/assets/playground/travels/Haewol Observatory.png",
    href: "https://maps.app.goo.gl/ULcGj9eKrxxJtKzD9",
  },
  {
    title: "Starfield Library",
    src: "/assets/playground/travels/Starfield Library.png",
    href: "https://maps.app.goo.gl/fqaq7v8mvYYCN3k48",
  },
  {
    title: "Varenna",
    src: "/assets/playground/travels/Varenna.png",
    href: "https://maps.app.goo.gl/bRFHzANKTegDuztz5",
  },
  {
    title: "Milan",
    src: "/assets/playground/travels/Galleria Vittorio.png",
    href: "https://maps.app.goo.gl/LhBMSEof3876LLrV8",
  },
  {
    title: "Lisbon",
    src: "/assets/playground/travels/Lisbon.png",
    href: "https://maps.app.goo.gl/ZL9GDak3b7GJYq6q8",
  },
  {
    title: "Praça do Comércio",
    src: "/assets/playground/travels/Praça do Comércio.png",
    href: "https://maps.app.goo.gl/pLG9XQG8fhNstnnb8",
  },
  {
    title: "Seteais Palace",
    src: "/assets/playground/travels/Sintra.png",
    href: "https://maps.app.goo.gl/wMAAREVGTee5245V6",
  },
  {
    title: "Alfama View",
    src: "/assets/playground/travels/Alfama.png",
    href: "https://maps.app.goo.gl/4PEa8dtwXg5hQDAp9",
  },
];

const albumItems = [
  {
    title: "The Art of Loving",
    src: "/assets/playground/albums/The Art of Loving.png",
    href: "https://open.spotify.com/album/0l8zYqoUeBYg47Gmevq9HZ",
  },
  {
    title: "Deadbeat",
    src: "/assets/playground/albums/Deadbeat.png",
    href: "https://open.spotify.com/album/5WulAOx9ilWy1h8UGZ1gkI",
  },
  {
    title: "TBWPH",
    src: "/assets/playground/albums/TBWPH.png",
    href: "https://open.spotify.com/album/24f1GFXCkViGoRpmGqlSSl?si=vlwspyiyRWSLct1ouIQlcA",
  },
  {
    title: "DTMF",
    src: "/assets/playground/albums/DTMF.png",
    href: "https://open.spotify.com/album/5K79FLRUCSysQnVESLcTdb?si=j379HWU_Q1uPuVb90LUNVQ",
  },
  {
    title: "1.6",
    src: "/assets/playground/albums/1.6.png",
    href: "https://open.spotify.com/album/69fpQmOdzFUjoEuGlk3HPf?si=SSDvWZEBTHqQWWjXsPvyMw",
  },
  {
    title: "Psychodrama",
    src: "/assets/playground/albums/Psychodrama.png",
    href: "https://open.spotify.com/album/4GrFuXwRmEBJec22p58fsD?si=hN3VykyBQPSGRqT8dVrNAA",
  },
];

export default function Playground() {
  return (
    <main className="app-container px-6 mt-15 mb-32">
      <div className="text-hero font-medium tracking-extra-tight max-w-2xl mb-28">
        Design is my passion but I always make time to explore and do some cool stuff.
      </div>

      <div className="space-y-20">
        <PlaygroundSection
            title="A gallery of my travels..."
            items={travelItems}
            fit="contain"
        />

        <PlaygroundSection
            title="Some of my favourite albums..."
            items={albumItems}
            fit="cover"
        />
      </div>
    
    </main>
        
    );
}