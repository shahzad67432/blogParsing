import { Blog } from "../hooks";
import { Avatar } from "./Avatar";
import parse from 'html-react-parser';

export const BlogComp = ({ blog }: { blog?: Blog }) => {
    if (!blog) {
        return <div>Loading...</div>;
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", padding: "0 2rem", width: "90", paddingTop: "3rem", backgroundColor:'#ffa769'}}>
                <div style={{ gridColumn: "span 4", backgroundColor:"#ffa769" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontFamily:"sans-serif", fontWeight: "bold", fontSize: "1.5rem", marginTop: "1.25rem", marginBottom: "0.625rem", color: "#374151", paddingLeft:"20px"}}>{cleanTitle}</div>
                        <div style={{ fontWeight: "lighter", fontSize: "0.875rem", color: "#6B7280", paddingLeft:"20px" }}>17 Feb, 2024</div>
                    </div>
                </div>
                <div style={{ gridColumn: "span 2", display: "flex", justifyContent: "center", backgroundColor:"#fff5ee"}}>
                    <div style={{ fontWeight: "lighter", fontSize: "0.875rem", fontFamily: "serif", marginTop: "1.25rem", paddingTop: "1.25rem", paddingRight: "1.25rem", paddingBottom: "1.875rem", paddingLeft: "0.625rem", color: "#6B7280" }}>
                        <div style={{ display: "flex", alignItems: "center", marginTop: "0.625rem"}}>
                            <Avatar name={authorName || ""} size={34} fontWeight="thin" />
                            <span style={{ paddingLeft: "0.625rem", color: "#6B7280" }}>{blog.author.firstname || "Anonymous"}</span>
                        </div>
                        {/* <div style={{ fontWeight: "bold", color: "#374151", fontSize:"large" }}>Author</div> */}
                        <div style={{ fontSize: "0.875rem", fontWeight: "lighter", paddingTop: "1rem", color: "#6B7280" }}>{authorDescription}</div>
                    </div>
                </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", padding: "0 2rem", width: "88.4%", paddingTop: "0rem", paddingLeft:"52px", paddingRight:"52px", backgroundColor:"#fff5ee"}}>
                <div style={{ gridColumn: "span 6", backgroundColor:"#fff5ee", color:"rgb(55,65,81)"}}>
                    <div>{parsedContent}</div>
                </div>
            </div>
        </>
    );
};
