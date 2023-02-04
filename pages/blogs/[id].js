import Link from "next/link";
import styles from "../../styles/BlogsDetails.module.css";

export default function BlogsDetails({ SinglePost }) {
  return (
    <div>
      <h1>{SinglePost.title}</h1>
      <p>{SinglePost.body}</p>
      <br />
      <Link href="/" legacyBehavior>
        <a className={styles.button}>Go to Home</a>
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
