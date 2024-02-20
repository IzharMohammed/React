import { useState } from "react";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";
const dummyTweet = [
  {
    id: 0,
    content: "We have  a new twitter called as threads ",
    likes: "3",
    createdAt: new Date(),
  },
  {
    id: 1,
    content: "What should we pay ? ",
    likes: "9",
    createdAt: new Date(),
  },
  {
    id: 2,
    content: "Whats up with tech community ",
    likes: "300",
    createdAt: new Date(),
  },
];

function Twitter() {
  const [tweets, setTweets] = useState(dummyTweet);

  const handleAddTweet = (text) => {
    let nextId = tweets.length > 0 ? tweets[tweets.length - 1].id + 1 : 0;
    setTweets([
      ...tweets,
      {
        content: text,
        likes: Math.floor(Math.random() * 10),
        id: nextId,
        createdAt: new Date(),
      },
    ]);
  };

  const onEdit = (tweet) => {
    setTweets(
      tweets.map((currentTweet) => {
        if (currentTweet.id === tweet.id) {
          return tweet;
        } else {
          return currentTweet;
        }
      })
    );
  };

  return (
    <>
      <AddTweet onAddTweet={handleAddTweet} />
      <TweetList tweets={tweets} onEdit={onEdit} />
    </>
  );
}
export default Twitter;
