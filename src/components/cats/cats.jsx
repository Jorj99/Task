import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { fetchCats, fetchNewCats } from "../../asyncActions/cats";
import { selectCats } from "../../features/catsSlice";
import "./cats.css";

const Cats = () => {
  const cats = useSelector(selectCats);
  const [searchParams] = useSearchParams();
  const _category = searchParams.get("category") || 5;

  const [page, setPage] = useState(2)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats(_category));
  }, [dispatch, _category]);

  const handleClick = () => {
    dispatch(fetchNewCats(_category, page))
    setPage(page + 1);
  }

  return (
    <div className="catsWrapper">
      <div className="catsImgWrapper">
        {cats.map(({ url }) =>
          <img key={uuidv4()} className="catImg" src={url} alt="cat" />
        )}
        {cats.length % 3 !== 0 ? <div className="_amplyBlock catImg"></div> : <></>}
      </div>
      <div className="addCatsBtnWrapper">
        <button className="addCatsBtn" type="button" onClick={handleClick}>+</button>
      </div>
    </div>
  );
};

export default Cats;
