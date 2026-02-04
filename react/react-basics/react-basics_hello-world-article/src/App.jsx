import "./styles.css";

export function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World Article</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
