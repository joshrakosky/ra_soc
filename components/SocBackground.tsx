// Looping SOC backdrop. A light navy wash keeps white headings readable over the footage.

export default function SocBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/SOC-Background-1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#00263a]/45" />
    </div>
  )
}
