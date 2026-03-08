export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <main className="w-full max-w-3xl px-6 sm:px-12">
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            张三
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300">
            前端开发工程师 · 专注于现代 Web 应用与用户体验设计。
          </p>
          <p className="max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed">
            擅长使用 Next.js、React 和 Tailwind CSS 构建简洁高效的界面。
            始终关注细节与性能，希望通过代码创造流畅、愉悦的产品体验。
          </p>
          <div className="pt-4">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              联系我
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
