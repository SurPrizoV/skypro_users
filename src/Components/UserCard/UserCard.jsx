import { fetchComments } from "../../Services/Store/CommentReducer";
import avatar from "../../Services/avatar.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import s from "./UserCard.module.css";

export const UserCard = (props) => {
  const [openComments, setOpenComments] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentReducer.comments);
  const commentsLoading = useSelector((state) => state.commentReducer.loading);
  const commentsError = useSelector((state) => state.commentReducer.error);
  const id = useSelector((state) => state.commentReducer.id);

  return (
    <Card key={props.id} className={s.postCard}>
      <Link to={/user/ + props.userId}>
        <Card.Img variant="top" src={avatar} />
      </Link>
      <Card.Body>
        <Card.Title className={s.postCard_title}>{props.title}</Card.Title>
        <Card.Text className={s.postCard_text}>{props.body}</Card.Text>
        <Button
          className={s.postCard_btn}
          variant="primary"
          value={props.id}
          onClick={() => {
            if (openComments) setOpenComments(false);
            else {
              dispatch(fetchComments(Number(props.postId)));
              setOpenComments((prev) => !prev);
            }
          }}
        >
          Загрузить комментарии
        </Button>
        {id === props.postId && commentsLoading && (
          <div>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {openComments &&
          (!commentsLoading || (id !== props.postId && commentsLoading)) &&
          comments[props.postId].map((comment) => (
            <ListGroup as="ul" key={comment.id}>
              <ListGroup.Item
                as="li"
                className={`d-flex justify-content-between align-items-center ${s.item}`}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{comment.email}</div>
                  {comment.body}
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}

        {commentsError && (
          <p className={s.error}>{commentsError.message}</p>
        )}
      </Card.Body>
    </Card>
  );
}