import Link from "next/link";

const Homepage = () => {
  return (
    <div className=" p-5 ">
      Please go for or Click below
      <Link
        href="/admin"
        className="flex items-start justify-start gap-4 py-2 text-red-500 text-2xl"
      >
        localhost:3000/admain
      </Link>
    </div>
  );
};

export default Homepage;
