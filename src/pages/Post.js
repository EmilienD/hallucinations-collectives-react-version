import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import path from "lodash/fp/path";
import wpService from "../services/wpService";
import WpRendered from "../helperComponents/WpRendered";
import { FullSize, H2 } from "./Post.style";
import Thumbnail from "./Thumbnail";
import OpenGraph from "../OpenGraph";
import DocTitle from "../DocTitle";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      featuredMedia: {}
    };
  }

  componentDidMount() {
    const { post } = this.props;
    wpService
      .getMediaById(post.featured_media)
      .then(featuredMedia => this.setState({ featuredMedia }));
  }

  componentDidUpdate(prevProps) {
    const { thumbnail, post } = this.props;
    if (!thumbnail && prevProps.post.id !== post.id) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { post, thumbnail, basePath, date } = this.props;
    const { featuredMedia } = this.state;
    const postTitle = path("title.rendered", post);
    return thumbnail ? (
      <Link to={`/${basePath}${post.slug}/${window.location.search}`}>
        <Thumbnail media={featuredMedia} post={post} />
      </Link>
    ) : (
      <>
        <DocTitle>{`${date} - ${postTitle}`}</DocTitle>
        {/* <OpenGraph property="og:image" content={path('source_url', featuredMedia)} /> */}
        <FullSize
          ref={ref => {
            this.ref = ref;
          }}
        >
          <H2>
            <WpRendered rendered={postTitle} />
          </H2>
          <WpRendered rendered={path("content.rendered", post)} />
        </FullSize>
      </>
    );
  }
}
// @TODO: extract thumbnail and full post

Post.propTypes = {
  post: PropTypes.object.isRequired,
  thumbnail: PropTypes.bool,
  basePath: PropTypes.string,
  date: PropTypes.string
};

Post.defaultProps = {
  thumbnail: true,
  basePath: "",
  date: ""
};
