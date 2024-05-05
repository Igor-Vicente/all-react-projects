import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}
interface Content {
  type: "paragraph" | "link";
  content: string;
}
export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}
interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  const { name, avatarUrl, role } = post.author;
  const [comments, setComments] = useState([
    "Muito bom Devon, parabéns!! 👏👏",
  ]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormatted = format(
    post.publishedAt,
    "dd 'de' LLLL 'às'  HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments((current) => [...current, newCommentText]);
    setNewCommentText("");
  }
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }
  function handleDeleteComment(comment: string) {
    setComments((current) => current.filter((item) => item !== comment));
  }
  function handleInvalidComment(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório.");
  }
  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph")
            return <p key={line.content}>{line.content}</p>;
          else if (line.type === "link")
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleNewCommentChange}
          name="comment"
          value={newCommentText}
          placeholder="deixe seu comentário"
          onInvalid={handleInvalidComment}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  );
};
