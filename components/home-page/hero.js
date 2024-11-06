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
        an open-source tool for building blogs. With a clean, responsive design
        and features like comments and social sharing, it’s perfect for both
        beginners and experienced developers. Check out the PCK project on
        GitHub to learn more or contribute.
      </p>
    </section>
  );
}
