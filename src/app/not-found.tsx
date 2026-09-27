import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-bold text-lime-300">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h2>

      <p className="mt-2 text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-lime-300 px-6 py-3 font-semibold text-black hover:bg-lime-400"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
