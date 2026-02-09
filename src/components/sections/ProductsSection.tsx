import SectionHeader from "@/components/SectionHeader";
import ProductShowcase from "@/components/ProductShowcase";
import { products } from "@/data/content";

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 lg:py-40 px-6 bg-background dot-pattern">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Products Built"
          title="Shipped & Live"
          subtitle="Production systems serving real users and driving business outcomes"
        />

        <div className="space-y-20 lg:space-y-28">
          {products.map((product, index) => (
            <ProductShowcase key={product.name} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
