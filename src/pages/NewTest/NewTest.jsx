import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./NewTest.css";
const NewTest = () => {
  const [testName, setTestName] = useState("");
  const [normal, setNormal] = useState("");
  const [price, setPrice] = useState("");
  const [comments, setComments] = useState("");
  const history = useHistory();
  const handeleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/tests", {
        testName,
        normal,
        price,
        comments
      });
      history.push('/tests');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="new-test">
      <h1>Add New Test</h1>
      <form onSubmit={handeleSubmit}>
        <div className="input-area">
          <label htmlFor="name">Test Name</label>
          <input required type="text" name="name" onChange={(e) => setTestName(e.target.value)} />
        </div>
        <div className="input-area">
          <label htmlFor="normal">Normal</label>
          <input required type="text" name="normal" onChange={(e) => setNormal(e.target.value)} />
        </div>
        <div className="input-area">
          <label htmlFor="price">Price</label>
          <input required type="number" name="price" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="input-area">
          <label htmlFor="commnt">Commnts</label>
          <textarea name="commnt" onChange={(e) => setComments(e.target.value)} />
        </div>
        <div className="input-area">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTest;
