import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/content";
import { fadeUp, heroStagger } from "@/lib/animations";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border">
        <div className="max-w-content mx-auto px-8 h-14 flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[0.82rem] text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back
          </Link>
        </div>
      </header>

      <motion.article
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="max-w-[680px] mx-auto px-8 pt-32 pb-24"
      >
        <motion.div variants={fadeUp}>
          <p className="font-mono text-[0.72rem] tracking-[0.08em] uppercase text-tertiary mb-4">
            {post.date}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] leading-[1.15] tracking-[-0.02em] text-foreground mb-10">
            {post.title}
          </h1>
        </motion.div>

        {post.sections.map((section, i) => (
          <motion.div key={i} variants={fadeUp} className="mb-8">
            {section.heading && (
              <h2 className="text-lg font-semibold text-foreground mt-12 mb-4">
                {section.heading}
              </h2>
            )}
            {section.content.split("\n\n").map((para, j) => (
              <p
                key={j}
                className="text-[0.94rem] text-muted-foreground leading-[1.75] mb-4"
              >
                {para}
              </p>
            ))}
            {section.bullets && (
              <div className="flex flex-col gap-4 my-4">
                {section.bullets.map((bullet, k) => (
                  <p
                    key={k}
                    className="text-[0.94rem] text-muted-foreground leading-[1.75] pl-4 border-l-2 border-border"
                  >
                    <strong className="text-foreground">{bullet.label}</strong>{" "}
                    {bullet.text}
                  </p>
                ))}
              </div>
            )}
            {section.afterBullets && (
              <p className="text-[0.94rem] text-muted-foreground leading-[1.75] mt-4">
                {section.afterBullets}
              </p>
            )}
          </motion.div>
        ))}

        <motion.hr variants={fadeUp} className="border-border my-12" />

        <motion.p
          variants={fadeUp}
          className="text-[0.84rem] text-tertiary leading-relaxed italic"
        >
          Hadi Hijazi is an AI engineer based in Paris, building vertical AI
          systems for finance and hospitality. You can find him on{" "}
          <a
            href="https://github.com/DoubleH10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-foreground transition-colors"
          >
            GitHub
          </a>{" "}
          or{" "}
          <a
            href="https://linkedin.com/in/hadi-hijazi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          .
        </motion.p>
      </motion.article>
    </div>
  );
};

export default BlogPost;
