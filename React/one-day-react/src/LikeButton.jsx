import { useState } from "react";

const Likebutton = () => {
    // TODO1: create a piece of state called 'likes' starting at 0
    const [likes, setLikes] = useState(0);

    let buttonText;

    if (likes > 0) {
        buttonText = "Liked";
    } else {
        buttonText = "Like";
    }

    return (
        <div className="like-button">
            <h2>Like button</h2>
            {/* TODO2: Display the current number of likes */}

            <p>Likes: {likes}</p>
            <button onClick={() => setLikes(likes + 1)}>

                {/* TODO3: Display "like" or "liked" depending on whether likes > 0 */}
                
                {buttonText}
            </button>
        </div>
    );
};

export default Likebutton;
