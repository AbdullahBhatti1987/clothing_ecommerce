import Navbar from "@/components/Navbar";
import SpecialOfferBanner from "@/components/SpecialOfferBanner";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { dummyOffer, dummyProducts } from "@/content/data";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <SpecialOfferBanner offer={dummyOffer} />
      <CategoryFilter />
      <ProductGrid products={dummyProducts} />
      <Footer />
    </>
  );
}
