import GhostContentAPI from "@tryghost/content-api";

export const API_URL = "https://blog.wordnox.com";

const api = new GhostContentAPI({
  url: API_URL,
  key: "cc968451eca1a19da4ebe86943",
  version: "v5.82",
});

// fetch post that do not have the tag portfolio
export const getPosts = async () => {
  return await api.posts.browse({
    filter: "tag:-portfolio",
    include: "tags,authors",
    limit: 10,
  });
};

export const getPostBySlug = async (slug) => {
  return api.posts.read({
    slug,
    include: "authors,tags",
  });
};

// fetch post that have the tag portfolio

export const getPortfolioPosts = async () => {
  return await api.posts.browse({
    limit: "all",
    filter: "tag:portfolio",
  });
};

export const getTags = async () => {
  return await api.tags.browse();
};

export const getPostsByTag = async (tag) => {
  return await api.posts.browse({
    limit: "all",
    filter: `tag:${tag}`,
    include: "tags,authors",
  });
};

export const getTag = async (tag) => {
  return await api.tags.read({
    slug: tag,
  });
};
