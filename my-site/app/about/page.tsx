import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main>
      

      <section className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>

        <p className="text-lg leading-relaxed mb-6">
          Привет! Меня зовут Надя.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Я люблю рыбалку, путешествия, природу и изучаю веб-разработку.
        </p>

        <p className="text-lg leading-relaxed">
          Этот сайт — мой личный блог о рыбалке, жизни и пути в IT.
        </p>
      </section>
    </main>
  );
}