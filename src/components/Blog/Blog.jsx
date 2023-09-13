import PropTypes from "prop-types";

const Blog = ({ blog }) => {
    const {
        title,
        cover,
        author_img,
        author,
        reading_time,
        posted_date,
        hashtags,
    } = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className="author-container flex justify-between items-center py-3">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            {hashtags.map((hash, idx) => (
                <p className="inline-block mb-10" key={idx}>
                    #{hash}
                </p>
            ))}
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
};
export default Blog;
