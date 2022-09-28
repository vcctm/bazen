export const Typography = ({
  text = "The quick fox jumps over the lazy frog - Black",
}: {
  text?: string;
}) => {
  return (
    <div data-testid="typography-id">
      <h1>{text}</h1>
    </div>
  );
};

export default Typography;
