import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-post";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

//posts from getStaticProps
export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>PCK Blog</title>
        <meta
          name="description"
          content="I post about my demo project that im working on"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps(params) {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}
