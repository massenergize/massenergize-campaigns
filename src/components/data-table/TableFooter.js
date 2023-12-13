import { Button, Row } from "react-bootstrap";
import React from "react";
import classes from "classnames";

export function TableFooter ({
                               fetchData, pageIndex, pagesCount, pageSize, gotoPage, setPageIndex,
                               canGotoPreviousPage, canGotoNextPage, previousPage, nextPage, setPageSize
                             }) {

  const ITEMS_PER_PAGE_LIST = [ 10, 20, 30, 40, 50 ];

  let paginationLinks = []
  if (pagesCount > 1 && pagesCount <= 5) {
    for (let p = 0; p < pagesCount; p++) {
      paginationLinks.push(
        <Button primary className={classes('round primary', { active : p === pageIndex })} key={`page_buttons_${p}`}
                onClick={() => gotoPage(p)}>
          {p + 1}
        </Button>
      )
    }
  }

  const onChangeCurrentPage = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    if (page > -1 && page < pagesCount) {
      gotoPage(page);
      setPageIndex(page)
    }
  };

  const onChangeInSelect = (event) => {
    fetchData(pageIndex, parseInt(event.target.value, 10))
    setPageSize(parseInt(event.target.value, 10));
  };

  return <Row className={'justify-content-between w-100 mx-0'} style={{ textAlign : 'center' }}>

    <div className={"col border-top-s border-top-md-0 pt-sm-3 pt-md-0"}>
      <div className={'row pagination-controls justify-content-s-center justify-content-md-end'}>
        <div className={'col-auto'}>
          <label htmlFor="{'page-size-select'}">
            Rows per page
          </label>
          <select
            className={'form-control'}
            id={'page-size-select'}
            value={pageSize}
            onChange={onChangeInSelect}>
            {'>'}
            {
              ITEMS_PER_PAGE_LIST.map((perPage, index) => (
                <option key={`per_page_${perPage}_${index}`} value={perPage}>
                  {perPage}
                </option>
              ))
            }
          </select>

        </div>
        <div className="col-sm-auto px-0 col-md-auto border-right _d-sm-none"/>
        <div className={' col-auto'}>
          {
            pagesCount > 1 ?
              <Row className={"justify-content-between"}>
                <div className={"col-auto pr-0 d-flex"}>
                  <p className={'mx-0 my-auto text-left'}>Page</p></div>
                <div className={"col-auto px-2"}>
                  <input
                    type='number'
                    min={1}
                    style={{ width: 70 }}
                    // max={pageOptions.length}
                    defaultValue={pageIndex + 1}
                    onChange={onChangeCurrentPage}
                  />
                </div>
                <div className={"col-auto pl-0 d-flex"}>
                  <p className={'mx-0 my-auto text-left'}>of <strong>{pagesCount}</strong></p>
                </div>
              </Row> :
              <p
                className={'m-0 text-left'}>Page <strong>{pagesCount > 0 ? pageIndex + 1 : 0}</strong> of <strong>{pagesCount}</strong>
              </p>
          }

        </div>

        <div className={'col-auto'}>
          {(pagesCount > 5) &&
            <Button color='' onClick={() => gotoPage(0)} disabled={!canGotoPreviousPage}>First</Button>}
          <Button color='' onClick={previousPage} disabled={!canGotoPreviousPage}>
            <span className={'text-primary'}>{'<'}</span> Prev
          </Button>
        </div>
        <div className={'col-auto'}>
          {paginationLinks}
        </div>
        <div className={'col-auto'}>
          <Button color='' onClick={nextPage} disabled={!canGotoNextPage}>Next <span
            className={'text-primary'}>{'>'}</span> </Button>
          {(pagesCount > 5) &&
            <Button color='' onClick={() => gotoPage(pagesCount - 1)}
                    disabled={!canGotoNextPage}>Last</Button>}
        </div>
      </div>
    </div>
  </Row>
}
