import React from 'react';

import Rating from 'components/genericComponents/Rating';
import BlockComment from './blockcomment';
import Container from './container';
import SectionHeader from './sectionHeader';

export default class CommentaryCard extends React.Component {
  createCommentary(commentary) {
    return (
      <BlockComment>
        <Rating rating={commentary.rating} />
        <p>
          {commentary.commentary}
        </p>
      </BlockComment>
    );
  }

  createComments(comments) {
    return comments.map(this.createCommentary);
  }

  render() {
    const commentary = this.props.commentary;
    const nb = commentary.length;
    let my = 0;

    for (var i = 0; i < nb; i++) {
      my += commentary[i].rating;
    }

    my = my / nb;

    return (
      <Container>
        <SectionHeader>
          Commentaires <Rating rating={my} /> ({nb})
        </SectionHeader>
        {this.createComments(commentary)}
      </Container>
    );
  }
}
