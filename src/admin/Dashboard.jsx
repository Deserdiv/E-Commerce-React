import useGetData from "custom-hooks/useGetData";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "styles/dashboard.scss";
const Dashboard = () => {
  const  {data:productsData} = useGetData('products');
  const  {data:usersData} = useGetData('users');

  return (
 
    <>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <div className="revenue__box">
                <h5>Total sales</h5>
                <span>$7890</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="order__box">
                <h5>Orders</h5>
                <span>$789</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="products__box">
                <h5>Total Products</h5>
                <span>{productsData.length}</span>
              </div>
            </Col>
            <Col lg="3">
              <div className="users__box">
                <h5>Total Users</h5>
                <span>{usersData.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
