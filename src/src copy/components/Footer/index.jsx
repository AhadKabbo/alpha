import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  NavLogoNew,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
import { ImgLogo } from '../Info/InfoElements';

const Footer = ({ alt, img }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/under-devlopment">How it works</FooterLink>
              <FooterLink to="/under-devlopment">Testimonials</FooterLink>
              <FooterLink to="/under-devlopment">Carrers</FooterLink>
              <FooterLink to="/under-devlopment">Investor</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/under-devlopment">Contact</FooterLink>
              <FooterLink to="/under-devlopment">Support</FooterLink>
              <FooterLink to="/under-devlopment">Destinations</FooterLink>
              <FooterLink to="/under-devlopment">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/under-devlopment">Submit Video</FooterLink>
              <FooterLink to="/under-devlopment">Ambassadors</FooterLink>
              <FooterLink to="/under-devlopment">Agency</FooterLink>
              <FooterLink to="/under-devlopment">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Having some issu</FooterLinkTitle>
              <FooterLink to="/under-devlopment">Report a problem</FooterLink>
              <FooterLink to="/under-devlopment">Page not working</FooterLink>
              <FooterLink to="/under-devlopment">Fake people</FooterLink>
              <FooterLink to="/under-devlopment">Money issu</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <NavLogoNew to="/" onClick={toggleHome}>
              <ImgLogo src={img} alt={alt} />
            </NavLogoNew>

            <WebsiteRights>
              <strong style={{ color: '#1cc7d9' }}>PhoChar </strong> ©
              {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com/photo?fbid=1811680892317516&set=a.101196766699279"
                target="_blank"
                arial-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/ahad_kabbo/"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com/channel/UCQnm6F6w5tFye6g5T8S_cpg"
                target="_blank"
                arial-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//twitter.com/login"
                target="_blank"
                arial-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
