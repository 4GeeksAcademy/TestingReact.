import React from "react";
import Films from "./Films";


	

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="home">
      <div className="contanier-main">
      <h1> Peliculas que ver una vez en la vida</h1>
      
      

			<Films 
      nombre = "Alien "
     
      año = "1992 "
      descripcion = " Tal vez una de las películas de ciencia ficción más innovadoras de todos los tiempos, los directores siguen tratando de recrear la tensión y la atmósfera de esta obra maestra de Ridley Scott." />

      <Films 
      nombre = "Parasitos"
      
      año = "2020 "
      descripcion = " No hay explicación posible que haga justicia a Parásitos: un thriller psicológico, un drama familiar, una historia de terror sobre los males del capitalismo y la búsqueda implacable de la riqueza.." />

      <Films 
      nombre ="Tiburón "
      año = "1990 "
      descripcion ="El tiburón era una marioneta gigante con dientes falsos, y aún así te asustaba."
      
      />
		</div>
    </div>
	);
};

export default Home;
