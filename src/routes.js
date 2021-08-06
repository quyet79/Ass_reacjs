import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./pages/admin/product";
import AddFormProduct from "./pages/admin/product/add";
import EditFormProduct from "./pages/admin/product/edit";
import Home from "./pages/website/Home";
import Signin from "./pages/website/signin";
import Signup from "./pages/website/signup";
import AdminLayout from "layouts/adminLayout";
import WebsiteLayout from "layouts/websiteLayout";
import AdminRoute from "./auth/adminRouter";
import Dashboard from "pages/website/dashboard";

const Routes = (props) => {
  return (
    // <Router>
    //   <div>
    //     <Header />
    //     <div>
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //     </div>
    //     <div className="container-fluid">
    //       <div className="row">
    //         <Switch>
    //           <Route exact path="/">
    //             <Home {...props} />
    //           </Route>
    //           <Route exact path="/products">
    //             <List {...props} />
    //           </Route>
    //           <Route exact path="/products/add">
    //             <AddFormProduct {...props} />
    //           </Route>
    //           <Route exact path="/products/:id/edit">
    //             <EditFormProduct {...props} />
    //           </Route>
    //           <Route exact path="/signin">
    //             <Signin />
    //           </Route>
    //           <Route exact path="/signup">
    //             <Signup />
    //           </Route>
    //         </Switch>
    //       </div>
    //     </div>
    //     <Footer />
    //   </div>
    // </Router>
    <Router>
      <Switch>
        <Route exact path="/admin/:path?/:path?/:path?" >
          <AdminLayout >
            <Switch>
              <AdminRoute exact path="/admin">
                <Home {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/product">
                <List {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/product/add">
                <AddFormProduct {...props} />
              </AdminRoute>
              <AdminRoute exact path="/admin/product/:id/edit">
                <EditFormProduct {...props} />
              </AdminRoute>
            </Switch>
          </AdminLayout>
        </Route>
        <Route>
          <WebsiteLayout >
            <Switch>
              <Route exact path="/">
                <Home {...props} />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard {...props} />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
            </Switch>
            
          </WebsiteLayout>
        
        </Route>
        
      </Switch>
    </Router>
  );
};
export default Routes;
