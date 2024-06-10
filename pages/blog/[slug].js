import Image from "next/image";
import BlogSidebar from "../../components/blogs/BlogSidebar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import CallToActionOne from "../../components/call-to-actions/CallToActionOne";
import Layout from "../../components/layouts/Layout";
import {
  getPostBySlug,
  getPosts,
  getPostsByTag,
} from "../../helpers/contentAPI";
import { formatDate } from "../../helpers/formatDate";
import Skeleton from "react-loading-skeleton";
import MarkdownSyntaxHighlighter from "../../components/blogs/MarkdownSyntaxHighlighter";

const BlogDetails = ({ post, posts }) => {
  return (
    <Layout
      title={post ? post.title : "Loading..."}
      ogImage={post ? post.feature_image : undefined}
    >
      <Breadcrumb
        title={post ? post.title : "Loading..."}
        root="Blog"
        rootUrl="/blog"
        current={post ? post.title : "Loading..."}
      />

      <main className="page-wrapper">
        <div className="axil-blog-area ax-section-gap bg-color-white">
          <div className="container">
            <div className="row row--40">
              <div className="col-lg-8 col-md-12 col-12">
                <div className="axil-blog-details-area">
                  <div className="wrapper">
                    <div className="blog-top">
                      {!post && <Skeleton count={5} />}
                      {post && (
                        <div>
                          <h3 className="title">{post.title}</h3>
                          <div className="author">
                            {post.primary_author.profile_image && (
                              <div className="author-thumb">
                                <Image
                                  width={50}
                                  height={50}
                                  src={post.primary_author.profile_image}
                                  alt={post.primary_author.name}
                                />
                              </div>
                            )}
                            <div className="info">
                              <h6>{post.primary_author.name}</h6>
                              <ul className="blog-meta">
                                <li>{formatDate(post.published_at)}</li>
                                <li>
                                  {post.reading_time}{" "}
                                  {post.reading_time > 1 ? "mins" : "min"}
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="thumbnail mb--60 mb_sm--20 mb_md--20">
                            <Image
                              width={850}
                              height={450}
                              className="w-100"
                              src={post.feature_image}
                              alt={post.title}
                            />
                          </div>

                          <div className="content mb--40 mb_sm--20 mb_md--20">
                            <MarkdownSyntaxHighlighter content={post.html} />
                            {/*      <div
                              dangerouslySetInnerHTML={{
                                __html: marked(post.html),
                              }}
                            /> */}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="blog-share d-flex flex-wrap align-items-center mb--80 mb_sm--30 mb">
                      <span className="text">Share on:</span>
                      <ul className="social-share d-flex">
                        <li>
                          <a
                            href="https://www.facebook.com/wordnox"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-f" />
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/wordnox"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter" />
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/wordnoxinc"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-linkedin-in" />
                            Linkedin
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12 mt_md--40 mt_sm--40">
                {post && posts && (
                  <BlogSidebar
                    tags={post.tags}
                    recentPost={posts.slice(0, 3)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default BlogDetails;

export const dynamicParams = true;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export async function getStaticProps({ params: { slug } }) {
  const post = await getPostBySlug(slug);
  const posts = await getPostsByTag(post?.primary_tag?.slug, 3);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      posts,
    },
  };
}
