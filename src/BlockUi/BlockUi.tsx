import "./App.css";
import Tailwind from "./BlockUi1";
import BlockUi2 from "./BlockUi2";
import BlockUi3 from "./BlockUi3";
import BlockUi4 from "./BlockUi4";
import BlockUi5 from "./BlockUi5";
import BlockUi6 from "./BlockUi6";
import { AiFillAndroid } from "react-icons/ai";
import { FaDropbox, FaGooglePlusG } from "react-icons/fa6";
import {
  FaApple,
  FaDrupal,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { GiCartwheel } from "react-icons/gi";

function App() {
  return (
    <>
      <div>
        <h1>Block Ui 1</h1>
        <Tailwind background="red" label="BANDWIDTH" percent={20} />
        <Tailwind background="cyan" label="STORAGE" percent={50} />
        <Tailwind background="teal" label="OTHERS" percent={70} />
        <Tailwind background="yellow" label="USER" percent={30} />
        <Tailwind background="violet" label="VISITORS" percent={45} />
        <Tailwind background="fuchsia" label="EMAILS" percent={80} />
        <Tailwind background="sky" label="BASIC" percent={37} />
      </div>
      <div>
        <h1>Block Ui 2</h1>
        <BlockUi2
          icon={<AiFillAndroid />}
          background="bg-sky-600"
          label="HTML"
          percent={60}
        />
        <BlockUi2
          icon={<FaApple />}
          background="bg-red-400"
          label="CSS"
          percent={50}
        />
        <BlockUi2
          icon={<FaDropbox />}
          background="bg-cyan-400"
          label="PHP"
          percent={30}
        />
        <BlockUi2
          icon={<GiCartwheel />}
          background="bg-amber-400"
          label="Java"
          percent={80}
        />
        <BlockUi2
          icon={<FaDrupal />}
          background="bg-violet-400"
          label=".Net"
          percent={40}
        />
      </div>
      <h1>Block Ui 3</h1>
      <div className="flex">
        <BlockUi3
          icon={<FaFacebookF size={35} />}
          label="Facebook"
          number="5,00,000 Likes"
          background="bg-[#60a5fa]"
        />
        <BlockUi3
          icon={<FaTwitter size={35} />}
          label="Twitter"
          number="40,000 Tweets"
          background="bg-[#22d3ee]"
        />
        <BlockUi3
          icon={<FaGooglePlusG size={35} />}
          label="Google +"
          number="4,60,000 Plus"
          background="bg-[#f97316]"
        />
        <BlockUi3
          icon={<FaPinterest size={35} />}
          label="Pinterest"
          number="34,000 Pins"
          background="bg-[#dc2626]"
        />
      </div>
      <h1>Block Ui 4</h1>
      <div>
        <BlockUi4 label="YESTERDAY" number="15,699" />
      </div>
      <h1>Block UI 5</h1>
      <BlockUi5 />
      <h1>Block UI 6</h1>
      <div className="grid grid-cols-4 mx-1">
        <BlockUi6
          src6="https://plus.unsplash.com/premium_photo-1674498271296-5144c596b43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
          label6="EODEM MONO TYPI"
          hiddenCost=""
        />
        <BlockUi6
          src6="https://images.unsplash.com/photo-1611171711912-e3f6b536f532?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          label6="SEQUITUR MUTATIONEM"
          hiddenCost=""
        />
        <BlockUi6
          src6="https://images.unsplash.com/photo-1510130387422-82bed34b37e9?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          label6="CONSUETUDIUM LECTORUM"
          hiddenCost=""
        />
        <BlockUi6
          src6="https://images.unsplash.com/photo-1580959375944-abd7e991f971?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          label6="PARUM CLARAM"
          hiddenCost="$75"
        />
      </div>
    </>
  );
}

export default App;
