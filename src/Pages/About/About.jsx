import s from "./About.module.css";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { Header } from "../../Components/Header/Header";

export const About = () => {
  return (
    <>
      <Header />

      <Card className="text-center">
        <Card.Header>Обо мне</Card.Header>
        <Alert variant="light">
          <Alert.Heading>Привет! Меня зовут Роман!</Alert.Heading>
          <p>Я - начинающий frontend-разработчик</p>
          <hr />
          <p className="mb-0">
            Это мое выполненное тестовое задание!
          </p>
        </Alert>
        <Card.Body>
          <Card.Subtitle className={`mb-2 text-muted ${s.about_title}`}>
            Я закончил обучение в SkyPro на веб-разработчика и теперь я:
          </Card.Subtitle>
          <br></br>
          <Card.Text>
            ‣ Обладаю знаниями процессов и инструментов web-разработки.
          </Card.Text>
          <Card.Text>
            ‣ Имею навыки работы с HTML и CSS и практические навыки верстки.
            Вёрстка по БЭМ + Верстка по макетам из Figma.
          </Card.Text>
          <Card.Text>
            ‣ Знаю основы Javascript/Typescript, есть практический опыт
            программирования на Javascript.
          </Card.Text>
          <Card.Text>
            ‣ Понимаю принципы работы клиент-серверных приложений, есть опыт
            работы с REST API.
          </Card.Text>
          <Card.Text>
            ‣ Есть опыт разработки SPA-приложений на React/Redux, деплой
            приложений на Netlify.
          </Card.Text>
          <Card.Text>‣ Имею навыки написания unit-тестов.</Card.Text>
          <Card.Text>
            ‣ Имею базовые знания бэкенд-разработки - Node.js, Express.js,
            MongoDB, Google firebase.
          </Card.Text>
          <Card.Text>
            ‣ Обладаю широким кругозором в области IT и желанием развиваться в
            данной сфере.
          </Card.Text>
          <br></br>
          <Card.Subtitle className={`mb-2 text-muted ${s.about_title}`}>
            За время обучения мной реализованы проекты:
          </Card.Subtitle>
          <br></br>
          <Card.Text>
            ✼ Проект "Музыкальное приложение" - приложение для прослушивания
            музыки
          </Card.Text>
          <Card.Text>
            ✼ Проект "Карточная игра Memory" - карточная игра Memory, смысл
            которой - запомнить и найти все пары изображений или карт
          </Card.Text>
          <br></br>
          <Card.Subtitle className={`mb-2 text-muted ${s.about_title}`}>
            Немного обо мне:
          </Card.Subtitle>
          <br></br>
          <Card.Text>
            ⮩ - имею аналитический склад ума, опыт работы с большими объемами
            данных;
          </Card.Text>
          <Card.Text>
            ⮩ ответственно и внимательно подхожу к своей работе,
          </Card.Text>
          <Card.Text>⮩ люблю решать сложные задачи</Card.Text>
          <Card.Text>
            ⮩ всегда ищу возможности к обучению и развитию, выхожу за рамки
            данных материалов
          </Card.Text>
          <Card.Text>⮩ ориентирован на развитие в области IT</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}