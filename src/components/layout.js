import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="bodywrap">
          <img className="navarrow" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c454.png" alt="arrow"/>
          <div className="memewrap">

          </div>
          <img className="navarrow two" src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c454.png" alt="arrow"/>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout