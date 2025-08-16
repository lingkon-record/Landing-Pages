import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //  fetch('https://jsonplaceholder.typicode.com/posts')
    fetch("/advice.json")  // set in public folder
      .then((response) => response.json())
      .then((data) => {
        // console.log("Fetched Posts:", data[0]); // turn off must
        console.log('সবগুলো ডেটা :', data); // turn off must
        setPosts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <ul>

       
         {/* তুমি যদি সবগুলো ডেটা দেখাতে চাও - তাহলে কেবল map ব্যবহার করলেই হবে। 
         otherwise -   slice(0, 10) ব্যবহার করলেই হবে   */}
        

        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}

        {/* slice মূলত প্রথম ১০টি আইটেম দেখানোর জন্য ব্যবহৃত হয় */}
        {/* {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))} */}

      </ul>
    </div>
  );
}

export default App;

// ✅ ব্যাখ্যা: setPosts(data);

// এটি একটি React Hook ফাংশন (useState থেকে পাওয়া setPosts)।
// data প্যারামিটারটি, যেটা ফেচ করা JSON ডেটা, সেটি posts state-এ সেট করে।
// অর্থাৎ, posts এর মান আপডেট হয় এবং সেই অনুযায়ী UI রেন্ডার হয়।

// 📌 সংক্ষেপে:
// setPosts(data) → ফেচ করা ডেটা → posts নামক state এ রাখা হয় → UI তে দেখানো হয়।
