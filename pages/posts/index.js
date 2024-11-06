import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

// const DUMMY_POSTS = [
//   {
//     title: "Getting-Started-With-NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a React framework for production",
//     date: "2024-10-31",
//     slug: "getting-started-with-nextjs",
//   },
//   {
//     title: "Getting-Started-With-NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a React framework for production",
//     date: "2024-10-31",
//     slug: "getting-started-with-nextjs2",
//   },
//   {
//     title: "Getting-Started-With-NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a React framework for production",
//     date: "2024-10-31",
//     slug: "getting-started-with-nextjs3",
//   },
//   {
//     title: "Getting-Started-With-NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a React framework for production",
//     date: "2024-10-31",
//     slug: "getting-started-with-nextjs4",
//   },
// ];

export function getStaticProps(params) {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of my demo Project on Github!"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}
