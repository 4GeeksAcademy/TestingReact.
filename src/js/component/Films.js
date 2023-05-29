import React from "react";

const Films = (props) => {
    return(
      <div className="container-films">
       
        
        <div className="container-text">
          <p className="film-nomber">{props.nombre}</p>
          <p className="film-age">{props.año}</p>
          <p className="film-text">{props.descripcion}.</p>
        </div>
       

      </div>
      
      
    );
}

export default Films;