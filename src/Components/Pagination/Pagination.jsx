import Pagination from "react-bootstrap/Pagination";
import _ from "lodash";
import s from "./Pagination.module.css";

export const Paginated = ({ postsPerPage, totalPostsCount, currentPage, setCurrentPage }) => {
  const pageCount = Math.ceil(totalPostsCount / postsPerPage);
  let pages = _.range(1, pageCount + 1);

  return (
    <div className={s.pagination}>
      <Pagination className={s.pagination_list}>
        {totalPostsCount &&
          pages.map((pageNumber) => (
            <Pagination.Item
              onClick={() => setCurrentPage(pageNumber)}
              key={pageNumber}
              active={pageNumber === currentPage}
            >
              {pageNumber}
            </Pagination.Item>
          ))}
      </Pagination>
    </div>
  );
}