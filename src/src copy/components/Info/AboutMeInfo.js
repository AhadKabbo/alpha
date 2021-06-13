import React, { useState } from 'react';
import { Col, Row, Card, Container, CardImg } from 'react-bootstrap';
import Footer from '../Footer';
import NavbarPage from '../Navbar/indexPage';
import Sidebar from '../SideBar/index';
import { navlogo } from './Data';

const AboutMeInfo = ({ alt, img }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarPage toggle={toggle} {...navlogo} />
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <Container
        fluid
        className="d-flex align-items-center justify-content-center "
        style={{
          marginTop: '11rem',
          marginBottom: '6rem',
          // minHeight: '10rem',
          height: 'auto',
          minWidth: '10rem',
          // maxHeight: '70rem',
          maxWidth: '65rem',
        }}
      >
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Row
            style={{
              marginRight: '1rem',
              marginTop: '-1rem',
            }}
          >
            <Col
              style={{
                marginTop: '-1rem',
              }}
            >
              <Col
                style={{
                  border: 'none',
                  padding: '2rem',
                  borderRadius: '1%',
                  minHeight: '10rem',
                  minWidth: '10rem',
                  maxHeight: '30rem',
                  maxWidth: '30rem',
                }}
              >
                <Card
                  style={{
                    border: 'none',
                    marginTop: '2rem',
                  }}
                >
                  <Card.Body>
                    <CardImg
                      className="shadow p-3 mb-5 bg-white rounded"
                      style={{
                        borderRadius: '1%',
                        minHeight: '16rem',
                        minWidth: '16rem',
                        maxHeight: '20rem',
                        maxWidth: '20rem',
                      }}
                      src="img/kabbo.jpg"
                      alt={alt}
                    />
                  </Card.Body>
                </Card>
              </Col>

              <Col
                style={{
                  border: 'none',
                  padding: '2rem',
                  borderRadius: '1%',
                  minHeight: '10rem',
                  minWidth: '10rem',
                  maxHeight: '30rem',
                  maxWidth: '30rem',
                }}
              >
                <Card
                  style={{
                    border: 'none',
                    marginTop: '-3.5rem',
                  }}
                >
                  <Card.Body>
                    <Card.Text
                      style={{
                        fontSize: '0.90rem',
                      }}
                    >
                      <strong
                        style={{
                          marginBottom: '5rem',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        Name
                      </strong>
                      : Mohammad Ahad Hossain (KABBO)
                    </Card.Text>
                    <Card.Text
                      style={{
                        fontSize: '0.90rem',
                      }}
                    >
                      <strong
                        style={{
                          marginBottom: '5rem',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        User Name
                      </strong>
                      : KABBO
                    </Card.Text>
                    <Card.Text
                      style={{
                        fontSize: '0.90rem',
                      }}
                    >
                      <strong
                        style={{
                          marginBottom: '5rem',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        Profile
                      </strong>
                      : Web Developer
                    </Card.Text>
                    <Card.Text
                      style={{
                        fontSize: '0.90rem',
                      }}
                    >
                      <strong
                        style={{
                          marginBottom: '5rem',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                        }}
                      >
                        Email
                      </strong>
                      : ahadhossainkabbo@gmail.com
                    </Card.Text>
                    <Card.Text
                      style={{
                        fontSize: '0.90rem',
                      }}
                    >
                      <strong
                        style={{
                          marginBottom: '5rem',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        Phone
                      </strong>
                      : 01795287077
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Col>

            <Col
              style={{
                padding: '2rem',
              }}
            >
              <Card style={{ border: 'none' }}>
                <Card.Body>
                  <CardImg />
                  <Card.Title
                    style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      marginTop: '-1rem',
                    }}
                  >
                    About Me
                  </Card.Title>
                  <Card.Text>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance.
                    <br />
                    <br /> The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                    amet..", comes from a line in section 1.10.32. The standard
                    chunk of Lorem Ipsum used since the 1500s is reproduced
                    below for those interested. Sections 1.10.32 and 1.10.33
                    from "de Finibus Bonorum et Malorum" by Cicero are also
                    reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
      <Footer {...navlogo} />
    </>
  );
};
export default AboutMeInfo;
