import moment from "moment";

export const navbarBrand = "Quick News";
export const header = (category) => `Top ${category} Headlines`;
export const noFound = "No Results Found";
export const searching = "Searching...";

export const navs = [
  { nav: "Home", page: "/" },
  { nav: "Business", page: "/categories/business" },
  { nav: "Sports", page: "/categories/sports" },
  { nav: "Science", page: "/categories/science" },
  { nav: "Health", page: "/categories/health" },
  { nav: "Entertainment", page: "/categories/entertainment" },
  { nav: "Technology", page: "/categories/technology" },
];

export const router = [
  { path: "/", key: "general", category: "", country: "us" },
  {
    path: "/categories/business",
    key: "business",
    category: "business",
    country: "us",
  },
  {
    path: "/categories/sports",
    key: "sports",
    category: "sports",
    country: "us",
  },
  {
    path: "/categories/science",
    key: "science",
    category: "science",
    country: "us",
  },
  {
    path: "/categories/health",
    key: "health",
    category: "health",
    country: "us",
  },
  {
    path: "/categories/entertainment",
    key: "entertainment",
    category: "entertainment",
    country: "us",
  },
  {
    path: "/categories/technology",
    key: "technology",
    category: "technology",
    country: "us",
  },
];

export const summary = "Channel and PublishedAt";
export const newsChannel = (channel) => `Channel: ${channel}`;
export const lastUpdate = (published) =>
  `Published at: ${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")}`;
