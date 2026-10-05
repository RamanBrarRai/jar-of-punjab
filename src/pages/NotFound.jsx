import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="text-7xl">🫙</div>
      <h1 className="font-heading text-4xl font-bold text-deepred mt-4">Page not found</h1>
      <p className="mt-3 text-earthy/70">Looks like this jar rolled off the shelf.</p>
      <Link to="/" className="inline-block mt-6"><Button>Back Home</Button></Link>
    </div>
  );
}
