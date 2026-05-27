export default function Hero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop)",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <p className="uppercase tracking-[6px] text-sm mb-4">
          Welcome to Nadia's Blog
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Fishing & IT Journey
        </h1>

        <p className="text-lg md:text-2xl leading-relaxed">
          Рыбалка, путешествия, природа, разработка и путь в IT.
        </p>
      </div>
    </section>
  );
}