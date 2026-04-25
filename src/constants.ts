export const WHATSAPP_NUMBER = "918788965436";
export const SUPPORT_PHONE = "+91 87889 65436";
export const SUPPORT_EMAIL = "jerseyunicorn1@gmail.com";
export const INSTAGRAM_LINK = "https://www.instagram.com/jerseyunicorn_";
export const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/LXKFcDwxvX6Dfa58A5bopI";

export type Category = 'ALL' | 'FAN_KIT' | 'MASTER' | 'PLAYER' | 'SUBLIMATION' | 'EMBROIDERY' | 'SHORTS';

export const CATEGORY_LABELS: Record<Category, string> = {
  ALL: 'All Collection',
  FAN_KIT: 'Fan Version Full Kit',
  MASTER: 'Master Quality Jersey',
  PLAYER: 'Player Version Jersey',
  SUBLIMATION: 'Sublimation Jersey',
  EMBROIDERY: 'Premium Embroidery Jersey',
  SHORTS: 'Shorts'
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  imageUrl: string;
  images?: string[];
  tags?: string[];
};

export const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Madrid Home 23/24 Player Version",
    price: 1999,
    category: "PLAYER",
    tags: ["Best Seller", "Limited Stock"],
    imageUrl: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "p2",
    name: "Brazil Home 2002 Retro Master Edition",
    price: 1499,
    category: "MASTER",
    tags: ["Trending", "High Demand"],
    imageUrl: "https://plus.unsplash.com/premium_photo-1685208034033-6cfccfa04c6e?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://plus.unsplash.com/premium_photo-1685208034033-6cfccfa04c6e?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "p3",
    name: "Argentina Away 2022 Fan Kit",
    price: 1299,
    category: "FAN_KIT",
    tags: ["Best Seller"],
    imageUrl: "https://images.unsplash.com/photo-1614632537190-23e4146777db?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1614632537190-23e4146777db?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "p4",
    name: "Milan Home 06/07 Embroidery Edition",
    price: 1899,
    category: "EMBROIDERY",
    tags: ["Limited Stock"],
    imageUrl: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "p5",
    name: "Arsenal Away 23/24 Sublimation",
    price: 1199,
    category: "SUBLIMATION",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "p6",
    name: "France Home 2024 Shorts",
    price: 599,
    category: "SHORTS",
    tags: ["Trending"],
    imageUrl: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

export const formatPrice = (price: number) => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const getWhatsAppLink = (productName: string, size: string) => {
  const message = `Hi, I want to order:
Product: ${productName}
Size: ${size}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
