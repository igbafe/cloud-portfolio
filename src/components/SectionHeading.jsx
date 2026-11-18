export default function SectionHeading({ number, label, title, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span>{number}</span><span className="eyebrow-divider">//</span>{label}</p>
      <div className="section-heading-main">
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  );
}
