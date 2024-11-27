import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <>
      <IndexNavbar />
      <div
        className="wrapper"
        style={{
          backgroundColor: "#f5faff", // Light blueish-white background
          minHeight: "100vh", // Full viewport height
          color: "#333", // Text color
        }}
      >        <PageHeader />
        <div
          className="main"
          style={{
            background: "linear-gradient(180deg, #f5faff, #e0f7ff)", // Subtle gradient
            padding: "20px", // Padding for spacing
          }}
        >          {/* <Basics /> */}
          {/* <Navbars /> */}
          {/* <Tabs /> */}
          {/* <Pagination /> */}
          {/* <Notifications /> */}
          <Typography />
          {/* <JavaScript /> */}
          {/* <NucleoIcons /> */}
          {/* <Signup /> */}
          {/* <Examples /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
