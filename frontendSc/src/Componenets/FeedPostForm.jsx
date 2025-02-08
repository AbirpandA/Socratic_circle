import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedPostForm = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [userId, setUserId] = useState(null);
  const [category, setCategory] = useState(""); // State for category
  const navigate = useNavigate();

  // List of categories (Ensured consistency)
  const categories = ["General", "Art", "Literature", "Science", "Music"];

  // Get user ID when component loads
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      // Set a default user ID for now
      setUserId("67a5fc73c9750b6a5d0e2c78");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text || !category) {
      toast.warn("Text and category are required to post!", { position: "top-right", autoClose: 3000 });
      return;
    }

    const formData = { user: userId, text, image, videoUrl, category };

    try {
      const response = await fetch("http://localhost:3000/api/posts/feed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Posted successfully! 🎉", { position: "top-right", autoClose: 3000 });
        navigate("/"); // Redirect to the forum page after posting
      } else {
        const data = await response.json();
        toast.error(data.error || "Failed to post");
      }
    } catch (error) {
      console.error("Error posting feed:", error);
      toast.error("Something went wrong! Try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Create a Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-3 border rounded-lg"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        
        <select
          className="w-full p-3 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          className="w-full p-3 border rounded-lg"
          placeholder="Video URL (Optional)"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />

        <input
          type="file"
          className="w-full p-3 border rounded-lg"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          type="submit"
          className="w-full bg-stone-800 text-white py-3 rounded-lg hover:bg-stone-900"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default FeedPostForm;
