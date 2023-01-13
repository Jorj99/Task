import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { fetchCategorys } from "../../asyncActions/categorys";
import { selectCurrentCategorys } from "../../features/categorySlice";
import Burger from "../../assets/images/burger.svg";
import "./sidebar.css";

const Sidebar = () => {
  const categorys = useSelector(selectCurrentCategorys);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const _category = searchParams.get("category") || 5;
  const [isOpenSidebarForSm, setIsOpenSidebarForSm] = useState(false)

  useEffect(() => {
    dispatch(fetchCategorys());
  }, [dispatch]);

  const isActiveTab = (id) => +_category === id;

  const handleClick = () => setIsOpenSidebarForSm((prev) => !prev);

  return (
    <>
      <div className="sidebarWrapper">
      <button className="burgerBtn" type="button" onClick={handleClick}>
        <img src={Burger} alt="burger image" />
      </button>
        <div className={`sidebar ${isOpenSidebarForSm ? 'openedSidebar' : 'clonedSidebar'}`}>
          <h4>Categories</h4>
          <div className="categorysItemWrapper">
            {categorys.map(({ id, name }) => (
              <Link
                className={isActiveTab(id) ? "activeItem" : ""}
                key={id}
                to={`?category=${id}`}
                onClick={() => isOpenSidebarForSm && setIsOpenSidebarForSm(!isOpenSidebarForSm)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        {isOpenSidebarForSm && <div className="sidebarSubstrate" onClick={handleClick}></div>}
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
