import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../Services/Store/UserReducer";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { UserCard } from "../../Components/UserCard/UserCard";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import s from "./User.module.css";
import { Link } from "react-router-dom";

export const User = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userReducer.user);
  const comments = useSelector((state) => state.userReducer.comments);
  const loading = useSelector((state) => state.userReducer.loading);
  const userError = useSelector((state) => state.userReducer.userError);
  const postError = useSelector((state) => state.userReducer.postsError);

  useEffect(() => {
    dispatch(fetchUser(Number(params.id)));
  }, [dispatch, params]);

  return (
    <>
      <Container>
        <Button
          className={s.user_backBtn}
          onClick={() => navigate(-1)}
          variant="secondary"
        >
          Назад
        </Button>{" "}
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <h2 className={s.user_subtitle}>
          Информация о пользователе <Badge bg="secondary">Info</Badge>:
        </h2>
        <div className={s.user_user}>
          {userError && (
            <p className={s.error}>Упс...{userError.message}</p>
          )}
          {user.map((userItem) => (
            <Card key={userItem.name} className={s.user_userCard}>
              <Card.Body>
                <Card.Title>Nickname: {userItem.username}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  name: {userItem.name}
                </Card.Subtitle>
                <Card.Text>
                  website:{" "}
                  <Link to={userItem.website}>{userItem.website} </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <h3 className={s.user_subtitle}>Список постов пользователя:</h3>
        {postError && <p className={s.error}>Упс...{postError.message}</p>}
        <div className={s.user_posts}>
          {comments &&
            comments.map((post) => (
              <UserCard
                key={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
                postId={post.id}
              />
            ))}
        </div>
      </Container>
    </>
  );
}