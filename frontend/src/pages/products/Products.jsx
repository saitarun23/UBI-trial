import { useState, useMemo } from "react";
import assets from "../../assets/images";
import "../../styles/product.css";

const FOOD_CATEGORIES = [
  {
    id: "snackschips",
    title: "Snacks & Chips",
    image: assets.chip,
  },
  {
    id: "biscuits",
    title: "Biscuits",
    image: assets.biscuit,
  },
  {
    id: "dairyproducts",
    title: "Dairy Products",
    image: assets.dairys,
  },
  {
    id: "oilproducts",
    title: "Oil Products",
    image: assets.oils,
  },
  {
    id: "GeneralGroceries",
    title: "General Groceries",
    image: assets.powdereds,
  },
  {
    id: "teacoffee",
    title: "Tea & Coffee",
    image: assets.coffees,
  },
  {
    id: "vaccumpackaging",
    title: "Vaccum Packaging",
    image: assets.vaccums,
  },
  {
    id: "beverages",
    title: "Beverages",
    image: assets.beverage,
  },
  {
    id: "seafood",
    title: "Seafood",
    image: assets.seafoods,
  },
  {
    id: "liddingfilms",
    title: "Lidding Films",
    image: assets.lids,
  },
];

const NON_FOOD_CATEGORIES = [
  {
    id: "detergent",
    title: "Detergent",
    image: assets.detergent,
  },
  {
    id: "chemicals",
    title: "Chemicals",
    image: assets.chemical1,
  },
  {
    id: "agriculture",
    title: "Agriculture",
    image: assets.agricultures,
  },
  {
    id: "healthcare",
    title: "Health Care",
    image: assets.healthcares,
  },
  {
    id: "ecommerce",
    title: "E-commerce Packaging",
    image: assets.ecommerce2,
  },
  {
    id: "shrinkfilms",
    title: "Shrink Films",
    image: assets.shrinks,
  },
  {
    id: "bodycare",
    title: "Body Care",
    image: assets.bodycare2,
  },
];

// 👇 helper to get initial tab (remembers last choice)
const getInitialTab = () => {
  if (typeof window === "undefined") return "food";

  const saved = sessionStorage.getItem("productsActiveTab");
  if (saved === "food" || saved === "non-food") {
    return saved;
  }

  // optional: read from URL like #products?tab=non-food (if you ever use that)
  const hash = window.location.hash.startsWith("#")
    ? window.location.hash.slice(1)
    : window.location.hash;
  const [, queryString = ""] = hash.split("?");
  const params = new URLSearchParams(queryString);
  const tabFromUrl = params.get("tab");
  if (tabFromUrl === "food" || tabFromUrl === "non-food") {
    return tabFromUrl;
  }

  return "food";
};

export default function Products() {
  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [query, setQuery] = useState("");

  const categories = useMemo(
    () => (activeTab === "food" ? FOOD_CATEGORIES : NON_FOOD_CATEGORIES),
    [activeTab]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories.filter((item) =>
      item.title.toLowerCase().includes(q)
    );
  }, [categories, query]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("productsActiveTab", tab); // 👈 remember last tab
    }
  };

  const handleCardClick = (id) => {
    // also store current tab before leaving
    if (typeof window !== "undefined") {
      sessionStorage.setItem("productsActiveTab", activeTab);
    }

    // navigate to detail page with hash
    window.location.hash = `#product-detail?item=${id}`;
  };

  return (
    <main className="product-page" id="products">
      {/* HERO */}
      <header className="product-hero">
        <div className="product-hero-bg">
          <img src={assets.productHero} alt="Team at work" />
        </div>
        <div className="product-hero-overlay" />
        <div className="product-hero-content">
          <h1 className="product-hero-title">Products</h1>
        </div>
      </header>

      {/* BODY */}
      <section className="product-body">
        {/* Search bar */}
        {/* <form
          className="product-search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Type a keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form> */}

        {/* Tabs */}
        <div className="product-tabs">
          <button
            type="button"
            className={`product-tab ${
              activeTab === "food" ? "active" : ""
            }`}
            onClick={() => handleTabClick("food")}
          >
            FOOD
          </button>
          <button
            type="button"
            className={`product-tab ${
              activeTab === "non-food" ? "active" : ""
            }`}
            onClick={() => handleTabClick("non-food")}
          >
            NON FOOD
          </button>
        </div>

        {/* Grid */}
        <div className="product-grid">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="product-card"
              onClick={() => handleCardClick(item.id)}
            >
              <div className="product-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className="product-card-title">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}