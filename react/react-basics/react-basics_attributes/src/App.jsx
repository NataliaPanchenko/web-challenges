import "./styles.css";

export default function App() {
  return Article();
}

export function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Title</h2>
      <label htmlFor="newInput"></label>
      <input type="text" id="newInput" />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/The_Beatles"
      >
        The Beatles
      </a>
    </article>
  );
}
