import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Title</h2>
      <label htmlFor="newInput"></label>
      <input type="text" id="newInput" />
      <a
        className="article__link"
        href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
        target="blank"
      >
        Click me!
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
