import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeader from "@/components/SectionHeader";
import { products } from "@/data/content";
import { ArrowRight } from "lucide-react";

const ProductsSection = () => {
  return (
    <section id="products" className="py-28 px-8">
      <div className="max-w-content mx-auto">
        <SectionHeader
          label="Technical Products"
          title="Products I'm building"
          subtitle="Vertical AI systems for finance and hospitality, built through BLOQ AI. Real code, deployed systems, active pilots."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              className="bg-card border border-border rounded-lg p-7 hover:border-[#D4D2CC] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col"
            >
              <div
                className={`font-mono text-[0.68rem] tracking-[0.06em] uppercase inline-flex items-center gap-1.5 mb-3 ${
                  product.status === "live" ? "text-success" : "text-accent"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    product.status === "live" ? "bg-success" : "bg-accent"
                  }`}
                />
                {product.status === "live"
                  ? "Deployed · Pilot stage"
                  : "In Development"}
              </div>

              <h3 className="font-display text-xl font-normal mb-2">
                {product.name}
              </h3>

              <p className="text-[0.88rem] text-muted-foreground leading-relaxed mb-4 flex-1">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.7rem] bg-muted text-muted-foreground px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {product.link && (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.8rem] font-medium text-accent inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                >
                  Visit site
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
