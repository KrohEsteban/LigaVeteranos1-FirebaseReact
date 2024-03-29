import React from "react";
import { Container, Accordion} from 'react-bootstrap';
import FooterEsteban from "../Components/FooterEsteban/FooterEsteban.js";
import MenuPrivado from "../Components/MenuPrivado.js";
import CargarEquipos from "./CargarEquipos.js";
import CargarJugadores from "./CargarJugadores.js";



export default function  ModDatosEquipos(props) {

return ( 
<>

                <MenuPrivado/>
                <Container>
                
                    <br />
                    <br />
                    <h1>Seccion privada para cambios</h1>
                    <br />
                    <br />
                    <Accordion  defaultActiveKey="0">
                        
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> <h1>Agregar Equipo</h1> </Accordion.Header>
                            <Accordion.Body>
                                <CargarEquipos listaequipos={props.listaequipos}/>
                            </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="2" >
                            <Accordion.Header> <h1>Agregar Jugadores</h1> </Accordion.Header>
                            <Accordion.Body >
                                <CargarJugadores listaequipos={props.listaequipos} listajugadores={props.listajugadores} />
                            </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>

            

                </Container>
                <FooterEsteban/>

                </>
        
        )};