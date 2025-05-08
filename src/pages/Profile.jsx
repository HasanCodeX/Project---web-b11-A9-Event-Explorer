import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Context/firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState(null);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name || user.displayName,
        photoURL: photoURL || user.photoURL,
      });

      toast.success("Profile updated successfully!");

     
      setName("");
      setPhotoURL("");
    } catch (err) {
      setError(err.message);
      toast.error("Failed to update profile!");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <Helmet>
        <title>Profile | Event Explorer</title>
      </Helmet>

      <div className="bg-base-200 rounded-xl shadow-lg p-8 text-center space-y-4">
        <img
          src={user?.photoURL || "https://i.ibb.co/5r5C1fJ/user.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-4 border-primary"
        />
        <h2 className="text-2xl font-bold">{user?.displayName || "Anonymous"}</h2>
        <p className="text-gray-600">{user.email}</p>

        <form onSubmit={handleSave} className="space-y-4 mt-6">
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="input input-bordered w-full mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter new name"
            />
          </div>

          <div>
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              id="photoURL"
              type="url"
              className="input input-bordered w-full mt-1"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter new photo URL"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

