function Profile() {
    const name = "Giri prasad"
    const isstudent = true;
    let age = 18;
    return (
        <div>
            <p>Hello {name}</p>
            <p>My Age: {age} </p>
            <p>{isstudent === true ? "iam a student" : "iam not a student"}</p>
        </div>
    )

}
export default Profile;