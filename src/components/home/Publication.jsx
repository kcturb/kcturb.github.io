import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import PublicationCard from "./PublicationCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
var publicationArray = [
      {
        name: "Enhanced heat flux and flow structures in turbulent Rayleigh-Bénard convection with rough boundaries",
        description: "Article",
        svn_url: "https://www.researchgate.net/publication/357147292_Enhanced_heat_flux_and_flow_structures_in_turbulent_Rayleigh-Benard_convection_with_rough_boundaries",
        stargazers_count: "Physical Review Fluids",
        cite_download: "https://www.researchgate.net/lite.publication.PublicationDownloadCitationModal.downloadCitation.html",
        /**update cite_data, cite_download, languages_url */
        cite_data:"@inproceedings{inproceedings,author = {Chand, Krishan and Kr, Arnab and De,},year = {2021},month = {12},pages = {},title = {Role of near-wall dynamics in roughness aided turbulent Rayleigh-Bénard convection}}",
        authors: ["Krishan Chand","Arnab Kr. De", "Pankaj K. Mishra"],
        languages_url: "https://www.researchgate.net/publication/357147292_Enhanced_heat_flux_and_flow_structures_in_turbulent_Rayleigh-Benard_convection_with_rough_boundaries",
        pushed_at: "December, 2021",
      },
      {
        name: "Significance of near-wall dynamics in enhancement of heat flux for roughness aided turbulent Rayleigh–Bénard convection",
        description: "Article",
        svn_url: "https://www.researchgate.net/publication/352241296_Significance_of_near-wall_dynamics_in_enhancement_of_heat_flux_for_roughness_aided_turbulent_Rayleigh-Benard_convection",
        stargazers_count: "Physical of Fluids",
        cite_download: "https://www.researchgate.net/lite.publication.PublicationDownloadCitationModal.downloadCitation.html",
        /**update cite_data, cite_download, languages_url */
        cite_data:"@inproceedings{inproceedings,author = {Chand, Krishan and Kr, Arnab and De,},year = {2021},month = {12},pages = {},title = {Role of near-wall dynamics in roughness aided turbulent Rayleigh-Bénard convection}}",
        authors: ["Krishan Chand", "Mukesh Sharma", "Arnab Kr. De"],
        languages_url: "https://www.researchgate.net/publication/357147292_Enhanced_heat_flux_and_flow_structures_in_turbulent_Rayleigh-Benard_convection_with_rough_boundaries",
        pushed_at: "June, 2021",
      },
      {
        name: "Effect of random roughness on heat flux in turbulent Rayleigh-Benard convection",
        description: "Conference Paper",
        svn_url: "https://www.researchgate.net/publication/354463037_Effect_of_random_roughness_on_heat_flux_in_turbulent_Rayleigh-Benard_convection",
        stargazers_count: "Fluid Mechanics and Fluid Power (FMFP)At: IIT Guwahati",
        cite_download: "https://www.researchgate.net/profile/Krishan-Chand-2/publication/354463037_Effect_of_random_roughness_on_heat_flux_in_turbulent_Rayleigh-Benard_convection/links/6139c921349f12090ff2364d/Effect-of-random-roughness-on-heat-flux-in-turbulent-Rayleigh-Benard-convection.pdf",
        /**update cite_data, cite_download, languages_url */
        cite_data:"@inproceedings{inproceedings,author = {Chand, Krishan and Kr, Arnab and De,},year = {2021},month = {12},pages = {},title = {Role of near-wall dynamics in roughness aided turbulent Rayleigh-Bénard convection}}",
        authors: ["Krishan Chand", "Mukesh Sharma", "Arnab Kr. De"],
        languages_url: "https://www.researchgate.net/publication/354463037_Effect_of_random_roughness_on_heat_flux_in_turbulent_Rayleigh-Benard_convection#read",
        pushed_at: "December, 2020",
      },
      {
        name: "Statistics of coherent structures in two-dimensional turbulent Rayleigh-Bénard convection",
        description: "Article",
        svn_url: "https://www.researchgate.net/publication/337500627_Statistics_of_coherent_structures_in_two-dimensional_turbulent_Rayleigh-Benard_convection",
        stargazers_count: "Physical of Fluids",
        cite_download: "https://www.researchgate.net/lite.publication.PublicationDownloadCitationModal.downloadCitation.html",
        /**update cite_data, cite_download, languages_url */
        cite_data:"@inproceedings{inproceedings,author = {Chand, Krishan and Kr, Arnab and De,},year = {2021},month = {12},pages = {},title = {Role of near-wall dynamics in roughness aided turbulent Rayleigh-Bénard convection}}",
        authors: ["Krishan Chand", "Mukesh Sharma", "Vishnu Venugopal", "Arnab Kr. De"],
        languages_url: "https://www.researchgate.net/publication/357147292_Enhanced_heat_flux_and_flow_structures_in_turbulent_Rayleigh-Benard_convection_with_rough_boundaries",
        pushed_at: "November, 2019",
      },
      {
        name: "Role of near-wall dynamics in roughness aided turbulent Rayleigh-Bénard convection",
        description: "Conference Paper",
        svn_url: "https://www.researchgate.net/publication/357577086_Role_of_near-wall_dynamics_in_roughness_aided_turbulent_Rayleigh-Benard_convection",
        stargazers_count: "Conference: Proceedings of the 26th National and 4th International ISHMT-ASTFE Heat and Mass Transfer ConferenceAt: IIT Madras",
        cite_download: "https://www.researchgate.net/lite.publication.PublicationDownloadCitationModal.downloadCitation.html",
        cite_data:"@inproceedings{inproceedings,author = {Chand, Krishan and Kr, Arnab and De,},year = {2021},month = {12},pages = {},title = {Role of near-wall dynamics in roughness aided turbulent Rayleigh-Bénard convection}}",
        authors: ["Krishan Chand","Arnab Kr. De"],
        languages_url: "https://www.researchgate.net/profile/Krishan-Chand-2/publication/357577086_Role_of_near-wall_dynamics_in_roughness_aided_turbulent_Rayleigh-Benard_convection/links/61d5379ab6b5667157c97802/Role-of-near-wall-dynamics-in-roughness-aided-turbulent-Rayleigh-Benard-convection.pdf",
        pushed_at: "December 2021",
      }
];
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Publication = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="publications" className="bg-light m-0" style={{position:"relative", paddingTop:"5rem"}}>
      <Container className="">
        <h2 className="display-4 pb-5 text-center">Publications</h2>
        <Row>
          {publicationArray.length
            ? publicationArray.map((project, index) => (
                <PublicationCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <PublicationCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Publication;