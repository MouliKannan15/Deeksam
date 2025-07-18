// import React from "react";

// import "./reviewstyle.css"


// function Review (){
//     return(
//         <>
//         <h1>Happy Customer Feedbacks</h1>
//         <div className="imgrew">
//             <img src="/image/mukhil2.png" alt="" />
//             <img src="/image/sabarish1.png" alt="" />
//             <img src="/image/siva2.png" alt="" />
//             <img src="/image/naveen1.png" alt="" />
//             <img src="/image/elakiya2.png" alt="" />
//         </div>
//         </>
//     );
// }

// export default Review;











// import React, { useRef } from "react";
// import "./reviewstyle.css";

// function Review() {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       if (direction === "left") {
//         scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//       } else {
//         scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <div className="review-container">
//       <h1 className="review-title">Happy Customer Feedbacks</h1>
//       <button className="scroll-btn left" onClick={() => scroll("left")}>‹</button>
//       <div className="review-list" ref={scrollRef}>
//         <div className="review-card"><img src="/image/mukhil2.png" alt="Mukhil" /></div>
//         <div className="review-card"><img src="/image/sabarish1.png" alt="Sabarish" /></div>
//         <div className="review-card"><img src="/image/siva2.png" alt="Siva" /></div>
//         <div className="review-card"><img src="/image/naveen1.png" alt="Naveen" /></div>
//         <div className="review-card"><img src="/image/elakiya2.png" alt="Elakiya" /></div>
//       </div>
//       <button className="scroll-btn right" onClick={() => scroll("right")}>›</button>
//     </div>
//   );
// }

// export default Review;




import React, { useRef, useEffect } from "react";
import "./reviewstyle.css";

function Review() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-scroll effect with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" }); // Reset to start
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 4000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="review-container">
      <h1 className="review-title">Happy Customer Feedbacks</h1>
      <button className="scroll-btn left" onClick={() => scroll("left")}>‹</button>
      <div className="review-list" ref={scrollRef}>
        <div className="review-card"><img src="/image/mukhil2.png" alt="Mukhil" /></div>
        <div className="review-card"><img src="/image/sabarish1.png" alt="Sabarish" /></div>
        <div className="review-card"><img src="/image/siva2.png" alt="Siva" /></div>
        <div className="review-card"><img src="/image/naveen1.png" alt="Naveen" /></div>
        <div className="review-card"><img src="/image/elakiya2.png" alt="Elakiya" /></div>
      </div>
      <button className="scroll-btn right" onClick={() => scroll("right")}>›</button>
    </div>
  );
}

export default Review;

