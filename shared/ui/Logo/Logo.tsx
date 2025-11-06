import Image from "next/image";

type Props = { width?: number; height?: number };

export default function Logo({ width = 160, height = 34 }: Props) {
  return (
    <Image
      src="/clipcat_logo.png"
      alt="ClipCat Logo"
      width={width}
      height={height}
      priority
    />
  );
}
