import GhostContentAPI from "@tryghost/content-api";

export const API_URL = "https://blog.wordnox.com";

const api = new GhostContentAPI({
  url: API_URL,
  key: "eb58cc06b4ccbf25a52d509aba",
  version: "v5.83",
});

// fetch post that do not have the tag portfolio
export const getPosts = async () => {
  return await api.posts.browse({
    include: "tags,authors",
    limit: 10,
  });
};

export const getPostBySlug = async (slug) => {
  return api.posts.read({
    slug,
    include: "authors,tags",
    filter: "tag:[-portfolio, -case-studies]",
  });
};

// fetch post that have the tag portfolio

export const getPortfolioPosts = async (limit) => {
  return await api.posts.browse({
    limit: limit || "all",
    filter: "tag:portfolio",
  });
};

export const getTags = async () => {
  return await api.tags.browse();
};

export const getPostsByTag = async (tag, limit) => {
  return await api.posts.browse({
    limit: limit || "all",
    filter: `tag:${tag}`,
    include: "tags,authors",
  });
};

export const getTag = async (tag) => {
  return await api.tags.read({
    slug: tag,
  });
};

export const getCaseStudies = async () => {
  return await api.posts.browse({
    limit: "all",
    filter: "tag:case-studies",
  });
};
