import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, FormGroup, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as actionCreators from '../../actions/index.js';

require('./postDetail.css');

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        const { users, posts, loadAllPostResult, loadAllUserResult } = this.props;
        if (!posts || posts.length === 0) loadAllPostResult();
        if (!users || users.length === 0) loadAllUserResult();
    }
    static mapUserWithPost(props) {
        const postID = parseInt(props.match.params.postID);
        let post = props.posts.find(post => {
            return post.id === postID;
        });
        if (post) {
            post.user = props.users.find(user => {
                return user.id === post.userId;
            });
        }
        return post;
    }
    render() {
        const post = PostDetail.mapUserWithPost(this.props);
        return (
            <div style={{ marginTop: 10 }}>
                <h5 align="center">Details of selected Post</h5>
                <Container>
                    <p>
                        <strong>Post Details</strong>
                    </p>
                    <Row>
                        <Col sm={{ size: 3 }}>
                            <span>Post ID</span>
                        </Col>
                        <Col sm={{ size: 9 }}>
                            <span>{post && post.id}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 3 }}>
                            <span>Post Title</span>
                        </Col>
                        <Col sm={{ size: 9 }}>
                            <span>{post && post.title}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 3 }}>
                            <span>Post Body</span>
                        </Col>
                        <Col sm={{ size: 9 }}>
                            <span>{post && post.body}</span>
                        </Col>
                    </Row>
                    <p>
                        <strong>User Details</strong>
                    </p>
                    <Row>
                        <Col sm={{ size: 3 }}>
                            <span>User Name</span>
                        </Col>
                        <Col sm={{ size: 9 }}>
                            <span>{post && post.user && post.user.name}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 3 }}>
                            <span>Username</span>
                        </Col>
                        <Col sm={{ size: 9 }}>
                            <span>{post && post.user && post.user.username}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 3 }}>
                            <span>User Email</span>
                        </Col>
                        <Col sm={{ size: 9 }}>
                            <span>{post && post.user && post.user.email}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 3 }}>
                            <span>Address City</span>
                        </Col>
                        <Col sm={{ size: 3 }}>
                            <span>{post && post.user && post.user.address && post.user.address.city}</span>
                        </Col>
                        <Col sm={{ size: 6 }}>
                            <span>{post && post.user && post.user.address && post.user.address.zipcode}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 3 }}>
                            <span>Phone</span>
                        </Col>
                        <Col sm={{ size: 9 }}>
                            <span>{post && post.user && post.user.phone}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 3 }}>
                            <span>Website</span>
                        </Col>
                        <Col sm={{ size: 9 }}>
                            <span>{post && post.user && post.user.website}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 3 }}>
                            <span>Company</span>
                        </Col>
                        <Col sm={{ size: 9 }}>
                            <span>{post && post.user && post.user.company && post.user.company.name}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Link to="/">Back</Link>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps, actionCreators)(PostDetail);
