// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Coco () {
//   return (
//     <>
//     <h3>Woodpressed Coconut Oil</h3>


//     <div class ="container">
//         <div class="row">
//         <div class="col-md-3">


   
//       <Card.Img variant="top" src="/image/coco.png" />
//       <Card.Body>
//         <Card.Title>Deeksam Wooodpressed Coconut Oil 1L</Card.Title>
//         <Card.Text>
//           Rs:340.00
//         </Card.Text>
//         <Button variant="success">Add to Cart</Button>
//       </Card.Body>
   


//     </div>
    
    

       
//         <div class="col-md-3">


    
//       <Card.Img variant="top" src="/image/coco.png" />
//       <Card.Body>
//         <Card.Title>Deeksam Wooodpressed Coconut Oil 500ml</Card.Title>
//         <Card.Text>
//           Rs:160.00
//         </Card.Text>
//         <Button variant="success">Add to Cart</Button>
//       </Card.Body>
    

//     </div>
    
   

  
//         <div class="col-md-3">

    
//       <Card.Img variant="top" src="/image/coco.png" />
//       <Card.Body>
//         <Card.Title>Deeksam Wooodpressed Coconut Oil 2L</Card.Title>
//         <Card.Text>
//           Rs:650.00
//         </Card.Text>
//         <Button variant="success">Add to Cart</Button>
//       </Card.Body>
  

//     </div>
    


       
//        <div class="col-md-3">


   
//      <Card.Img variant="top" src="/image/coco.png" />
//      <Card.Body>
//        <Card.Title>Deeksam Wooodpressed Coconut Oil 5L</Card.Title>
//        <Card.Text>
//          Rs:1050.00
//        </Card.Text>
//        <Button variant="success">Add to Cart</Button>
//      </Card.Body>
  

//    </div>
//    </div>


//    </div>
   







   

//     </>
//   );
// }

// export default Coco;







import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./coco.css"; // Import custom styles

function Coco() {
  const products = [ 
    {  image:  "/image/cocoex.png", title: "Woodpressed Coconut Oil 1L", price: "Rs: 340.00" },
    { image: "/image/coco500.png", title: "Woodpressed Coconut Oil 500ml", price: "Rs: 160.00" },
    { image: "/image/coco2L.png", title: "Woodpressed Coconut Oil 2L", price: "Rs: 650.00" },
    { image: "/image/coco5LL.png", title: "Woodpressed Coconut Oil 5L", price: "Rs: 1050.00" },
  ];

  return (
    <>
      <h3 className="wood">Woodpressed Coconut Oil</h3>
      <Container className="my-5">
        <Row className="justify-content-center">
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
              <Card className="product-card shadow-lg">
                <Card.Img variant="top" src={product.image} className="product-image" />
                <Card.Body className="text-center">
                  <Card.Title className="product-title">{product.title}</Card.Title>
                  <Card.Text className="fw-bold text-danger">{product.price}</Card.Text>
                  <Button variant="success" className="w-100">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Coco;





