import { FaCircleInfo } from "react-icons/fa6";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import Badge from "./components/badge/Badges";
import Banner from "./components/banner/index";

function App() {

  return (
    <div>
      <div className="flex">
        <Badge>Text</Badge>
        <Badge color="red" shape="square">Buy</Badge>
        <Badge color="yellow" shape="square">Text</Badge>
        <Badge color="green" shape="square">Text</Badge>
        <Badge color="blue" shape="square">Text</Badge>
        <Badge color="indigo" shape="square">Text</Badge>
        <Badge color="purple" shape="square">Sold</Badge>
        <Badge color="pink" shape="square">Online</Badge>
      </div>
      <div className="flex">
        <Badge shape="pill">Text</Badge>
        <Badge color="red" shape="pill">Buy</Badge>
        <Badge color="yellow" shape="pill">Text</Badge>
        <Badge color="green" shape="pill">Text</Badge>
        <Badge color="blue" shape="pill">Text</Badge>
        <Badge color="indigo" shape="pill">Text</Badge>
        <Badge color="purple" shape="pill">Sold</Badge>
        <Badge color="pink" shape="pill">Online</Badge>
      </div>
      
      <div>
        <Banner>
          <Banner.Icon>{<FaCircleInfo />}</Banner.Icon>
          <div>
            <Banner.Title>Update available</Banner.Title>
            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Content>
          </div>
        </Banner>
        <Banner>
          <Banner.Icon>{<FaCircleInfo />}</Banner.Icon>
          <div>
            <Banner.Title>Update available</Banner.Title>
          </div>
        </Banner> 

        <Banner variant="success">
          <Banner.Icon>{<FaCheckCircle />}</Banner.Icon>
          <div>
            <Banner.Title>Congratulations!</Banner.Title>
            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
          </div>
        </Banner>
        <Banner variant="success">
          <Banner.Icon>{<FaCheckCircle />}</Banner.Icon>
          <div>
            <Banner.Title>Congratulations!</Banner.Title>
          </div>
        </Banner> 

        <Banner variant="warning">
          <Banner.Icon>{<IoWarning />}</Banner.Icon>
          <div>
            <Banner.Title>Attention!</Banner.Title>
            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Content>
          </div>
        </Banner>
        <Banner variant="warning">
          <Banner.Icon>{<IoWarning />}</Banner.Icon>
          <div>
            <Banner.Title>Attention!</Banner.Title>
          </div>
        </Banner> 

        <Banner variant="error">
          <Banner.Icon>{<FaTimesCircle />}</Banner.Icon>
          <div>
            <Banner.Title>There is a problem with your application</Banner.Title>
            <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner.Content>
          </div>
        </Banner>
        <Banner variant="error">
          <Banner.Icon>{<FaTimesCircle />}</Banner.Icon>
          <div>
            <Banner.Title>There is a problem with your application</Banner.Title>
          </div>
        </Banner> 
      </div>
      
    </div>
     
  )
}

export default App
