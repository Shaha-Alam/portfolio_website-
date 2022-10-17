import React, { useState } from 'react'
import { projectsData } from './Data';

export default function Main() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <main>
      <section className="filters container">
        <ul className="filters__content">
          <button className={toggleState === 1 ? 'filters__button filters__button-active' : 'filters__button'} onClick={() => toggleTab(1)}>
            Projects
          </button>
          <button className={toggleState === 2 ? 'filters__button filters__button-active' : 'filters__button'} onClick={() => toggleTab(2)}>
            SKills
          </button>
        </ul>

        <div className="filters__sections">
          <div className={toggleState === 1 ? 'projects__content grid filters__active' : 'projects__content grid'}>
            {projectsData.map(project => {
              return <article className="projects__card" key={project.id}>
                <img src={project.image} alt="project" className="projects__image" />

                <div className="projects__modal">
                  <div>
                    <span className="projects__subtitle">
                      {project.subtitle}
                    </span>
                    <h3 className="projects__title">{project.title}</h3>
                    <a href={project.url} className="projects__button button button__small">
                      <i className="ri-link"></i>
                    </a>
                  </div>
                </div>
              </article>
            })}
          </div>



        </div>
      </section>
    </main>
  )
}
