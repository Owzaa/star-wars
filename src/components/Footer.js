import { Container, Grid } from "@mui/material";
const Footer = () => (
    <footer style={styles.footerBar}>
      <Container>
        <Grid Row style={styles.rowStyle}>
          <Grid container xs={12} sm={12} md={12} lg={12}>
            <p style={styles.copyRight}>&copy; 2022 Olwethu Nyondo - All Rights Reserved</p>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
  
  const styles = {
    footerBar: {
      bottom: 0,
      width: "100%",
      position:"bottom",
      backgroundColor: "#333"
    },
    rowStyle: {
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    copyRight: {
      marginTop: 10,
      justifyContent: "center",
      color: "#fff",
      fontSize: "1rem",
      textAlign: "center"
    }
  };
  
export default Footer;