import Link from "next/link";

interface Props {
  title: string;
  description: string;
  href: string;
}

export default function DiabetesCard({ title, description, href }: Props) {
  return (
    <Link
      href={href}
      className="
        group
        bg-white
        rounded-xl
        shadow-md
        p-6
        hover:shadow-xl
        hover:-translate-y-1
        transition
        duration-200
        flex flex-col justify-between
      "
    >
      <div>
        <h3 className="text-xl font-bold text-dark-blue mb-2">{title}</h3>

        <p className="text-secondary-gray text-base">{description}</p>
      </div>

      <span className="mt-4 text-base font-semibold text-blue-600 group-hover:underline">
        Saiba mais →
      </span>
    </Link>
  );
}
