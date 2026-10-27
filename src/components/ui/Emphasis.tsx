type EmphasisProps = {
  text: string;
  className?: string;
};

// Renders `**highlighted**` segments of dictionary copy as <strong>.
export default function Emphasis({ text, className = "font-semibold text-ink" }: EmphasisProps) {
  return (
    <>
      {text.split("**").map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className={className}>
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
