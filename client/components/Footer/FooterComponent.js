import React from 'react';
import {Footer as MDLFooter, FooterSection} from 'react-mdl';
import './Footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <MDLFooter size="mini">
        <FooterSection type="middle">
          <span>Handcrafted with ♥ by <a href={this.props.website}> @{this.props.username}</a></span>
        </FooterSection>
      </MDLFooter>
    );
  }
}
