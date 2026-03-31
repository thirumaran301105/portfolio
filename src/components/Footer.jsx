export default function Footer() {
  return (
    <footer className="relative z-10 py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-2xl grad-full tracking-widest">THIRUMARAN B.</span>
        <p className="font-mono text-xs text-slate-600">Crafted with passion · Robotics & AI · Chennai, India · 2025</p>
        <div className="flex gap-1">
          <div className="wave-bar h-4 bg-cyan/50"></div>
          <div className="wave-bar h-6 bg-violet/50"></div>
          <div className="wave-bar h-3 bg-magenta/50"></div>
          <div className="wave-bar h-7 bg-cyan/50"></div>
          <div className="wave-bar h-4 bg-violet/50"></div>
        </div>
      </div>
    </footer>
  )
}
