import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Deathstar from './Deathstar'
import { Container, Row } from "reactstrap"

export default function TheForce() {
    const [swapi, setSwapi] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            console.log(response.data.results)
            setSwapi(response.data.results);
            // console.log(swapi);
        })
        .catch(error => {
            console.log("The force was not with me. My only hope is:", error);
          });
        }, []);
        return(
            <Container>
                <Row>
                    {swapi.map(person => {
                        return <Deathstar key = {person.url} name = {person.name}/>;
                    })}
            </Row>
            </Container>

        );
    }