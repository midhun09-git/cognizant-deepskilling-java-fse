function UserPage() {
  return (
    <div>
      <h1>Welcome User</h1>
      <h2>Book Your Ticket</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Indigo 6E-123</td>
            <td>Chennai</td>
            <td>Bangalore</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

          <tr>
            <td>Air India AI-456</td>
            <td>Coimbatore</td>
            <td>Delhi</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;