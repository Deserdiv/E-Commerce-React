import React from "react";
import { Container, Row, Col } from "reactstrap";
import useGetData from "custom-hooks/useGetData";
import {db} from 'firebase.config';
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");

  const deleteProduct = async(id) => {
    await deleteDoc(doc(db,'products',id))
    toast.success("Delete product successfully!")
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
             <div className="text-center">
               <div className="spinner-border" role="status"></div>
             </div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productsData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.imgUrl} alt={item.productName} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td>
                        <button className="btn btn-danger" onClick={()=> deleteProduct(item.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
