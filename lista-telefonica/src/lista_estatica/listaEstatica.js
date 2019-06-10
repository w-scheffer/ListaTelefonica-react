import React from 'react';
import './listaEstatica.css';
// import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

export default class ListaEstatica extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pessoas: [{
                numero: 1,
                nome: 'Thalles',
                email: 'thalles@soft.com.br'
            }, {
                numero: 2,
                nome: 'Felipe',
                email: 'felipe@soft.com.br'
            }]
        };

        this.getPessoas = this.getPessoas.bind(this);
    }

    renderTable() {
        const { pessoas } = this.state;
        return (
            <Table striped bordered hover size="sm mt-5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    { pessoas.map(pessoa => (
                        <tr key={pessoa.numero}>
                            <td>{pessoa.numero}</td>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }

    getPessoas() {
        return this.state.pessoas.length;
    }

    render() {
        let {pessoas} = this.state;
        const havePessoas = pessoas.length > 0;
        return (
            <div className="col-12 mt-5">
                <div>
                    <Row className="justify-content-center">
                        SoftDesign
                    </Row>
                </div>

                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Nome" />
                        </Col>
                    </Form.Row>
                    <Button variant="secondary" className="col-5" onClick={this.getPessoas}>Pesquisar</Button>
                </Form>
                { havePessoas ? this.renderTable() : <div className="row mt-5">Sem registros</div>}
            </div>
        );
    }
}