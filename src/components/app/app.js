import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';
import styled from 'styled-components';


class RandomCharMainBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        }

        this.changeVisability = this.changeVisability.bind(this);
    }

    changeVisability() {
        this.setState({visible: !this.state.visible});
    }

    render() {
        return (
            <>
                <RandomChar visible = {this.state.visible}/>
                <Button color="primary" onClick={this.changeVisability}>Toggle Random Character</Button>
            </>
        )
    }
}


const App = () => {
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomCharMainBlock/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6' className='mt-20'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;