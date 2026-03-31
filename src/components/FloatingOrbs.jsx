export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 animate-float-slower"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)' }}
      ></div>
      <div
        className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-15 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,255,0.35) 0%, transparent 70%)',
          animationDelay: '-5s',
        }}
      ></div>
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-15 animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(240,171,252,0.3) 0%, transparent 70%)',
          animationDelay: '-9s',
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full opacity-10 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,255,0.25) 0%, transparent 70%)',
          animationDelay: '-3s',
        }}
      ></div>
    </div>
  )
}
