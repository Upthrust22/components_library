import { FaCircleInfo } from "react-icons/fa6";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import Badge from "./components/badge/Badges";
import Banner from "./components/banner/Banners";

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
        <Banner 
          icon={<FaCircleInfo />}
          title="Update available"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." 
        />
        <Banner 
          icon={<FaCircleInfo />}
          title="Update available" 
        />
      </div>
      <div>
        <Banner 
          icon={<FaCheckCircle />}
          title="Congratulations!"
          variant="success"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." 
        />
        <Banner 
          icon={<FaCheckCircle />}
          title="Congratulations!"
          variant="success" 
        />
      </div>
      <div>
        <Banner 
          icon={<IoWarning />}
          title="Attention"
          variant="warning"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." 
        />
        <Banner 
          icon={<IoWarning />}
          title="Attention"
          variant="warning" 
        />
      </div>
      <div>
        <Banner 
          icon={<FaTimesCircle />}
          title="There is a problem with your application"
          variant="error"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." 
        />
        <Banner 
          icon={<FaTimesCircle />}
          title="There is a problem with your application"
          variant="error" 
        />
      </div>
    </div>
     
  )
}

export default App
