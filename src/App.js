import logo from './logo.svg';
import './App.css';
import Message from './Message';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
        
      <Message plan="FREE" price="$0" users="Single User" storage="5GB Storage" projects="unlimited public projects " access="community access" privateproj="unlimited private project" domain="free subdomain"></Message>
      <Message plan="PLUS" price="$9" users="10User" storage="50GB Storage" projects="unlimited public projects "access="community access" privateproj="unlimited private project" domain="free subdomain"></Message>
      <Message plan="PRO" price="$49" users="unlimited User" storage="20GB Storage" projects="unlimited public projects "access="community access" privateproj="unlimited private project" domain="free subdomain"></Message>
      
   

    </div>
    </div>
    
  </section>
  );
}

export default App;
