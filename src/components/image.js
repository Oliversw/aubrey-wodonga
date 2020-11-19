import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "aubrey-background.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  if (!data?.heroImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return (
    <StyledImage
      fluid={data.heroImage.childImageSharp.fluid}
      alt="Aubrey Wodonga looking spectacular in the middle of an industrial estate"
    />
  );
};

const StyledImage = styled(Img)``;

export default Image;
