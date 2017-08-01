import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Form } from 'formsy-react';

import Input from './textarea';
import Select from './select';
import Submit from './submitStyled';
import Container from './container';

const AddComment = ({ mutate }) => {
  const post = values => {
    mutate({
      variables: {
        rating: values.rating,
        commentary: values.comment,
        cook_id: 'de0fc6dc-71d6-11e7-84a0-5b2edac5225f'
      },
      refetchQueries: [
        {
          query: gql`
            query commentary($id: ID!) {
              commentary(cook_id: $id) {
                comment_id
                rating
                commentary
                cook_id
                workshop_id
              }
            }
          `,
          variables: { id: 'de0fc6dc-71d6-11e7-84a0-5b2edac5225f' }
        }
      ]
    })
      .then(({ data }) => {
        console.log('got data', data);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      });

    values.rating = 0;
    values.comment = '';
  };

  return (
    <Form onSubmit={post} style={{ width: '80%' }}>
      <Container>
        <Input value="" name="comment" title="Commentary" required />
        <Select
          name="rating"
          title="Rating"
          options={[
            { value: 0, title: '0' },
            { value: 0.5, title: '0.5' },
            { value: 1, title: '1' },
            { value: 1.5, title: '1.5' },
            { value: 2, title: '2' },
            { value: 2.5, title: '2.5' },
            { value: 3, title: '3' },
            { value: 3.5, title: '3.5' },
            { value: 4, title: '4' },
            { value: 4.5, title: '4.5' },
            { value: 5, title: '5' }
          ]}
          required
        />
        <Submit type="submit">Submit</Submit>
      </Container>
    </Form>
  );
};

const addCommentMutation = gql`
  mutation submitCommentary(
    $rating: Float!
    $commentary: String!
    $cook_id: ID!
  ) {
    addCommentary(rating: $rating, commentary: $commentary, cook_id: $cook_id) {
      comment_id
      rating
      commentary
      cook_id
      workshop_id
    }
  }
`;

const addCommentWithMutation = graphql(addCommentMutation)(AddComment);

export default addCommentWithMutation;
