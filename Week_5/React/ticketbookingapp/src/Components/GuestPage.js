function GuestPage() {
  return (
    <div>
      <h1>Welcome Guest</h1>
      <h2>Flight Details</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Indigo 6E-123</td>
            <td>Chennai</td>
            <td>Bangalore</td>
            <td>10:00 AM</td>
          </tr>
          <tr>
            <td>Air India AI-456</td>
            <td>Coimbatore</td>
            <td>Delhi</td>
            <td>2:30 PM</td>
          </tr>
        </tbody>
      </table>

      <p>Please login to book tickets.</p>
    </div>
  );
}

export default GuestPage;