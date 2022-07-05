import { useState } from "react";

export default function Form() {
    const dataForm = {
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isFriendly: true,
        employement: "",
        favColor: "",
    };
    const [data, setData] = useState(dataForm);
    function handleChange(e) {
        setData((prev) => {
            const { name, value, type } = e.target;
            return {
                ...prev,
                [name]: type === "checkbox" ? !data.isFriendly : value,
            };
        });
    }
    
    function submitHandler(event) {
        event.preventDefault()
        console.log(data);
    }
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
                value={data.firstName}
            />{" "}
            <br />
            <br />
            <input
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
                value={data.lastName}
            />
            <br />
            <br />
            <input
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
                value={data.email}
            />
            <br />
            <br />
            <textarea
                name="comment"
                placeholder="comment"
                onChange={handleChange}
                value={data.comment}
            />
            <br />
            <br />
            <input
                type="checkbox"
                id="isFriendly"
                name="isFriendly"
                checked={data.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment statuts</legend>
                <input
                    type="radio"
                    id="unemployed"
                    value="unemployed"
                    checked={data.employement === "unemployed"}
                    name="employement"
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input
                    type="radio"
                    id="part-time"
                    value="part-time"
                    name="employement"
                    checked={data.employement === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                <input
                    type="radio"
                    id="full-time"
                    value="full-time"
                    name="employement"
                    checked={data.employement === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
            </fieldset>
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                name="favColor"
                value={data.favColor}
                onChange={handleChange}
            >
                <option value="">--choose--</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="indigo">Indigo</option>
                <option value="blue">Blue</option>
                <option value="violet">Violet</option>
            </select>
            <br /><br />
            <button>Submit</button>
        </form>
    );
}
/*fieldset :  name had the same value to ensure only one input is checked  */
