import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import NavigationPage from "../pages/NavigationPage"
import SkillsPage from "../pages/SkillsPage"
import ProjectsPage from "../pages/ProjectsPage"
import ProjectDetails from "../components/ProjectDetails"
import { projectCoursesPlatform, projectDashboard, projectShoesEcommerce, projectSpringBootcamp, projectTaskManager } from "./ProjectsService"



const RouterService = () => {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/navigate" element={<NavigationPage/>}></Route>
        <Route exact path="/navigate/skills" element={<SkillsPage/>}></Route>
        <Route exact path="/navigate/projects" element={<ProjectsPage/>}></Route>
        <Route exact path="/navigate/projects/details/1" element={<ProjectDetails project={projectDashboard()}/>}></Route>
        <Route exact path="/navigate/projects/details/2" element={<ProjectDetails project={projectCoursesPlatform()}/>}></Route>
        <Route exact path="/navigate/projects/details/3" element={<ProjectDetails project={projectShoesEcommerce()}/>}></Route>
        <Route exact path="/navigate/projects/details/4" element={<ProjectDetails project={projectTaskManager()}/>}></Route>
        <Route exact path="/navigate/projects/details/5" element={<ProjectDetails project={projectSpringBootcamp()}/>}></Route>
    </Routes>
  )
}

export default RouterService