export default function Review({ review }) {
  return (
    <tr>
      <td>{review.date}</td>
      <td>{review.productName}</td>
      <td>{review.customerName}</td>
      <td>{review.ratings}/5.0</td>
      <td>{review.description}</td>
    </tr>
  );
}
