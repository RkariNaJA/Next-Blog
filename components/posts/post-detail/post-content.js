import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

// const DUMMY_POSTS = {
//   title: "Getting-Started-With-NextJS",
//   image: "getting-started-nextjs.png",
//   date: "2024-10-31",
//   slug: "getting-started-with-nextjs",
//   content: "# This is a first post", // Markdown
// };

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  //To make ReactMarkdown how elements should be rendered(Replace certain elements)
  const customRenderers = {
    //Set as a method
    //image is from MarkDown file
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${DUMMY_POSTS2.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },

    //P = paragraph
    p(paragraph) {
      const { node } = paragraph; //Rendered by react-markdown

      if (node.children[0].tagName === "img") {
        //Image we get from paragraph has a file name of SRC property
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>; // unchanged content
    },
    //Rendering code snippets
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
