export default function AppShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#03060d] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,115,255,0.16),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(46,102,255,0.12),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.0),rgba(2,6,23,0.72))]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
