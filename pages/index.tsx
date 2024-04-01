import { useState } from "react";
import Layout from "@/components/Layout/layout";

export default function Home() {
  const [lang, setLang] = useState("eng");

  return (
    <Layout>
      <div className="presentation">
        <div className="tab">
          {lang !== "eng" && (
            <button className="tablinks" onClick={() => setLang("eng")}>
              eng
            </button>
          )}
          {lang === "eng" && (
            <button className="tablinks active" onClick={() => setLang("eng")}>
              eng
            </button>
          )}
          {lang !== "ru" && (
            <button className="tablinks" onClick={() => setLang("ru")}>
              ru
            </button>
          )}
          {lang === "ru" && (
            <button className="tablinks active" onClick={() => setLang("ru")}>
              ru
            </button>
          )}
          {lang !== "esp" && (
            <button className="tablinks" onClick={() => setLang("esp")}>
              esp
            </button>
          )}
          {lang === "esp" && (
            <button className="tablinks  active" onClick={() => setLang("esp")}>
              esp
            </button>
          )}
        </div>

        {lang === "eng" && (
          <div className="tabcontent">
            <h2>My name is Alexey</h2>
            <p>
              👋 Hello! I'm Alexey, a passionate frontend developer eager to
              dive into the world of web development and create engaging user
              experiences. While I may not have professional experience yet,
              I've spent countless hours honing my skills and exploring the
              latest trends and technologies in frontend development. My journey
              into frontend development began with a fascination for crafting
              beautiful and functional websites. Through self-study, online
              courses, and hands-on projects, I've gained proficiency in HTML,
              CSS, and JavaScript, the building blocks of the web. I enjoy
              bringing designs to life with clean and responsive code, paying
              attention to every detail to ensure a seamless user experience
              across devices. In addition to the basics, I'm familiar with
              popular frontend frameworks and libraries like React.js and
              Vue.js, and I'm excited to deepen my knowledge in these areas. I'm
              also passionate about web accessibility and strive to create
              inclusive experiences that can be enjoyed by all users. While I
              may be new to the professional world of frontend development, I'm
              enthusiastic, adaptable, and eager to learn. I'm seeking
              opportunities to collaborate with experienced developers,
              contribute to meaningful projects, and continue growing as a
              frontend developer.
            </p>
          </div>
        )}

        {lang === "ru" && (
          <div className="tabcontent">
            <h2>Привет, меня зовут Алексей</h2>
            <p>
              👋 Привет! Я Алексей, страстный frontend-разработчик, который с
              нетерпением ждет возможности погрузиться в мир веб-разработки и
              создавать захватывающие пользовательские интерфейсы. Хотя у меня
              пока нет профессионального опыта, я провел бесчисленные часы,
              оттачивая свои навыки и изучая последние тенденции и технологии в
              области frontend-разработки. Мой путь в frontend-разработку
              начался с увлечения созданием красивых и функциональных
              веб-сайтов. Благодаря самостоятельному изучению, онлайн-курсам и
              практическим проектам я приобрел навыки в HTML, CSS и JavaScript -
              основа веба. Мне нравится оживлять дизайны с помощью чистого и
              адаптивного кода, обращая внимание на каждую деталь, чтобы
              обеспечить безупречный пользовательский опыт на всех устройствах.
              Помимо основ, я знаком с популярными фронтенд-фреймворками и
              библиотеками, такими как React.js и Vue.js, и с нетерпением жду
              возможности углубить свои знания в этих областях. Я также увлечен
              веб-доступностью и стремлюсь создавать включающие интерфейсы,
              которыми могут пользоваться все пользователи. Хотя я новичок в
              профессиональном мире frontend-разработки, я энергичен, адаптивен
              и с большим желанием учиться. Я ищу возможности сотрудничать с
              опытными разработчиками, вносить свой вклад в значимые проекты и
              продолжать развиваться как frontend-разработчик.
            </p>
          </div>
        )}

        {lang === "esp" && (
          <div className="tabcontent">
            <h2>Hola mi nombre es Alexey</h2>
            <p>
              👋 ¡Hola! Soy Alexey, un apasionado desarrollador frontend ansioso
              por sumergirse en el mundo del desarrollo web y crear experiencias
              de usuario atractivas. Aunque aún no tengo experiencia
              profesional, he pasado incontables horas perfeccionando mis
              habilidades y explorando las últimas tendencias y tecnologías en
              el desarrollo frontend. Mi viaje hacia el desarrollo frontend
              comenzó con una fascinación por crear sitios web hermosos y
              funcionales. A través del autoestudio, cursos en línea y proyectos
              prácticos, he adquirido competencia en HTML, CSS y JavaScript, los
              bloques de construcción de la web. Disfruto dando vida a los
              diseños con un código limpio y receptivo, prestando atención a
              cada detalle para garantizar una experiencia de usuario perfecta
              en todos los dispositivos. Además de los fundamentos, estoy
              familiarizado con los frameworks y bibliotecas frontend populares
              como React.js y Vue.js, y estoy emocionado de profundizar mis
              conocimientos en estas áreas. También me apasiona la accesibilidad
              web y me esfuerzo por crear experiencias inclusivas que puedan
              disfrutar todos los usuarios. Aunque soy nuevo en el mundo
              profesional del desarrollo frontend, soy entusiasta, adaptable y
              ansioso por aprender. Estoy buscando oportunidades para colaborar
              con desarrolladores experimentados, contribuir a proyectos
              significativos y seguir creciendo como desarrollador frontend.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
