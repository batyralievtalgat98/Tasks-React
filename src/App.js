
import Navbar from "./components/Navbar";
import  ContactsContextProvider  from "./context/contactsContext";
import MainRoute from "./Routes/MainRoute";




function App() {
  return (
    <>
    <ContactsContextProvider>
      <Navbar />
      <MainRoute />
      </ContactsContextProvider>
    </>
  );
}

export default App;
