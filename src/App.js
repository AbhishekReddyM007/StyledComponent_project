import logo from './logo.svg';
import './App.css';
import ButtonText from './Components/Buttontest';
import Container from './Components/Container_description';
import ImageFpo from './Components/Image';
import FpoContainer from './Components/FpoContainer';

function App() {
  return (
    <div>
      <FpoContainer containercolor='#F2FBFF'bordercolor='#0097D0'>
      <ImageFpo imagecolor='#0097D0'>
        <h1>FPO</h1>
      </ImageFpo>
      <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis ipsum, harum magni, consectetur sapiente quae alias consequuntur dolores nemo ipsa expedita sed reprehenderit, ut rerum error beatae! Ipsam sed, sapiente harum odio corrupti ducimus dignissimos aut accusantium ullam cumque hic obcaecati quia molestias quod temporibus quas autem? Excepturi, vero!</p>
      </Container>
      <ButtonText buttoncolor='#0097D0'>
        button text
      </ButtonText>
      </FpoContainer>

  <FpoContainer containercolor='#F4F9F4' bordercolor='#3A8232'>
  <ImageFpo imagecolor='#3A8232'>
        <h1>FPO</h1>
      </ImageFpo>
      <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis ipsum, harum magni, consectetur sapiente quae alias consequuntur dolores nemo ipsa expedita sed reprehenderit, ut rerum error beatae! Ipsam sed, sapiente harum odio corrupti ducimus dignissimos aut accusantium ullam cumque hic obcaecati quia molestias quod temporibus quas autem? Excepturi, vero!</p>
      </Container>
      <ButtonText buttoncolor='#3A8232'>
        button text
      </ButtonText>
  </FpoContainer>
  <FpoContainer containercolor='#FEF2F9' bordercolor='#CD007A'>
  <ImageFpo imagecolor='#CD007A'>
        <h1>FPO</h1>
      </ImageFpo>
      <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis ipsum, harum magni, consectetur sapiente quae alias consequuntur dolores nemo ipsa expedita sed reprehenderit, ut rerum error beatae! Ipsam sed, sapiente harum odio corrupti ducimus dignissimos aut accusantium ullam cumque hic obcaecati quia molestias quod temporibus quas autem? Excepturi, vero!</p>
      </Container>
      <ButtonText buttoncolor='#CD007A'>
        button text
      </ButtonText>
  </FpoContainer>
  <FpoContainer containercolor='#F4F4F9' bordercolor='#76b5c5'>
  <ImageFpo imagecolor='#76b5c5'>
        <h1>FPO</h1>
      </ImageFpo>
      <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis ipsum, harum magni, consectetur sapiente quae alias consequuntur dolores nemo ipsa expedita sed reprehenderit, ut rerum error beatae! Ipsam sed, sapiente harum odio corrupti ducimus dignissimos aut accusantium ullam cumque hic obcaecati quia molestias quod temporibus quas autem? Excepturi, vero!</p>
      </Container>
      <ButtonText buttoncolor='#76b5c5'>
        button text
      </ButtonText>
  </FpoContainer>
    </div>
    

    
    // <div className="App">
    //   <div className='container'>
    
    //   <Container>
    //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Voluptatum odit totam consectetur nobis omnis ipsum <br />culpa perspiciatis vitae libero provident excepturi, <br />earum adipisci fugiat impedit modi ipsam, quaerat officiis <br />alias in repellendus unde. Repudiandae, explicabo!</p>
    //   </Container>
    //   </div>  
    // </div>
  );
}

export default App;
