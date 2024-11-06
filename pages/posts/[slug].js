import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";

export default function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" conten={props.post.excerpt}></meta>
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths(params) {
  const postFilenames = getPostsFiles();

  const slug = postFilenames.map((filename) => filename.replace(/\.md$/, "")); // removes the file extension;

  return {
    paths: slug.map((slug) => ({ params: { slug: slug } })), //Generate an array of path object
    fallback: false,
  };
}
