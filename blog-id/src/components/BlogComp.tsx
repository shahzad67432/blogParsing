import { Blog } from "../hooks";
import { Avatar } from "./Avatar";
import parse from 'html-react-parser';
import { SkeletonLoader } from "./Spinner";
import '../BlogComp.css'; // Import the CSS file

export const BlogComp = ({ blog }: { blog?: Blog }) => {
    if (!blog) {
        return (
            <div>
                <SkeletonLoader/>
            </div>
        );
    }

    const blogTitle = blog.title.toUpperCase();
    const cleanTitle = blogTitle.replace(/<[^>]*>/g, '');

    const authorName = blog.author.firstname.toUpperCase();
    const authorDescription = "Author is a qualified blog writer and very proficient with skills that user represents";

    const parsedContent = parse(blog.content, {
        replace: (domNode) => {
            if (domNode.type === 'tag' && domNode.name === 'img') {
                return (
                    <img
                        src={domNode.attribs.src}
                        alt={domNode.attribs.alt || ""}
                        style={{ maxWidth: "80%", height: "auto" }}
                    />
                );
            }
        }
    });

    return (
        <>
            <div className="blog-comp-container">
            <div className="blog-details">
                <div className="blog-title">{cleanTitle}</div>
                <div className="blog-date">17 Feb, 2024</div>
            </div>
            <div className="author-info">
                <div className="author-details">
                    <Avatar name={authorName || ""} size={34} fontWeight="thin" />
                    <span className="author-name">{blog.author.firstname || "Anonymous"}</span>
                </div>
                <div className="author-description">{authorDescription}</div>
            </div>
            <div className="blog-content-container">
                <div className="blog-content">{parsedContent}</div>
            </div>
        </div>
        </>
    );
};
