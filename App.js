const heading = React.createElement("h1",{},"Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)



const heading_2 = React.createElement("div",{id:"parent"},[
  React.createElement("div",{id:"child_1"},
  React.createElement("h1",{id:"h1"},"hi!")
  ),
  React.createElement("div",{id:"child_2"},
  React.createElement("h1",{id:"h1"},"hi!")
  )
]

)

root.render(heading_2)