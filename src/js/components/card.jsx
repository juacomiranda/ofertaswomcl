import React from "react";

export const Card = () =>{
    return (
        <div className="row mx-5 my-5">
            <div className="col-sm-4">
                <div className="card-header bg-light">Lleva tu línea por $9990</div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Nombre Plan</li>
                    <li className="list-group-item">40GB $11990</li>
                    <li className="list-group-item">Descurntos</li>
                    <li className="list-group-item">Que incluye</li>
                    <li className="list-group-item">Boton lo quiero</li>
                    
                </ul>
            </div>    
        </div>    
    );
}