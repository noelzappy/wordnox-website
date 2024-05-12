import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { formatDate } from "../../helpers/formatDate";

const BlogPost = ({ post }) => {
  return (
    <div className="axil-blog-list">
      <div className="blog-top">
        <h3 className="title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <div className="author">
          <div className="author-thumb">
            {post.primary_author.profile_image && (
              <Image
                width={50}
                height={50}
                src={post.primary_author.profile_image}
                alt={post.primary_author.name}
              />
            )}
          </div>
          <div className="info">
            <h6>{post.primary_author.name}</h6>
            <ul className="blog-meta">
              <li>{formatDate(post.published_at)}</li>
              <li>
                {post.reading_time} {post.reading_time > 1 ? "mins" : "min"}{" "}
                read
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <Link href={`/blog/${post.slug}`}>
          <Image
            width={850}
            height={450}
            className="w-100"
            src={post.feature_image}
            alt={post.title}
            priority={true}
          />
        </Link>
      </div>
      <div className="content">
        <p>{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="axil-button btn-large btn-transparent"
        >
          <span className="button-text">Read More</span>
          <span className="button-icon" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
