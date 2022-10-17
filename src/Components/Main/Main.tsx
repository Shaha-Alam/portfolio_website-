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

          <div className={toggleState === 2 ? 'skills__content grid filters__active' : 'skills__content grid'}>
            <div className="skills__area">
              <h3 className="skills__title">Frontend Developer</h3>

              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>


                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">CSS</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>


                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                </div>
                
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">React</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>


                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">Bootstrap</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>


                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">Git</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills__area">
              <h3 className="skills__title">Backend Developer</h3>

              <div className="skills__box">
                <div className="skills__group">

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">PHP</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">MySQL</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">Firebase</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">Python</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>


                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">Node Js</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>
                    <div>
                      <h3 className="skills__name">Express JS</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
