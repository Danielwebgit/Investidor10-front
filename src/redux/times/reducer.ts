
const initialState = [
    {
        id: 1,
        title: "Time 01",
        cards: [
          {
            id: 1,
            title: "Card title 1"
          },
          {
            id: 2,
            title: "Card title 2"
          },
          {
            id: 3,
            title: "Card title 3"
          }
        ]
}
           
];


const timeReducer = (state = initialState, action: any) => {
return state;
}

export default timeReducer;