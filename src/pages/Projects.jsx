import ProjectCardTemplate from "../components/Projects/ProjectsTemplate/ProjectCardTemplate"

const Projects = () => {
  return (
    <main>
      <h1 className="font-title text-4xl font-extrabold2 mt-5 text-slate-200">Projects</h1>
      <ProjectCardTemplate title={"Using Excel analyse(and Visualize) the stock price trends of Amazon"} link={"using-excel-analyse-amazon-stock-price"} date={"1st January, 2023"} tags={["MS Excel", "Data Analysis", "Data Visualization"]} standard={"BTech/BE/MBA Students"} />
      <ProjectCardTemplate title={"Write an essay on Global Pollution and its Significance."} link={"essay-global-pollution"} date={"31st January, 2023"} tags={["Writing", "English"]} standard={"Class 10th Students"} />
    </main>
  )
}

export default Projects;
