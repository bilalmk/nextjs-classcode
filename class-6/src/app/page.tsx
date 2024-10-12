

export default function Home() {
  return (
    <div style={{ margin:"0px auto", width:"50%" }}>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <div>
                <p style={{ fontSize:"20px", lineHeight:"30px" }}>
                    <b>
                Khyber Pakhtunkhwa Chief Minister Ali Amin Gandapur on Friday visited the site of a peace jirga in Khyber district to oversee arrangements for the gathering and ordered the administration to fully facilitate the participants with whatever they needed.
                </b>
                </p>
                Earlier today, he had announced that the provincial administration would host the Pashtun Tahaffuz Movement’s (PTM) three-day jirga and ensure that all the matters were resolved peacefully.
                <p>
                The federal government agreed, in principle, to lift a recently-imposed ban on the PTM during a multiparty grand jirga, hosted by the provincial government on Thursday. The jirga agreed that the “proscribed” PTM would be allowed to hold its scheduled Pashtoon Qaumi Jirga today, which would be hosted by the KP government and attended by CM Gandapur.
                </p>
                <p>
                Visiting the site at the district’s Jamrud area, the chief minister reviewed security and other arrangements for holding the jirga after being briefed by the relevant authorities.
                </p>
            </div>
            <div>
                <img src="/1.jpg" width="800px" height="300px"></img>
            </div>
            <h1>
                <a href="https://www.dawn.com/news/1864540/kp-cm-orders-full-facilitation-of-jamrud-jirga-participants-in-site-visit" target="_blank">click here to open story</a>
            </h1>
            <ul>
                <li>Pakistan</li>
                <ul>
                    <li>Karachi</li>
                    <li>Lahore</li>
                    <li>Peshawar</li>
                    <ul>
                        <li>Sadar</li>
                        <li>Hayatabad</li>
                        <li>Gulbarg</li>
                    </ul>
                </ul>
                <li>India</li>
                <li>Japan</li>
            </ul>
            <ol>
                <li>Pakistan</li>
                <ol>
                    <li>Karachi</li>
                    <li>Lahore</li>
                    <li>Peshawar</li>
                    <ol>
                        <li>Sadar</li>
                        <li>Hayatabad</li>
                        <li>Gulbarg</li>
                    </ol>
                </ol>
                <li>India</li>
                <li>Japan</li>
            </ol>
            <div>
                <table border="1px" cellPadding="15px" cellSpacing="0px" width="100%">
                    <tr style={{ backgroundColor: "gray", color: "white", fontSize: "20px" }}>
                        <th width="30%">Country</th>
                        <th width="70%">Capital</th>
                    </tr>
                    <tr style={{ backgroundColor: "lightgray" }}>
                        <td>Pakistan</td>
                        <td>Islamabad</td>
                    </tr>
                    <tr style={{ backgroundColor: "#d9bfbf" }}>
                        <td>India</td>
                        <td>New Delhi</td>
                    </tr>
                    <tr style={{ backgroundColor: "lightgray" }}>
                        <td>Japan</td>
                        <td>Tokyo</td>
                    </tr>
                </table>
            </div>
            <div>
                <form>
                <table width={600}>
                    <tr>
                        <td><label htmlFor="name">Name</label></td>
                        <td><input type="text" id="name" name="name" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email</label></td>
                        <td><input type="email" id="email" name="email" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password</label></td>
                        <td><input type="password" id="password" name="password" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><textarea rows={10} cols={50} placeholder="Enter your text here"></textarea></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="Submit" /></td>
                    </tr>
                </table>
                </form>
            </div>
        </div>
  );
}
