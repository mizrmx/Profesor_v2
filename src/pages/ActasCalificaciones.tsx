import { FunctionComponent } from "react";
import styles from "./ActasCalificaciones.module.css";

const ActasCalificaciones: FunctionComponent = () => {
  return (
    <div className={styles.actasCalificaciones}>
      <div className={styles.background} />
      <div className={styles.materia}>
        <div className={styles.bg} />
        <img
          className={styles.materiaChild}
          alt=""
          src="/rectangle-459@2x.png"
        />
      </div>
      <div className={styles.education}>
        <div className={styles.bg1} />
        <div className={styles.consulta}>
          <div className={styles.boton}>
            <div className={styles.botonChild} />
            <div className={styles.generarPdf}>Generar PDF</div>
          </div>
          <div className={styles.periodo}>
            <div className={styles.formatoReporte}>Formato Reporte</div>
            <div className={styles.input}>
              <div className={styles.inputChild} />
              <div className={styles.actaCeltaBachillerato}>
                Acta CELTA Bachillerato 2022
              </div>
              <img
                className={styles.materialSymbolskeyboardArroIcon}
                alt=""
                src="/materialsymbolskeyboardarrowdownrounded.svg"
              />
            </div>
          </div>
          <div className={styles.nombre}>
            <div className={styles.formatoReporte}>Nombre</div>
            <div className={styles.calendario}>
              <div className={styles.calendarioChild} />
              <div className={styles.div}>12-01-2023</div>
              <img
                className={styles.uiscalenderIcon}
                alt=""
                src="/uiscalender.svg"
              />
            </div>
          </div>
          <div className={styles.idProfesor}>
            <div className={styles.formatoReporte}>ID Profesor</div>
            <div className={styles.calendario1}>
              <div className={styles.calendarioItem} />
              <div className={styles.div}>12-01-2023</div>
              <img
                className={styles.uiscalenderIcon}
                alt=""
                src="/uiscalender.svg"
              />
            </div>
          </div>
          <div className={styles.nivel}>
            <div className={styles.formatoReporte}>Nivel</div>
            <div className={styles.input1}>
              <div className={styles.calendarioItem} />
              <div className={styles.bachillerato}>Bachillerato</div>
              <img
                className={styles.materialSymbolskeyboardArroIcon1}
                alt=""
                src="/materialsymbolskeyboardarrowdownrounded.svg"
              />
            </div>
          </div>
          <div className={styles.ciclo}>
            <div className={styles.formatoReporte}>Ciclo</div>
            <div className={styles.input2}>
              <div className={styles.inputInner} />
              <div className={styles.bachillerato}>2023</div>
              <img
                className={styles.materialSymbolskeyboardArroIcon2}
                alt=""
                src="/materialsymbolskeyboardarrowdownrounded.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.titleChild} />
          <b className={styles.reporteActasCalificaciones}>
            Reporte Actas Calificaciones
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

export default ActasCalificaciones;
