import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Заголовок */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Привет, я Надя 👋
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Разработчик баз данных, рыбачка, любительница книг
          и человек, который решил построить собственный сайт
          с нуля.
        </p>
      </section>

      {/* Фото и описание */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <Image
            src="/hero.jpg"
            alt="Надя"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Немного обо мне
          </h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Более 15 лет я работаю с базами данных и создаю
            решения на Oracle. Мне всегда нравилось разбираться
            в сложных системах и понимать, как всё устроено
            внутри.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            В свободное время люблю рыбалку на Чёрном море и в
            горных реках Кавказа. Особенно нравится ловить
            форель и голавля.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Сейчас изучаю современную веб-разработку и строю
            этот сайт как личный проект и площадку для
            экспериментов.
          </p>
        </div>
      </section>

      {/* Интересы */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Что мне интересно
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-3">
              🎣 Рыбалка
            </h3>

            <p className="text-gray-700">
              Рыбалка с берега на море, горные реки, форель,
              голавль, путешествия по интересным местам и
              постоянный поиск новых способов ловли.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-3">
              💻 Технологии
            </h3>

            <p className="text-gray-700">
              Oracle, SQL, проектирование баз данных,
              веб-разработка и создание собственных проектов.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-3">
              📚 Книги
            </h3>

            <p className="text-gray-700">
              Люблю книги по психологии, саморазвитию,
              мышлению, а также хорошие художественные
              произведения.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-3">
              🌊 Путешествия
            </h3>

            <p className="text-gray-700">
              Черноморское побережье, Кавказ и новые места,
              где можно совместить отдых, природу и рыбалку.
            </p>
          </div>
        </div>
      </section>

      {/* Зачем сайт */}
      <section className="bg-white rounded-2xl shadow p-8 mb-20">
        <h2 className="text-3xl font-bold mb-6">
          Зачем я создала этот сайт
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Этот сайт начинался как эксперимент по изучению
          Next.js и современной веб-разработки.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Со временем он стал превращаться в личное
          пространство, где я собираю мои статьи,
          заметки о рыбалке, технологиях, книгах и
          собственных проектах.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Возможно, однажды этот проект вырастет в
          полноценную социальную платформу для людей
          со схожими интересами.
        </p>
      </section>

      {/* Контакты */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Контакты
        </h2>

        <div className="flex justify-center gap-8 text-lg">
          <a
            href="https://github.com/Nadyafishing"
            target="_blank"
            className="hover:text-blue-600"
          >
            GitHub
          </a>

          <a
            href="#"
            className="hover:text-blue-600"
          >
            YouTube
          </a>

          <a
            href="mailto:your@email.com"
            className="hover:text-blue-600"
          >
            Email
          </a>
        </div>
      </section>

      <div className="text-center mt-12">
        <a href="/" className="mr-6 hover:underline">
          ← На главную
        </a>

        <a href="#">↑ Наверх</a>
      </div>

    </main>
  );
}