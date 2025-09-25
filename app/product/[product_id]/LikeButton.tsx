"use client";

import { useEffect, useState } from "react";

const LikeButton = ({ product_id }: { product_id: number }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const getLikeCount = () => {
    const data = localStorage.getItem("likes");
    if (data) {
      return JSON.parse(data);
    } else return {};
  };

  useEffect(() => {
    const storedLikes = getLikeCount();
    if (storedLikes[product_id]) {
      setLikeCount(storedLikes[product_id].count);
      setIsLiked(storedLikes[product_id].likes);
    }
  }, [product_id]);

  const handleLike = () => {
    const storedLikes = getLikeCount();

    if (!storedLikes[product_id]) {
      storedLikes[product_id] = { count: 0, likes: false };
    }
    //liked
    if (storedLikes[product_id].likes) {
      const newCount =
        storedLikes[product_id].count > 0
          ? storedLikes[product_id].count - 1
          : 0;
      storedLikes[product_id].likes = false;
      setLikeCount(newCount);
      setIsLiked(false);
      storedLikes[product_id] = { count: newCount, likes: false };
    } else {
      const newCount = storedLikes[product_id].count + 1;
      storedLikes[product_id].likes = true;
      setLikeCount(newCount);
      setIsLiked(true);
      storedLikes[product_id] = { count: newCount, likes: true };
    }
    localStorage.setItem("likes", JSON.stringify(storedLikes));
  };

  return (
    <div>
      <button
        onClick={() => handleLike()}
        className={`bg-blue-500  text-white font-bold py-2 px-4 mr-3 rounded 
            ${isLiked ? "bg-red-500" : ""}`}
      >
        {isLiked ? "Liked" : "Like"}
      </button>
      <span>{likeCount} likes</span>
    </div>
  );
};
export default LikeButton;
