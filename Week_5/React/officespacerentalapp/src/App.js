function App() {
  const element = 'Office Space';

  const officeImg =
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400';

  const officeSpaces = [
    {
      name: 'DBS',
      rent: 50000,
      address: 'Chennai'
    },
    {
      name: 'Regus',
      rent: 70000,
      address: 'Bangalore'
    },
    {
      name: 'WeWork',
      rent: 65000,
      address: 'Hyderabad'
    }
  ];

  return (
    <div style={{ margin: '50px' }}>
      <h1>{element}, at Affordable Range</h1>

      <img
        src={officeImg}
        width="25%"
        height="25%"
        alt="Office Space"
      />

      {officeSpaces.map((office, index) => (
        <div key={index}>
          <h1>Name: {office.name}</h1>

          <h3 style={{ color: office.rent <= 60000 ? 'red' : 'green' }}>
            Rent: Rs. {office.rent}
          </h3>

          <h3>Address: {office.address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;