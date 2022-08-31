import React from "react";
import ErrorPng from "../../assets/error.png";
import loadingPng from "../../assets/Ripple-1s-200px.svg";
import refecthPng from "../../assets/Ellipsis-1s-200px.svg";
import ReactPaginate from "react-paginate";
import ListWrapper from "./styled";
type ListProp = {
  isLoading: boolean;
  isError: boolean;
  isRefetching: boolean;
  displayPeople: JSX.Element[];
  changePage: ({ selected }: { selected: number }) => void;
  pageCount: number;
};

function ListView({
  isLoading,
  isError,
  isRefetching,
  displayPeople,
  changePage,
  pageCount,
}: ListProp) {
  return (
    <ListWrapper>
      {isLoading ? (
        <div className="statehandle">
          <div className="handlepage">
            <img src={loadingPng} alt="loading" className="err_img" />
            <p>Loading...</p>
            <p>Please wait</p>
          </div>
        </div>
      ) : isRefetching ? (
        <div className="statehandle">
          <div className="handlepage">
            <img src={refecthPng} alt="Error" className="err_img" />
            <p>Please wait while it refetch...</p>
          </div>
        </div>
      ) : isError ? (
        <div className="statehandle">
          <div className="handlepage">
            <img src={ErrorPng} alt="Error" className="err_img" />
            <p>Please wait while it refetch...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="box_people">{displayPeople}</div>
          <div className="select-btn">
            <ReactPaginate
              previousLabel="<<<"
              nextLabel=">>>"
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName="paginationBttns"
              previousLinkClassName="previousBttn"
              nextLinkClassName="nextBttn"
              disabledClassName="paginationDisabled"
              activeClassName="paginationActive"
            />
          </div>
        </>
      )}
    </ListWrapper>
  );
}

export default ListView;