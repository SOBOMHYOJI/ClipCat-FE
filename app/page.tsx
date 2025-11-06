// app/page.tsx
import BlinkingMascot from "@/entities/mascot/ui/BlinkingMascot";

export default function Page() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-14">
      <div className="grid gap-10 md:grid-cols-[1fr_420px] md:items-start">
        {/* LEFT: 텍스트 */}
        <div>
          <h1 className="text-[56px] leading-[1.05] font-extrabold tracking-[-0.02em]">
            언어의 벽을 넘어,
            <br />
            학교와 쉽게 소통하세요
          </h1>
          <p className="mt-6 text-[18px] leading-7 text-muted">
            clipcat은 다문화 학부모님을 위한
            <br />
            &lsquo;쉬운 한국어&rsquo; 변환기이자 1:1 학습 서비스입니다.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="rounded-full bg-[#4ade80] px-6 py-3 text-[16px] font-semibold text-white shadow-sm hover:brightness-95">
              가정통신문 업로드하기
            </button>

            <div className="relative">
              <button className="rounded-full bg-[#111827] px-6 py-3 text-[16px] font-semibold text-white hover:brightness-110">
                모르는 단어 물어보기
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: 마스코트 */}
        <div className="relative md:h-[520px]">
          <BlinkingMascot
            width={340}
            className="
              pointer-events-none
              md:absolute md:right-[-18px] md:top-[-12px]   /* 👉 위치 미세 조정 */
              md:justify-self-end
            "
          />
        </div>
      </div>
    </section>
  );
}
