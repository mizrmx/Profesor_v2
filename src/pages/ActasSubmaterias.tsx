import { FunctionComponent } from "react";
import styles from "./ActasSubmaterias.module.css";

const ActasSubmaterias: FunctionComponent = () => {
  return (
    <div className={styles.actasSubmaterias}>
      <div className={styles.background} />
      <div className={styles.materia}>
        <div className={styles.bg} />
        <img
          className={styles.materiaChild}
          alt=""
          src="/rectangle-459@2x.png"
        />
      </div>
      <div className={styles.bgParent}>
        <div className={styles.bg1} />
        <div className={styles.consulta}>
          <div className={styles.boton}>
            <div className={styles.botonChild} />
            <div className={styles.generarPdf}>Generar PDF</div>
          </div>
          <div className={styles.formatoReporte}>
            <div className={styles.formatoReporte1}>Formato Reporte</div>
            <div className={styles.input}>
              <div className={styles.inputChild} />
              <div className={styles.actaSubmateria}>Acta Submateria</div>
              <img
                className={styles.materialSymbolskeyboardArroIcon}
                alt=""
                src="/materialsymbolskeyboardarrowdownrounded.svg"
              />
            </div>
          </div>
          <div className={styles.materia1}>
            <div className={styles.formatoReporte1}>Materia</div>
            <div className={styles.input1}>
              <div className={styles.inputItem} />
              <div className={styles.actaSubmateria}>BMAT5A: Matemáticas</div>
              <img
                className={styles.materialSymbolskeyboardArroIcon1}
                alt=""
                src="/materialsymbolskeyboardarrowdownrounded.svg"
              />
            </div>
          </div>
          <div className={styles.planDeEstudios}>
            <div className={styles.formatoReporte1}>Plan de Estudios</div>
            <div className={styles.input2}>
              <div className={styles.inputInner} />
              <div className={styles.actaSubmateria}>
                7 Plan de Estudio Bachillerato
              </div>
              <img
                className={styles.materialSymbolskeyboardArroIcon2}
                alt=""
                src="/materialsymbolskeyboardarrowdownrounded.svg"
              />
            </div>
          </div>
          <div className={styles.periodo}>
            <div className={styles.formatoReporte1}>Periodo</div>
            <div className={styles.input3}>
              <div className={styles.rectangleDiv} />
              <div className={styles.div}>1</div>
              <img
                className={styles.materialSymbolskeyboardArroIcon3}
                alt=""
                src="/materialsymbolskeyboardarrowdownrounded.svg"
              />
            </div>
          </div>
          <div className={styles.nombre}>
            <div className={styles.formatoReporte1}>Nombre</div>
            <div className={styles.calendario}>
              <div className={styles.calendarioChild} />
              <div className={styles.ofung1gzJhonnyRafael}>
                OFUNG1GZ JHONNY RAFAEL
              </div>
            </div>
          </div>
          <div className={styles.idProfesor}>
            <div className={styles.formatoReporte1}>ID Profesor</div>
            <div className={styles.calendario1}>
              <div className={styles.calendarioItem} />
              <div className={styles.div1}>67208</div>
            </div>
          </div>
          <div className={styles.nivel}>
            <div className={styles.formatoReporte1}>Nivel</div>
            <div className={styles.input4}>
              <div className={styles.inputChild1} />
              <div className={styles.actaSubmateria}>Bachillerato - BA</div>
              <img
                className={styles.materialSymbolskeyboardArroIcon4}
                alt=""
                src="/materialsymbolskeyboardarrowdownrounded.svg"
              />
            </div>
          </div>
          <div className={styles.ciclo}>
            <div className={styles.formatoReporte1}>Ciclo</div>
            <div className={styles.input5}>
              <div className={styles.inputChild2} />
              <div className={styles.actaSubmateria}>2023</div>
              <img
                className={styles.materialSymbolskeyboardArroIcon5}
                alt=""
                src="/materialsymbolskeyboardarrowdownrounded.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.titleChild} />
          <b className={styles.reporteActasSubmaterias}>
            Reporte Actas Submaterias
          </b>
        </div>
      </div>
      <div className={styles.sidebarOpen}>
        <div className={styles.profil}>
          <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
          <img className={styles.iconMore} alt="" src="/icon--more.svg" />
        </div>
        <div className={styles.divider} />
        <div className={styles.navigation}>
          <div className={styles.link}>
            <img className={styles.primaryIcon} alt="" src="/primary.svg" />
            <div className={styles.label}>Inicio</div>
          </div>
          <div className={styles.link}>
            <img
              className={styles.graduationCapIcon}
              alt=""
              src="/graduationcap.svg"
            />
            <div className={styles.label}>Calificaciones</div>
          </div>
          <div className={styles.link}>
            <img className={styles.iconMore} alt="" src="/filepdf.svg" />
            <div className={styles.label}>Actas Calificaciones</div>
          </div>
          <div className={styles.link}>
            <img
              className={styles.fileCircleCheckIcon}
              alt=""
              src="/filecirclecheck.svg"
            />
            <div className={styles.label}>Reporte Aprobación</div>
          </div>
          <div className={styles.link}>
            <img className={styles.fileLinesIcon} alt="" src="/filelines.svg" />
            <div className={styles.label}>Actas Submaterias</div>
          </div>
          <div className={styles.link}>
            <img className={styles.squareRssIcon} alt="" src="/squarerss.svg" />
            <div className={styles.label}>Publicaciones</div>
          </div>
          <div className={styles.link}>
            <img className={styles.squareRssIcon} alt="" src="/rss.svg" />
            <div className={styles.label}>Consulta Publicaciones</div>
          </div>
          <div className={styles.link}>
            <img className={styles.squareRssIcon} alt="" src="/book.svg" />
            <div className={styles.label}>Reactivos</div>
          </div>
          <div className={styles.link}>
            <img
              className={styles.fileLinesIcon}
              alt=""
              src="/filearrowup.svg"
            />
            <div className={styles.label}>Actos Finales</div>
          </div>
          <div className={styles.link}>
            <img
              className={styles.fileLinesIcon}
              alt=""
              src="/filearrowup.svg"
            />
            <div className={styles.label}>Aspectos Evaluación</div>
          </div>
          <div className={styles.link}>
            <img
              className={styles.fileLinesIcon}
              alt=""
              src="/filearrowup.svg"
            />
            <div className={styles.label}>Evaluación Continua</div>
          </div>
          <div className={styles.link}>
            <img
              className={styles.fileLinesIcon}
              alt=""
              src="/filearrowup.svg"
            />
            <div className={styles.label}>Calificación Evaluación</div>
          </div>
          <div className={styles.link}>
            <img
              className={styles.fileLinesIcon}
              alt=""
              src="/filearrowup.svg"
            />
            <div className={styles.label}>Asistencia</div>
          </div>
        </div>
        <div className={styles.divider1} />
        <div className={styles.navigation1}>
          <div className={styles.title1}>
            <div className={styles.overline}>Configuraciones</div>
          </div>
          <div className={styles.link}>
            <img className={styles.iconBell} alt="" src="/icon--bell.svg" />
            <div className={styles.label}>Notificaciones</div>
          </div>
          <div className={styles.link}>
            <img className={styles.iconBell} alt="" src="/icon--settings.svg" />
            <div className={styles.label}>Configuración</div>
            <img className={styles.iconMore} alt="" src="/icon--chevron.svg" />
          </div>
        </div>
        <div className={styles.button}>
          <img className={styles.iconMore} alt="" src="/icon--separate.svg" />
        </div>
      </div>
    </div>
  );
};

export default ActasSubmaterias;
