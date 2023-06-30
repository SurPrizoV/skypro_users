import { Header } from "../../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Services/Store/PostReducer";
import Spinner from "react-bootstrap/Spinner";
import { Paginated } from "../../Components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { UserCard } from "../../Components/UserCard/UserCard";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import s from "./Main.module.css";

export const Main = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const all = useSelector((state) => state.postsReducer.posts);
  const loading = useSelector((state) => state.postsReducer.loading);

  const postsError = useSelector((state) => state.postsReducer.error);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = all.length > 1
    ? all.slice(firstPostIndex, lastPostIndex)
    : [];

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        <div className={s.main_posts}>
          {all &&
            !loading &&
            currentPosts.map((post) => (
              <Col key={post.id}>
                <UserCard
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  userId={post.userId}
                  postId={post.id}
                />
              </Col>
            ))}
        </div>
        <Paginated
          postsPerPage={postsPerPage}
          totalPostsCount={all.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        {postsError && <p className={s.error}>Упс...{postsError.message}</p>}
      </Container>
    </>
  );
}