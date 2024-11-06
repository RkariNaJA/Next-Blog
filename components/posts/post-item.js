import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

export default function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  //Formate a date object
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long", // "January"
    year: "numeric",
  });
  //Construct full-imagePath
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      {/* To make <a></a> possible in <Link /> */}
      <Link href={linkPath} legacyBehavior>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
