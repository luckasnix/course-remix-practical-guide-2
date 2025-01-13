import { Link } from "react-router";
import { FaLock } from "react-icons/fa";

export const AuthForm = () => (
  <form method="post" className="form" id="auth-form">
    <div className="icon-img">
      <FaLock />
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
      <button>Login</button>
      <Link to="/auth">Log in with existing user</Link>
    </div>
  </form>
);
