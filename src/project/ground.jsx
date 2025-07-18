







// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "./ground.css"; // Import custom styles

// function Ground() {
//   const products = [
//     { image: "/image/grd1L.png", title: "Woodpressed Ground Oil 1L", price: "Rs: 340.00" },
//     { image: "/image/gn500ml.jpg", title: "Woodpressed Ground Oil 500ml", price: "Rs: 160.00" },
//     { image: "/image/grd2L.png", title: "Woodpressed Ground Oil 2L", price: "Rs: 650.00" },
//     { image: "C:/image/ground5L.jpg", title: "Woodpressed Ground Oil 5L", price: "Rs: 1050.00" },
//   ];

//   return (
// <>
//     <h3 className="wood">Woodpressed Groudnut Oil</h3>
//     <Container className="my-4">
      
      
//       <Row className="d-flex justify-content-center">
//         {products.map((product, index) => (
//           <Col key={index} xs={12} sm={6} md={3} className="mb-4 d-flex justify-content-center">
//             <Card className="product-card shadow-sm">
//               <Card.Img variant="top" src={product.image} className="p-3" />
//               <Card.Body className="text-center">
//                 <Card.Title>{product.title}</Card.Title>
//                 <Card.Text className="fw-bold text-primary">{product.price}</Card.Text>
//                 <Button variant="success" className="w-100">Add to Cart</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//     </>
//   );
// }

// export default Ground;






import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./coco.css"; // Import custom styles

function Ground() {
  const products = [
    { image: "/image/gd1.png", title: "Woodpressed Groundnut Oil 1L", price: "Rs: 340.00" },
    { image: "/image/gd500.png", title: "Woodpressed Groundnut Oil 500ml", price: "Rs: 160.00" },
    { image: "/image/gd2.png", title: "Woodpressed Groundnut Oil 2L", price: "Rs: 650.00" },
    { image: "/image/ground5L.jpg", title: "Woodpressed Groundnut Oil 5L", price: "Rs: 1050.00" },
  ];

  return (
    <>
      <h3 className="wood">Woodpressed Groundnut Oil</h3>
      <Container className="my-5">
        <Row className="justify-content-center">
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
              <Card className="product-card shadow-lg">
                <Card.Img variant="top" src={product.image} className="product-image" />
                <Card.Body className="text-center">
                  <Card.Title className="product-title">{product.title}</Card.Title>
                  <Card.Text className="fw-bold text-danger">{product.price}</Card.Text>
                  {/* <Button variant="success" className="w-100">Add to Cart</Button> */}
                  <Button variant="warning" className="w-100" >Add to Cart </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Ground;
