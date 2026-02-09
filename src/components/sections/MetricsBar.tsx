import { metrics } from "@/data/content";
import { useCountUp } from "@/hooks/use-count-up";

const MetricItem = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const MetricsBar = () => {
  return (
    <section id="metrics" className="py-16 md:py-20 px-6 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {metrics.map((metric) => (
            <MetricItem key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
