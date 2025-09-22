// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer

// Footer Component
import React from "react";

const FooterComponent = () => (
  <footer className="bg-white border-t mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="text-center text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-2">
        <p>
          Electric Vehicle Population Dashboard - Built with Redux Architecture
        </p>
        <p>
          Data source: Electric Vehicle Registration Dataset (20 sample records)
        </p>
      </div>
    </div>
  </footer>
);

export default FooterComponent;


// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="h-[8%] bg-white shadow-inner border-t flex items-center justify-center text-sm text-gray-500">
//       © {new Date().getFullYear()} My App. All rights reserved.
//     </footer>
//   );
// };

// export default Footer;
