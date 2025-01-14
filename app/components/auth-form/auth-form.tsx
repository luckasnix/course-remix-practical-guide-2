import { Link, useSearchParams } from "react-router";
import { FaLock, FaUserPlus } from "react-icons/fa";

export const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "signin";

  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {mode === "signin" ? <FaLock /> : <FaUserPlus />}
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{mode === "signin" ? "Sign In" : "Sign Up"}</button>
        <Link to={{
          pathname: "/auth",
          search: mode === "signin" ? "?mode=signup" : "?mode=signin",
        }}>
          {mode === "signin" ? "Create an account" : "Sign in with existing user"}
        </Link>
      </div>
    </form>
  );
};
