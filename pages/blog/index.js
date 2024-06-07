import { useState } from "react";
import BlogPost from "../../components/blogs/BlogPost";
import BlogSidebar from "../../components/blogs/BlogSidebar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import CallToActionOne from "../../components/call-to-actions/CallToActionOne";
import Layout from "../../components/layouts/Layout";
import Pagination from "../../components/pagination/Pagination";
import { getPosts, getTags } from "../../helpers/contentAPI";

const Blog = ({ posts, meta, tags }) => {
  const [page, setPage] = useState(meta.pagination.page || 1);
  const [totalPages, setTotalPages] = useState(meta.pagination.pages);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Layout title="Blog Posts">
      <Breadcrumb />

      <main className="page-wrappper">
        <div className="axil-blog-area ax-section-gap bg-color-white">
          <div className="container">
            <div className="row row--40">
              <div className="col-lg-8 col-md-12 col-12">
                {posts?.map((post, index) => (
                  <div
                    key={`blog-post-${index}`}
                    className={
                      index !== 0 ? "mt--80 mt_md--30 mt_sm--30 mt_lg--50" : ""
                    }
                    data-aos="aos-fade-in-up"
                    data-aos-duration="1000"
                  >
                    <BlogPost post={post} />
                  </div>
                ))}

                <Pagination
                  totalPages={totalPages}
                  pageNumber={page}
                  handleClick={handleClick}
                />
              </div>
              <div className="col-lg-4 col-md-12 col-12 mt_md--40 mt_sm--40">
                <BlogSidebar tags={tags} recentPost={posts.slice(0, 3)} />
              </div>
            </div>
          </div>
        </div>

        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  let posts = [];
  let tags = [];
  let meta = {
    pagination: {},
  };

  try {
    posts = await getPosts();
    tags = await getTags();

    meta = posts.meta;
  } catch (error) {
    //console.log(error);
  }

  return {
    props: {
      posts,
      meta,
      tags,
    },
  };
}
