import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  inputs: {
    paddingTop: 33,
  },
  textArea: {
    paddingTop: 33,
  },
  logo: {
    width: 150,
    height: 100,
  },
  papers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "10%",
  },
  subtitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "10%",
    fontSize: 30,
  },
  categoriaTittle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "#5CA469",
    fontWeight: "bold",
    fontSize: "20px",
  },
  paperInterno: {
    display: "flex",
    flexDirection: "column",
  },
  rightPanel: {
    width: "30%",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
    marginRight: 300
  },
  rootright: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  entidad: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 30,
  },
  consumo: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 10,
    color: "#5CA4BB",
    fontWeight: "bold",
    fontSize: "20px",
  },
  paperConsumo: {
    marginTop: 50,
  },
  calcular: {
    marginTop: 50,
  },
}));
export default useStyles;
