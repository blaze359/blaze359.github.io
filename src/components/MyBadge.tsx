import GetIcon from "./GetIcon";
import { Badge } from "react-bootstrap";

type BadgeProps = {
  readonly text: string;
  readonly bg?: string;
  readonly className?: string;
};

export default function MyBadge({ text, bg = "primary", className = "" }: BadgeProps) {
  return (
    <Badge
      bg={bg}
      className={`d-flex gap-1 flex-row align-items-center w-fit ${className}`}
    >
      <GetIcon name={text} />
      <div>{text}</div>
    </Badge>
  );
}