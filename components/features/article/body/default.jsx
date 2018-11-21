import ArticleBody from '@arc-core-components/feature_article-body'

import Consumer from 'fusion:consumer'
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

@Consumer
class SkeletonArticleBody extends Component {
  render() {
    const { content_elements: contentElements } = this.props.globalContent;

    return (
      <Fragment>
        {
          contentElements &&
          <ArticleBody
            data={contentElements}
          />
        }
      </Fragment>
    );
  }
}

SkeletonArticleBody.static = true;

SkeletonArticleBody.propTypes = {
  globalContent: PropTypes.object,
};

export default SkeletonArticleBody;
