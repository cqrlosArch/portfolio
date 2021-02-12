import React, { useEffect, useState } from 'react';
import projectsJSON from '../projects.json';

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [projects, setProyects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const filterPath = (path) => {
    setFilterProjects(projects.filter((project) => project.path === path));
  };
  useEffect(() => {
    setProyects(projectsJSON);
    setFilterProjects(projectsJSON);
  }, []);

  const data = { filterProjects, filterPath };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
