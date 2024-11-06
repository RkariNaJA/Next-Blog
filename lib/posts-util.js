//For fetching post data and for extracting metadata from markdown files
import fs from "fs";
import path from "path";
import matter from "gray-matter";

//process.cwd() = Over all project folder
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles(params) {
  return fs.readdirSync(postsDirectory); // Read all the contents synchronously way (In a blocking way)
}

// Reading a single file
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent); // matter return 2 property ; Data for metadata as a JavaScript objectand contet for the markdown text as a string

  // Content for a single post read from the markdown file
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

//Read all post in the posts folder
export function getAllPosts(params) {
  const postFile = getPostsFiles();

  //Get all the data from post by calling getPostData
  const allPosts = postFile.map((postFile) => {
    return getPostData(postFile);
  });

  //Sort new post in front of the older post
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.data ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts(params) {
  const allPosts = getAllPosts();

  const FeaturedPosts = allPosts.filter((post) => post.isFeatured);

  return FeaturedPosts;
}
