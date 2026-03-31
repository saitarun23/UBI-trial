import { useState, useEffect } from "react";
import assets from "../../assets/images";
import "../../styles/productdetail.css";

const PRODUCT_DETAILS = {
  biscuits: {
    title: "Biscuits",
    images: [
      assets.biscuit1,
      assets.biscuit2,
      assets.biscuit3,
      assets.biscuit4,
      assets.biscuit5,
      assets.biscuit6,
    ],

    overview: {
      materials: `Tailor-made laminate combinations ranging from single-layer to five-layer structures,
       designed to meet varying shelf-life requirements. Options include PET, MET PET, BOPP, Paper,
       Aluminium Foil, and PA, selected as per product needs.`,

      features: [
        "Excellent moisture, oxygen, and gas-barrier properties.",
        "Customizable laminate structures based on specific shelf-life requirements",
        "High tear-resistance and superior durability.",
      ],

      benefits: [
        "High-quality Rotogravure and Flexo printing for premium visual appeal.",
        "Custom printed and unprinted rolls suitable for both HFFS and VFFS applications.",
        "Available in Matt, Gloss, Metallic, Clear, and Window finish combinations.",
      ],
    },
  },

  snackschips: {
    title: "Snacks & Chips",
    images: [
      assets.chip1,
      assets.chip2,
      assets.chip3,
      assets.chip4,
      assets.chip5,
      assets.chip6,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "High-quality Rotogravure and Flexo printing for premium visual appeal.",
        "Custom printed and unprinted rolls suitable for both HFFS and VFFS applications.",
        "Available in Matt, Gloss, Metallic, Clear, and Window finish combinations.",
      ],
    },
  },

  dairyproducts: {
    title: "Dairy Products",
    images: [
      assets.dairy1,
      assets.dairy2,
      assets.dairy3,
      assets.dairy4,
      assets.dairy5,
      assets.dairy6,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  oilproducts: {
    title: "Oil Products",
    images: [
      assets.oil1,
      assets.oil2,
      assets.oil3,
      assets.oil4,
      assets.oil5,
      assets.oil6,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  GeneralGroceries: {
    title: "General Groceries",
    images: [
      assets.powdered1,
      assets.powdered2,
      assets.powdered3,
      assets.powdered4,
      assets.powdered5,
      assets.powdered6,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  teacoffee: {
    title: "Tea & Coffee",
    images: [
      assets.coffee1,
      assets.coffee2,
      assets.coffee3,
      assets.coffee5,
      assets.coffee6,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  vaccumpackaging: {
    title: "Vaccum Packaging",
    images: [
      assets.vaccum1,
      assets.vaccum2,
      assets.vaccum3,
      assets.vaccum4,
      assets.vaccum5,
      assets.vaccum6,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  beverages: {
    title: "Beverages",
    images: [
      assets.beverages1,
      assets.beverages2,
      assets.beverages3,
      assets.beverages4,
      assets.beverages5,
      assets.beverages6,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  seafood: {
    title: "Seafood",
    images: [
      assets.seafood1,
      assets.seafood2,
      assets.seafood3,
      assets.seafood4,
      assets.seafood5,
      assets.seafood6,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

   liddingfilms: {
    title: "Lidding Films",
    images: [
      assets.lid1,
      assets.lid2,
      assets.lid3,
      assets.lid4,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  detergent: {
    title: "Detergents",
    images: [
      assets.detergent1,
      assets.detergent2,
      assets.detergent3,
      assets.detergent4,
      assets.detergent5,
      assets.detergent6,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  chemicals: {
    title: "Chemicals",
    images: [
      assets.chemical1,
      assets.chemical2,
      assets.chemical3,
      assets.chemical4,
      assets.chemical5,
      assets.chemical6,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  agriculture: {
    title: "Agriculture",
    images: [
      assets.agri1,
      assets.agri2,
      assets.agri3,
      assets.agri4,
      assets.agri5,
      // assets.agri6,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  healthcare: {
    title: "Healthcare",
    images: [
      assets.healthcare1,
      assets.healthcare2,
      assets.healthcare3,
      assets.healthcare4,
      assets.healthcare5,
  
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  bodycare: {
    title: "Body Care",
    images: [
      assets.bodycare1,
      assets.bodycare2,
      assets.bodycare3,
      assets.bodycare4,
      assets.bodycare5,

    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  shrinkfilms: {
    title: "Shrink Films",
    images: [
      assets.shrink1,
      assets.shrink2,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },

  ecommerce: {
    title: "E-commerce Packaging",
    images: [
      assets.ecommerce1,
      assets.ecommerce2,
      assets.ecommerce3,
    ],

    overview: {
      materials: `Tailor-made combinations from single layer to five layers 
      as per shelf life requirement. Combinations like PET, MET PET, BOPP, 
      Paper, Al Foil, PA as per requirement.`,

      features: [
        "Excellent moisture, oxygen & gas barrier properties.",
        "Tailor-made laminates depending on shelf-life needs.",
        "High tear-resistance and durability.",
      ],

      benefits: [
        "Advanced printing with Rotogravure & Flexo for standout packaging.",
        "Customised printed & unprinted rolls for HFFS & VFFS.",
        "Available in Matt, Gloss, Metallic, Clear, and Window combinations.",
      ],
    },
  },
  // ADD OTHER PRODUCTS HERE...
};

export default function ProductDetail() {
  const [itemId, setItemId] = useState("");

  // Extract item from query parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split("?")[1]);
    setItemId(params.get("item") || "");
  }, []);

  // Scroll to top when product changes
  useEffect(() => {
    if (itemId) {
      window.scrollTo(0, 0);
    }
  }, [itemId]);

  const data = PRODUCT_DETAILS[itemId];

  if (!itemId || !data) return <h1 style={{ color: "white" }}>Product not found</h1>;

  return (
    <main className="product-detail-page">
      <section className="detail-header">
        <h1>{data.title}</h1>
      </section>

      <section className="detail-images">
        {data.images.map((img, index) => (
          <div key={index} className="detail-img-box">
            <img src={img} alt={data.title} />
          </div>
        ))}
      </section>

      <section className="detail-content">

        {/* <div className="detail-left">
          <h2>Applications</h2>
          <ul>
            {data.applications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div> */}

        <div className="detail-right">
          <h2>Overview</h2>

          <h3>Material Combinations / Technical Details</h3>
          <p>{data.overview.materials}</p>

          <h3>Features</h3>
          <ul>
            {data.overview.features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Customer Benefits</h3>
          <ul>
            {data.overview.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </section>
    </main>
  );
}