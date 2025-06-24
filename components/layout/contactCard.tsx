import Link from "next/link";

export default function ContactCard() {
  return (
    <div
      className="mt-24 py-20 px-8 h-full w-full rounded-xl text-white text-2xl font-bold flex flex-col items-center justify-center bg-[length:200%_200%] animate-gradient-x"
      style={{
        backgroundImage:
          "linear-gradient(125deg, #cbb9c3 0%, #b47599 40%, #eec37b 60%, #38bdf8 100%)",
        animation: "gradient-x 8s ease infinite",
        backgroundSize: "150% 150%",
        backgroundPosition: "0% 50%",
      }}
    >
      <h2 className="text-6xl font-bold text-neutral-950 text-center">
        Ready to Transform Your Operations?
      </h2>
      <button className="w-60 transform rounded-lg bg-black px-6 py-2 mt-16 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800">
        <Link href="/contact">Get A Quote</Link>
      </button>
    </div>
  );
}
