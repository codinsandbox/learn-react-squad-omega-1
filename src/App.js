import Counter from "./components/Counter";
import Form from "./components/Form";
import { Menu } from "./components/Menu";
import { MenuItem } from "./components/MenuItem";
import { MenuV2 } from "./components/MenuV2";
import { MenuV3 } from "./components/MenuV3";
import { MyName } from "./components/MyName";
import Name from "./components/Name";

//this is not done like this usualy, we will explore how to properley use mock data in the future
const menuItemMockData = [
  {
    label: "Home",
    link: "/",
    id: 0,
  },
  {
    label: "About",
    link: "/",
    id: 1,
  },
  {
    label: "Contact",
    link: "/",
    id: 2,
  },
];

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", alignItems: "start" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <h1>Lesson 1</h1>
          <MyName name="Your name :)" />
          <p>Menu version 1</p>
          <Menu />
          <p>Menu version 2</p>
          <MenuV2 />
          <p>Menu version 3</p>
          <MenuV3>
            {menuItemMockData.map((item) => (
              <MenuItem link={item.link} label={item.label} key={item.id} />
            ))}
          </MenuV3>
          {/* <MenuV3>
              destructured props version, the item variable item is being destructured here
              {menuItemMockData.map((item) => (
                <MenuItem {...item} key={item.id} />
              ))}
            </MenuV3> */}
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Lesson 2</h1>
          <p style={{ textAlign: "center" }}>
            Simple name form with input and submit
          </p>
          <Name />
          <p>Simple counter example</p>
          <Counter />
          <p>Form example</p>
          <Form />
        </div>
      </div>

      {/* Use this zone to add your components if you opted to use this repo localy */}
      <div>
        {/* add your components here */}
      </div>
    </div>
  );
}

export default App;
