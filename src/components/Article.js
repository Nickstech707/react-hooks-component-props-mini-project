import React from "react";

function generateEmojiList(minutes) {
  const interval = minutes < 30 ? 5 : 10;
  const emoji = minutes < 30 ? "☕️" : "🍱";
  let emojiList = "";
  for (let i = 0; i < minutes / interval; i++) {
    emojiList += emoji;
  }
  return emojiList;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emojiDuration = generateEmojiList(minutes);
  return (
    <article>
      <h3>{title}</h3>

      <small>
        {date} {emojiDuration} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
