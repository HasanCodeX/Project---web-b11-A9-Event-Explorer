
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Context/firebase/firebase.config";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <div className="bg-base-200 rounded-xl shadow-lg p-8 text-center space-y-4">
        <img
          src={user.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-4 border-primary"
        />
        <h2 className="text-2xl font-bold">{user.displayName || "Anonymous"}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
