import { API } from "../scripts/globals";

const UnfollowButton = ({ id, target }) => {
  async function unfollow() {
    try {
      const res = await fetch(API + "/users/" + id + "/unfollow/" + target, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        console.log(id, "unfollowed", target);
        location.reload();
      }
    } catch {
      throw new Error("Error unfollowing account!");
    }
  }
  return (
    <button className="bg-neutral-700 p-2 text-white hover:brightness-105 transition-all duration-200 hover:cursor-pointer rounded-lg max-w-[200px]" onClick={unfollow}>
      Unfollow
    </button>
  );
};

export default UnfollowButton;
