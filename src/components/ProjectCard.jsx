export const ProjectCard = ({ img, repo, title, description }) => {
  return (
    <article className="project-card">
      <div className="project-media">
        <img src={`${img}`} alt={title} loading="lazy" />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a className="project-link" href={repo} target="_blank" rel="noreferrer">
        Repo
      </a>
    </article>
  );
};
