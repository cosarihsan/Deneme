import { gql } from "graphql-request";
import { graphcms } from "../client";

export const MyQuery = async () => {
  const findJobAppsQuery = gql`
    {
      findJobApps {
        tags
        source
        id
        description
        image {
          url
        }
      }
    }
  `;

  const { findJobApps } = await graphcms.request(findJobAppsQuery);

  return findJobApps;
};