import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


const CONTRIES_QUERY = gql`
  query {
    countries {
      name
    }
  }
`;

const GraphQLExample = () => {
  const { data, loading } = useQuery(CONTRIES_QUERY);

  return (
    <>
      { loading && 'loading data...'}
      { data && (
        <ul>
          {data.countries.map(({ name }) => (
            <li>{name}</li>
          )) }
        </ul>
      )}
    </>
  );
};

export default GraphQLExample;
