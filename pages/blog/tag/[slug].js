import Head from "next/head";
import BlogPost from "../../../components/blogs/BlogPost";
import BlogSidebar from "../../../components/blogs/BlogSidebar";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import CallToActionOne from "../../../components/call-to-actions/CallToActionOne";
import Layout from "../../../components/layouts/Layout";
import Skeleton from "react-loading-skeleton";
import {
  getPosts,
  getPostsByTag,
  getTag,
  getTags,
} from "../../../helpers/contentAPI";

const TagPost = ({ posts, tag, tags, allPosts }) => {
  return (
    <Layout>
      <Head>
        <title>Blog || keystroke Creative Agency Bootstrap5 Template</title>
      </Head>

      <Breadcrumb
        title={tag?.name || "Loading..."}
        current={tag?.name || "Loading..."}
      />

      <main className="page-wrappper">
        <div className="axil-blog-area ax-section-gap bg-color-white">
          <div className="container">
            <div className="row row--40">
              {!posts || !tag ? <Skeleton count={5} /> : null}

              {posts && (
                <div className="col-lg-8 col-md-12 col-12">
                  {posts.map((post, index) => (
                    <div
                      key={`blog-post-${index}`}
                      className={
                        index !== 0
                          ? "mt--80 mt_md--30 mt_sm--30 mt_lg--50"
                          : ""
                      }
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                    >
                      <BlogPost post={post} />
                    </div>
                  ))}
                </div>
              )}
              <div className="col-lg-4 col-md-12 col-12 mt_md--40 mt_sm--40">
                {tags && allPosts && (
                  <BlogSidebar tags={tags} recentPost={allPosts.slice(0, 3)} />
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

export default TagPost;

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getPostsByTag(slug);
  const tag = await getTag(slug);
  const allPosts = await getPosts();
  const tags = await getTags();

  return {
    props: {
      posts,
      tag,
      tags,
      allPosts,
    },
  };
}
