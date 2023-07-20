import BlogDescription from "@/components/blogDetails/BlogDescription";
import BlogDetailsBanner from "@/components/blogDetails/BlogDetailsBanner";
import RelatedPost from "@/components/blogDetails/RelatedPost";
import Subscribe from "@/components/share/Subscribe";
import { latestPostData } from "@/data/blog/latestPostData";
import { useRouter } from "next/router";

// const blogDetail = ({ singleBlog }) => {
const blogDetail = () => {
  // const { id } = useParams();
  // const { id } = useRouter();

  // const singleLatestPost = latestPostData?.find(
  //   (item) => item.id === parseInt(id)
  // );
  return (
    <div>
      <BlogDetailsBanner />
      <BlogDescription />
      <RelatedPost />
      <Subscribe />
    </div>
  );
};

export default blogDetail;

// export async function getServerSideProps({ params }) {
//   const data = latestPostData.find(({ id }) => id === params.blogId);
//   const singleBlog = data ? data : null;
//   console.log("My single data");
//   return {
//     props: {
//       singleBlog,
//     },
//   };
// }
