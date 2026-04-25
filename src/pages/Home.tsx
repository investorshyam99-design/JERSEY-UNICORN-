import { Hero } from '../components/Hero';
import { CategoriesGrid } from '../components/CategoriesGrid';
import { ProductGrid } from '../components/ProductGrid';
import { InfoSection } from '../components/InfoSection';
import { Reviews } from '../components/Reviews';
import { Gallery } from '../components/Gallery';

export const Home = () => {
  return (
    <>
      <Hero />
      <ProductGrid title="🔥 Trending Jerseys" filterTag="Trending" />
      <CategoriesGrid />
      <ProductGrid title="🏆 Best Sellers" filterTag="Best Seller" />
      <InfoSection />
      <Reviews />
      <Gallery />
    </>
  );
};
