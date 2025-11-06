import BlinkingMascot from "@/entities/mascot/ui/BlinkingMascot";

export default function MascotHero() {
  return (
    <section
      style={{
        minHeight: "60dvh",
        display: "grid",
        placeItems: "center",
        padding: 24,
      }}
    >
      <BlinkingMascot width={370} />
    </section>
  );
}
