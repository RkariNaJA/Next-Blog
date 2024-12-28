import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/pck_logo.png"
          alt="An image showing PCK"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm PCK</h1>
      <p>
        PCK Blog is a sleek, easy-to-use demo site showcasing the PCK project,
        an open-source project on GitHub. With a clean, responsive design and
        user-friendly interface. I'd love for other developers to explore,
        contribute, or suggest improvements. Check out the PCK project on GitHub
        , where you'll find detailed documentation to help you get started!
      </p>
    </section>
  );
}
