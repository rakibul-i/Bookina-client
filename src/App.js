import { Switch, Route } from "react-router-dom";
import BookinaProvider from "./context/BookinaProvider";
import PrivateRoute from "./firebase/PrivateRoute";
import Signup from "./pages/authentication/Signup";
import AddService from "./pages/dashboard/addService/AddService";
import Dashboard from "./pages/dashboard/manageBookings.js/Dashboard";
import ManageServices from "./pages/dashboard/manageServices/ManageServices";
import Home from "./pages/home/Home";
import MyBookings from "./pages/profile/MyBookings";
import Profile from "./pages/profile/profile";
import Services from "./pages/services/Services";
import BookingForm from "./pages/shared/BookingForm";
import Footer from "./pages/shared/Footer";
import Header from "./pages/shared/header/Header";
import ServiceDetails from "./pages/shared/ServiceDetails";

function App() {
  return (
    <BookinaProvider>
      <Header />
      <Switch>
        <PrivateRoute path="/services/:id">
          <ServiceDetails />
        </PrivateRoute>
        <PrivateRoute path="/booking/:id">
          <BookingForm />
        </PrivateRoute>
        <PrivateRoute path="/services">
          <Services />
          <Footer />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/manageAllServices">
          <ManageServices />
        </PrivateRoute>
        <PrivateRoute path="/addService">
          <AddService />
        </PrivateRoute>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/myBookings">
          <MyBookings />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BookinaProvider>
  );
}

export default App;
