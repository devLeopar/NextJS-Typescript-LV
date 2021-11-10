import { IPost } from "../types"
import postStyles from "../styles/Post.module.scss"

type Props = {
    post: IPost
    deletePost: (id: number) => void
  }

const Post: React.FC<Props> = ({ post, deletePost }) => {
    return (
      <div className={postStyles.Card}>
        <div className={postStyles.Card_body}>
          <h1 className={postStyles.Card_body_title}>{post.title}</h1>
          <p className={postStyles.Card_body_text}>{post.body}</p>
        </div>
        <button className={postStyles.Card_button} onClick={() => deletePost(post.id)}>
          Delete
        </button>
      </div>
    )
  }
  export default Post