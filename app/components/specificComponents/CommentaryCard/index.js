import React from 'react';

import Rating from 'components/genericComponents/Rating';
import BlockComment from './blockcomment';
import Container from './container';
import SectionHeader from './sectionHeader';
import CommentaryForm from 'components/specificComponents/CommentaryForm';
import AddComment from 'components/specificComponents/CommentaryForm';
import Textarea from 'components/specificComponents/CommentaryForm/textareaStyled';
import Select from 'components/specificComponents/CommentaryForm/selectStyled';
import Submit from 'components/specificComponents/CommentaryForm/submitStyled';

export default class CommentaryCard extends React.Component {
  createCommentary(commentary) {
    return (
      <BlockComment key={commentary.comment_id}>
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

  submit(values) {
    // print the form values to the console
    console.log(values);
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
        {/* <CommentaryForm id={this.props.id} onSubmit={this.submit} /> */}
        <AddComment />
        {/* <Textarea type="text" name="test" placeholder="test" rows="5" />
        <Select name="testselect">
          <option selected disabled>
            Note :{' '}
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Select>
        <Submit type="submit" name="submit">
          Commenter
        </Submit> */}
      </Container>
    );
  }
}
