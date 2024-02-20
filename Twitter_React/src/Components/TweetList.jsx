import { useState } from "react";
import "../Css/TweetList.css";
function TweetList({ tweets, onEdit }) {
  const [isEditting, setIsEditting] = useState(false);
  return (
    <>
      <ul className="list-outer">
        {tweets.map((tweets) => (
          <li className="list">
            <div>
              {isEditting ? (
                <input
                  type="text"
                  value={tweets.content}
                  onChange={(e) => {
                    onEdit({
                      id: tweets.id,
                      content: e.target.value,
                      likes: tweets.likes,
                      createdAt: tweets.createdAt,
                    });
                  }}
                />
              ) : (
                tweets.content
              )}
            </div>
            <div>
              <button onClick={() => setIsEditting(!isEditting)}>
                {isEditting ? "Save" : "Edit"}
              </button>

              <div>{tweets.likes} likes</div>
              <div> Created At : {String(tweets.createdAt)}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default TweetList;
