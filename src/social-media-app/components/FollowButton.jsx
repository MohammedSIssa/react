import { API } from "../scripts/globals";

const FollowButton = ({ id, target }) => {
  async function follow() {
    try {
      const res = await fetch(API + "/users/" + id + "/follow/" + target, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        console.log(id, "Now following", target);
        location.reload();
      }
    } catch {
      throw new Error("Error following account!");
    }
  }
  return (
    <button
      className="bg-blue-700 p-2 text-white hover:brightness-105 transition-all duration-200 hover:cursor-pointer rounded-lg max-w-[200px]"
      onClick={follow}
    >
      Follow
    </button>
  );
};

export default FollowButton;
