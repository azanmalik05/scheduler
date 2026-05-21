import { signInWithGoogle, signOut, useAuthState } from "../utilities/firebase";

type BannerProps = {
  title: string;
};

function Banner({ title }: BannerProps) {
  const [user] = useAuthState();

  return (
    <div className="banner">
      <h1 className="banner-title">{title}</h1>

      <div className="auth-area">
        <span>{user ? `Signed in as ${user.displayName}` : "Signed out"}</span>

        {user ? (
          <button className="auth-button" onClick={signOut}>
            Sign Out
          </button>
        ) : (
          <button className="auth-button" onClick={signInWithGoogle}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

export default Banner;