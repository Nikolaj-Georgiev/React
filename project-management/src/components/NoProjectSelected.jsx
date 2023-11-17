import noProjectsImg from '../assets/no-projects.png';

export default function NoProjectSelected() {
  return (
    <div>
      <img
        src={noProjectsImg}
        alt='Image of an empty note book and a pen'
      />
      <h2>No project selected</h2>
      <p>Select a project or get started with a new one</p>
      <p>
        <button>Create new project</button>
      </p>
    </div>
  );
}
