//making user tag (this is a component)

let User = () => {
  let data = [
    {
      _id: 1,
      name: "aarnav",
      age: "20",
      address: "Kathmandu",
      photo:
        "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.instagram.com%2Fp%2FDKmhGvfyw9y%2F&ved=0CBYQjRxqFwoTCKCzkdKupJYDFQAAAAAdAAAAABA4&opi=89978449",
    },
    {
      _id: 2,
      name: "nitan",
      age: "30",
      address: "Kathmandu",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3rDs0s9jojujJuYGpTHZPRz06AqBkwdvWgVUJ04ZGA&s=10",
    },
    {
      _id: 3,
      name: "nabin",
      age: "20",
      address: "Kathmandu",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElGBxIZg6Pi3heDcLGZJcSIWltYitUzUUzLf9uSAM8w&s=10",
    },
    {
      _id: 4,
      name: "balak",
      age: "10",
      address: "Kathmandu",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8sSKMv8uxnPtemewCiQILvmNAk_vp_ag-pNLB8tOsg&s=10",
    },
  ];
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item._id}>
            <img src={item.photo} width="200px" height="200px"></img>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Address: {item.address}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
