import React from 'react';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';

export default class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pessoas: []
        };

        this.getPessoas = this.getPessoas.bind(this);
    }

    getPessoas() {
        axios.get('http://private-ba46ed-softtrainee.apiary-mock.com/colaboradores')
            .then((res) => {
                const pessoas = res.data;
                this.setState({ pessoas })

            }).catch(error => {
                console.error('erro na requisição: ', error)
            });
    }

    renderTable() {
        const { pessoas } = this.state;
        return (
            <Table responsive="sm" striped bordered hover size="sm mt-5">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Celular</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {pessoas.map(pessoa => (
                        <tr key={pessoa.nome}>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.email}</td>
                            <td>{pessoa.celular}</td>
                            <td>
                                <Image
                                    height="64"
                                    width="64"
                                    src={pessoa.foto}
                                    roundedCircle
                                    thumbnail></Image>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }


    render() {
        const { pessoas } = this.state;
        const havePessoas = pessoas.length > 0;
        return (
                <Container>
                        <Row className="justify-content-center">
                            <label>SoftDesign</label>
                        </Row>
                    <Form>
                        <Form.Row className="justify-self-center">
                            <Col className="col-md-7 col-sm-3">
                                <Form.Control type="text" placeholder="Nome" />
                            </Col>
                            <Col>
                                <Button variant="secondary" className="col-5 col-lg-3" onClick={() => this.getPessoas()}>Pesquisar</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                    {havePessoas ? this.renderTable() : <div className="row mt-5 justify-content-center">Sem registros</div>}
                </Container>
        );
    }
}