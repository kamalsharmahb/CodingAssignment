import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index.js';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.loadAllPostResult();
        this.props.loadAllUserResult();
    }
    onRowClick(index, post) {
        console.log(index);
        // history.push(`/post/${post.id}`);
        // this.context.router.push(`/post/${post.id}`);

        // this.setState({ selectedRowIndex: index }, () => {
        //     this.props.showFindingResult(selectedResult);
        // });
    }

    render() {
        const { posts } = this.props;
        return (
            <div style={{ marginTop: 20 }}>
                <Container>
                    <Row>
                        <Col>
                            <h5 align="center">Post Results</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User ID</th>
                                    <th>Post Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts &&
                                    posts.map((post, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                id={'resultIndex_' + index}
                                                className={index === this.state.selectedRowIndex ? 'Highlight' : ''}
                                            >
                                                <td scope="row">{post.id}</td>
                                                <td>{post.userId}</td>
                                                <td>
                                                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(MainPage);
