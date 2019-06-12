import React from 'react';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';


function LinhaTabela(props){
    return(
        <tr key={props.nome}>
            <td>{props.nome}</td>
            <td>{props.email}</td>
            <td>{props.celular}</td>
            <td>
                <Image
                    height="64"
                    width="64"
                    src={props.foto}
                    alt='err'
                    roundedCircle
                    thumbnail>
                </Image>
            </td>
        </tr>
    );
}

export default class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomePesquisa: '',
            pessoas: []
        };

        this.getPessoas = this.getPessoas.bind(this);
        this.setName = this.setName.bind(this);
        this.renderTable = this.renderTable.bind(this)
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

    setName(event){
        this.setState({nomePesquisa: event.target.value});
    }
    
    renderTable() {
        const { pessoas } = this.state;
        const filtrados = pessoas.filter(pessoa => pessoa.nome.toLowerCase().includes(this.state.nomePesquisa.toLowerCase()));
        return (
            <Table responsive striped bordered hover size="sm mt-5">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Celular</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {filtrados.map(LinhaTabela)}
                </tbody>
            </Table>
        );
    }


    render() {
        this.getPessoas();
        return (
                <Container style={{backgroundColor:'lightgrey'}}>
                        <Row className="justify-content-center" style={{backgroundColor:'red'}}>
                            <Image src='https://softdesign.com.br/wp-content/uploads/softdesign-svg/logo-soft-branco.svg'></Image>
                        </Row>
                    <Form className="w-100 mt-3">
                        <Col className="w-100">
                            <Form.Control type="text" placeholder="Nome do Colaborador" name="barraPesquisa" value={this.state.barraPesquisa} onChange={(event) => {
                                this.setName(event)
                            }}/>
                        </Col>
                    </Form>
                    {this.renderTable()}
                </Container>
        );
    }
}