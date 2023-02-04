import Link from "next/link";

export default function BlogsDetails({ SinglePost }) {
  return (
    <div>
      <h1>{SinglePost.title}</h1>
      <p>{SinglePost.body}</p>
      <Link href="/" legacyBehavior>
        <a>Go to Home</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const SinglePost = await res.json();

  return {
    props: {
      SinglePost,
    },
  };
}
