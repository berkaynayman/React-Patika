import { useFormik, Formik, Field, Form } from 'formik';
import Signup from './components/Signup';

/*
function App() {
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
      firstName: 'Berkay',
      lastName: 'Nayman',
      email: 'berkay@nayman.com',
      gender: 'male',
      hobies: [],
      country: "turkey"
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div>
      <h1>Sign Up</h1>
        {
          
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" placeholder="Jane" />

              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" placeholder="Doe" />

              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              <button type="submit">Submit</button>
            </Form>
          
        }
        
        
        {kendi form taglarimiz ile işlem yaptık handlesubmit ve onchange i formik bize verir}
          
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" value={values.firstName} onChange={handleChange}/>
              <br/>
              <br/>
              <label htmlFor="lastName">lastName</label>
              <input name="lastName"  value={values.lastName} onChange={handleChange}/>
              <br/>
              <br/><label htmlFor="email">email</label>
              <input name="email"  value={values.email} onChange={handleChange}/>
              <br/>
              <br/>

              <span>Male</span>
              <input 
              type="radio"
              name="gender"
              value="male"
              checked={values.gender === "male"}
              onChange={handleChange}
              />

              <span>Female</span>
              <input 
              type="radio"
              name="gender"
              value="female"
              checked={values.gender === "female"}
              onChange={handleChange}
              />

              <div>
                footbal
                <input type="checkbox" name="hobies" value="Football" onChange={handleChange} />
              </div>

              <div>
                cinema
                <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange} />
              </div>

              <div>
                Photography
                <input type="checkbox" name="hobies" value="Photography" onChange={handleChange} />
              </div>

              <br/>
              <br/>

              <select name="country" value={values.country} onChange={handleChange}>
                <option value="turkey">Turkey</option>
                <option value="england">England</option>
                <option value="usa">USA</option>
              </select>

              <br/>
              <br/>

              <button type="submit">Submit</button>

              <br/>
              <br/>

              <code>
                {
                  JSON.stringify(values)
                }
              </code>
              
            </form>
          
        
    </div>
  );
}
*/

// form validasyonları-1
function App() {

  return (
    <div>
      <h1>Sign Up</h1>
      <Signup/>
    </div>
  );
}

export default App;
