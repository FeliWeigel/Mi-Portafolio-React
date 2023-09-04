import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import NavigationPage from "../pages/NavigationPage"
import SkillsPage from "../pages/SkillsPage"
import ProjectsPage from "../pages/ProjectsPage"


const RouterService = () => {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/navigate" element={<NavigationPage/>}></Route>
        <Route exact path="/navigate/skills" element={<SkillsPage/>}></Route>
        <Route exact path="/navigate/projects" element={<ProjectsPage/>}></Route>
    </Routes>
  )
}

export default RouterService