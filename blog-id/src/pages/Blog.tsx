import { useBlog } from "../hooks";
import { Appbar } from "../components/Appbar";
import { BlogComp } from "../components/BlogComp";
import { useParams } from "react-router-dom";
import { SkeletonLoader } from "../components/Spinner";

function Blog() {
  const { id } = useParams();
  const { blog, loading } = useBlog({
    id: id || "",
  });
  if (loading || !blog) {
    return <div>
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </div>;
  }
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <Appbar />
      </div>
      <div style={{ backgroundColor: "#fff5ee", marginLeft: "80px", marginRight:"80px" }}>
        <BlogComp blog={blog} />
      </div>
    </>
  );
}

export default Blog;
