import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';
import Project from './Project';
import ReactPaginate from 'react-paginate';

const ProjectsContainerStyled = styled.section`
  grid-area: projects;
  display: grid;
  grid-template-columns: 100%;
  gap: 1rem;
  width: 100%;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    flex-wrap: nowrap;
    gap: 3rem;
  }
`;

const PaginateStyled = styled.div`
  grid-area: pagination;
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
  }
  .pagination > .active > a {
    background-color: var(--hoverFilter);
    border-color: var(--hoverFilter);
    color: var(--textButton);
  }
  .pagination > li > a {
    border: 1px solid var(--hoverFilter);
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: var(--hoverFilter);
    border-color: var(--hoverFilter);
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: var(--hoverFilter);
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
    &:hover {
      background-color: var(--hoverFilter);
      color: var(--textButton);
    }
  }
`;
const ProjectsContainer = () => {
  const [pageCount, setPageCount] = useState(3);
  const [data, setdata] = useState([]);
  const [perPage, setPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const { filterProjects } = useContext(AppContext);

  useEffect(() => {
    setOffset(0);
    receivedData();
  }, [filterProjects]);

  const receivedData = () => {
    const data = filterProjects;
    const slice = data.slice(offset, offset + perPage);
    setdata(slice);
    setPageCount(Math.ceil(data.length / perPage));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffset(offset);
    receivedData();
  };
  return (
    <>
      <ProjectsContainerStyled>
        {data.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </ProjectsContainerStyled>
      <PaginateStyled>
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </PaginateStyled>
    </>
  );
};

export default ProjectsContainer;
