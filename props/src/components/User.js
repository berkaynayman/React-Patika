import PropTypes from "prop-types";

// function User(props){ 
function User({name, surname, age, isLoggedIn, friends, address}){
    return(
        <>
            <div>
            {
                isLoggedIn ?
                `Selam ${name} ${surname}`
                : "Giriş yapmadınız"
            }
            </div>

            <div>
                Yaşınız {age}
            </div>
            
            <h1>
                { address.title } { address.zip }
            </h1>

            <div>
                <h3>Arkadaşlar</h3>
                {   friends &&
                    friends.map((friend, index) => (
                        <div key={index}>
                            {index}-{friend}
                        </div>
                    ))
                } 
            </div>
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    isLoggedIn: false
}

export default User