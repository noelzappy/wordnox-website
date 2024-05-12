import Link from "next/link";
import Image from "next/image";
import { Constants } from "../../helpers/constants";
import { formatDate } from "../../helpers/formatDate";

const BlogSidebar = ({ tags, recentPost }) => {
  return (
    <div className="axil-blog-sidebar">
      <div
        className="axil-single-widget share mt--80 mt_sm--30 mt_md--30 mt_lg--40"
        style={{
          backgroundColor: Constants.color.yellow,
        }}
      >
        <div className="inner">
          <div className="blog-share d-flex flex-wrap">
            <span>Follow Us:</span>
            <ul className="social-list d-flex">
              <li>
                <a href="https://facebook.com/wordnox">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://x.com/wordnox">
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/wordnox">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/wordnoxinc">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="axil-single-widget small-post-wrapper mt--80 mt_sm--30 mt_md--30 mt_lg--40">
        <h4 className="title mb--30">Recent post</h4>
        <div className="inner">
          {recentPost?.map((post, index) => (
            <div className="small-post" key={`recent-post-${index}`}>
              <div className="thumbnail flex-shrink-0">
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    width={100}
                    height={80}
                    src={post.feature_image}
                    alt={post.title}
                  />
                </Link>
              </div>
              <div className="content">
                <h6>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h6>
                <ul className="blog-meta">
                  <li>{formatDate(post.published_at)}</li>
                  <li>
                    {post.reading_time} {post.reading_time > 1 ? "mins" : "min"}{" "}
                    read
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="axil-single-widget tags mt--80 mt_sm--30 mt_md--30 mt_lg--40">
        <h4 className="title mb--30">Tags</h4>
        <div className="inner">
          <ul className="tags-list">
            {tags?.map((tag, tagIndex) => (
              <li key={`tag-${tagIndex}`}>
                <Link href={`/blog/tag/${tag.slug}`}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
