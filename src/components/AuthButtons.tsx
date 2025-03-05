
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AuthButtons() {
  return (
    <div className="flex gap-4">
      <Button asChild variant="outline">
        <Link to="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link to="/register">Register</Link>
      </Button>
    </div>
  );
}
